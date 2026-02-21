import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, '..');
const AUDIO_DIR = join(BASE, 'audio');
const API_KEY = 'sk_a9b62b1042c3196a587fcef3d15fbd21c03958f1f8b20256';
const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice
const MODEL = 'eleven_multilingual_v2';

mkdirSync(AUDIO_DIR, { recursive: true });

function stripHtml(html) {
    // Remove script, button, svg, style tags and content
    let t = html.replace(/<(script|button|svg|style)[^>]*>[\s\S]*?<\/\1>/gi, '');
    // Add pauses at headings, paragraphs, list items
    t = t.replace(/<\/?(h[34]|p|li)[^>]*>/gi, '. ');
    // Remove all remaining tags
    t = t.replace(/<[^>]+>/g, ' ');
    // Decode entities
    t = t.replace(/&amp;/g, 'and').replace(/&mdash;/g, ' — ').replace(/&ndash;/g, ' – ')
         .replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'").replace(/&rdquo;/g, '"').replace(/&ldquo;/g, '"')
         .replace(/&larr;/g, '').replace(/&rarr;/g, '').replace(/&nbsp;/g, ' ')
         .replace(/&#\d+;/g, '').replace(/&\w+;/g, ' ');
    // Clean up
    t = t.replace(/\s+/g, ' ').replace(/\.{2,}/g, '.').replace(/\.\s*\./g, '.').trim();
    return t;
}

function extractSections(htmlPath) {
    const html = readFileSync(htmlPath, 'utf-8');
    const sections = {};
    
    // Match content-section divs by splitting on their opening tags
    const parts = html.split(/<div\s+id="([^"]+)"\s+class="content-section[^"]*">/);
    
    for (let i = 1; i < parts.length - 1; i += 2) {
        const id = parts[i];
        let content = parts[i + 1];
        // Cut at next content-section or closing section tag
        content = content.split(/<div\s+id="[^"]+"\s+class="content-section/)[0];
        const text = stripHtml(content);
        if (text.length > 30) sections[id] = text;
    }
    
    // Also extract full view-unit sections for "Read All"
    const unitPattern = /<section\s+id="(view-unit\d+|view-(?:mlc|tc)[^"]*)"[\s\S]*?class="view">([\s\S]*?)<\/section>/g;
    let m;
    while ((m = unitPattern.exec(html)) !== null) {
        const text = stripHtml(m[2]);
        if (text.length > 100) sections[m[1]] = text;
    }
    
    return sections;
}

function generateAudio(text, outputPath) {
    // Truncate to 5000 chars (ElevenLabs limit per request)
    if (text.length > 5000) text = text.slice(0, 5000);
    
    const payload = JSON.stringify({
        text,
        model_id: MODEL,
        voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3 }
    });
    
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'api.elevenlabs.io',
            path: `/v1/text-to-speech/${VOICE_ID}`,
            method: 'POST',
            headers: {
                'xi-api-key': API_KEY,
                'Content-Type': 'application/json',
                'Accept': 'audio/mpeg'
            }
        }, res => {
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end', () => {
                if (res.statusCode === 200) {
                    writeFileSync(outputPath, Buffer.concat(chunks));
                    resolve(true);
                } else {
                    const body = Buffer.concat(chunks).toString();
                    console.error(`  ✗ HTTP ${res.statusCode}: ${body.slice(0, 200)}`);
                    resolve(false);
                }
            });
        });
        req.on('error', e => { console.error(`  ✗ ${e.message}`); resolve(false); });
        req.write(payload);
        req.end();
    });
}

async function main() {
    const htmlFiles = ['life-sciences.html', 'geography.html', 'it.html'];
    const manifest = {};
    let totalChars = 0;
    let generated = 0;
    
    for (const file of htmlFiles) {
        const htmlPath = join(BASE, file);
        if (!existsSync(htmlPath)) continue;
        
        const page = file.replace('.html', '');
        console.log(`\n📄 ${file}`);
        
        const sections = extractSections(htmlPath);
        
        for (const [id, text] of Object.entries(sections)) {
            const filename = `${page}--${id}.mp3`;
            const outputPath = join(AUDIO_DIR, filename);
            totalChars += Math.min(text.length, 5000);
            
            if (existsSync(outputPath)) {
                console.log(`  ⏭ ${filename} (exists)`);
                manifest[id] = filename;
                continue;
            }
            
            const ok = await generateAudio(text, outputPath);
            if (ok) {
                console.log(`  ✓ ${filename} (${text.length} chars)`);
                manifest[id] = filename;
                generated++;
            }
            
            // Small delay to avoid rate limits
            await new Promise(r => setTimeout(r, 500));
        }
    }
    
    writeFileSync(join(AUDIO_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`\n✅ Done! ${Object.keys(manifest).length} total, ${generated} newly generated, ~${totalChars.toLocaleString()} chars`);
}

main().catch(console.error);
