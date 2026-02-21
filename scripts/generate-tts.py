"""Generate ElevenLabs TTS audio for all content sections in the study app."""
import os, re, json, sys
from pathlib import Path
from html.parser import HTMLParser

API_KEY = os.environ.get("ELEVENLABS_API_KEY", "sk_a9b62b1042c3196a587fcef3d15fbd21c03958f1f8b20256")
VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2"  # Alice - Clear, Engaging Educator
MODEL = "eleven_multilingual_v2"
BASE = Path(__file__).parent.parent
AUDIO_DIR = BASE / "audio"
AUDIO_DIR.mkdir(exist_ok=True)

class TextExtractor(HTMLParser):
    """Extract readable text from HTML, adding pauses at headings and list items."""
    def __init__(self):
        super().__init__()
        self.text = []
        self.skip = False
        self.skip_tags = {"script", "button", "svg", "style"}
        self.skip_depth = 0
        self.pause_tags = {"h3", "h4", "li", "p"}
    
    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.skip = True
            self.skip_depth += 1
        if tag in self.pause_tags and self.text:
            self.text.append(". ")
    
    def handle_endtag(self, tag):
        if self.skip and tag in self.skip_tags:
            self.skip_depth -= 1
            if self.skip_depth <= 0:
                self.skip = False
                self.skip_depth = 0
        if tag in self.pause_tags:
            self.text.append(". ")
    
    def handle_data(self, data):
        if not self.skip:
            self.text.append(data)
    
    def get_text(self):
        t = " ".join(self.text)
        t = re.sub(r"\s+", " ", t)
        t = re.sub(r"\.{2,}", ".", t)
        return t.strip()

def extract_sections(html_path):
    """Extract content-section ids and their HTML content."""
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    sections = {}
    # Find view sections (units) and individual content-sections
    # Match content-section divs
    pattern = r'<div\s+id="([^"]+)"\s+class="content-section[^"]*">(.*?)</div>\s*(?=<div\s+(?:id="[^"]+"\s+)?class="content-section|</section>)'
    
    # Simpler approach: split by content-section markers
    parts = re.split(r'<div\s+id="([^"]+)"\s+class="content-section[^"]*">', html)
    
    i = 1  # skip first part (before first section)
    while i < len(parts) - 1:
        section_id = parts[i]
        content = parts[i + 1]
        # Cut content at next section or end of parent
        content = re.split(r'<div\s+id="[^"]+"\s+class="content-section', content)[0]
        
        extractor = TextExtractor()
        extractor.feed(content)
        text = extractor.get_text()
        
        if text and len(text) > 20:
            sections[section_id] = text
        i += 2
    
    return sections

def extract_view_units(html_path):
    """Extract full unit views for 'Read All' audio."""
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    units = {}
    # Find view sections like view-unit1, view-unit2 etc
    pattern = r'<section\s+id="(view-unit\d+|view-[a-z]+\d*)"\s+class="view">(.*?)</section>'
    for match in re.finditer(pattern, html, re.DOTALL):
        view_id = match.group(1)
        content = match.group(2)
        
        extractor = TextExtractor()
        extractor.feed(content)
        text = extractor.get_text()
        
        if text and len(text) > 50:
            units[view_id] = text
    
    return units

def generate_audio(text, output_path):
    """Call ElevenLabs API to generate audio."""
    import urllib.request
    
    # Truncate if too long (ElevenLabs has limits)
    if len(text) > 5000:
        text = text[:5000]
    
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    payload = json.dumps({
        "text": text,
        "model_id": MODEL,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75,
            "style": 0.3
        }
    }).encode()
    
    req = urllib.request.Request(url, data=payload, headers={
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg"
    })
    
    try:
        with urllib.request.urlopen(req) as resp:
            with open(output_path, "wb") as f:
                f.write(resp.read())
        print(f"  ✓ {output_path.name} ({len(text)} chars)")
        return True
    except Exception as e:
        print(f"  ✗ {output_path.name}: {e}")
        return False

def main():
    html_files = list(BASE.glob("*.html"))
    manifest = {}  # section_id -> audio filename
    total_chars = 0
    
    for html_file in html_files:
        if html_file.name in ("index.html",):
            continue
        
        page = html_file.stem  # e.g. "life-sciences"
        print(f"\n📄 {html_file.name}")
        
        # Individual sections
        sections = extract_sections(html_file)
        for section_id, text in sections.items():
            filename = f"{page}--{section_id}.mp3"
            output = AUDIO_DIR / filename
            total_chars += len(text)
            
            if output.exists():
                print(f"  ⏭ {filename} (exists)")
                manifest[section_id] = filename
                continue
            
            if generate_audio(text, output):
                manifest[section_id] = filename
        
        # Full units
        units = extract_view_units(html_file)
        for view_id, text in units.items():
            filename = f"{page}--{view_id}.mp3"
            output = AUDIO_DIR / filename
            total_chars += len(text)
            
            if output.exists():
                print(f"  ⏭ {filename} (exists)")
                manifest[view_id] = filename
                continue
            
            if generate_audio(text, output):
                manifest[view_id] = filename
    
    # Write manifest
    manifest_path = AUDIO_DIR / "manifest.json"
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)
    
    print(f"\n✅ Done! {len(manifest)} audio files, ~{total_chars:,} chars total")
    print(f"📁 Manifest: {manifest_path}")

if __name__ == "__main__":
    main()
