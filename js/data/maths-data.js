// ============================================================
// FLASHCARD DATA - Mathematics
// Units: functions, euclidean, circles, sequences, finance,
//        calculus, probability, statistics, trigonometry
// ============================================================
const flashcards = [
    // --- Functions & Inverses ---
    { id: 1, unit: "functions", q: "What is the definition of a function?", a: "A function is a relation where every element in the domain (x-value) is mapped to exactly one element in the range (y-value). Each input has only one output." },
    { id: 2, unit: "functions", q: "What is the inverse of a function?", a: "The inverse of a function f is obtained by swapping x and y. If f maps x to y, then f⁻¹ maps y back to x. Graphically, the inverse is a reflection of f in the line y = x." },
    { id: 3, unit: "functions", q: "How do you find the inverse of y = ax + q (linear function)?", a: "Swap x and y: x = ay + q, then solve for y: y = (x - q)/a. The inverse of a linear function is always a function." },
    { id: 4, unit: "functions", q: "What is the inverse of y = ax²? Is it a function?", a: "Swap x and y: x = ay², so y = ±√(x/a). This is NOT a function because each x-value gives two y-values. You must restrict the domain of the original parabola to make the inverse a function." },
    { id: 5, unit: "functions", q: "How do you restrict the domain of y = ax² so that its inverse is a function?", a: "Restrict to either x ≥ 0 (right half) giving inverse y = √(x/a), or x ≤ 0 (left half) giving inverse y = -√(x/a). Each restriction gives one branch of the sideways parabola." },
    { id: 6, unit: "functions", q: "What is the inverse of y = bˣ (exponential function)?", a: "Swap x and y: x = bʸ, which gives y = log_b(x). The inverse of an exponential function is a logarithmic function. The inverse is always a function (no restriction needed)." },
    { id: 7, unit: "functions", q: "What is the relationship between exponential and logarithmic functions?", a: "They are inverses of each other. If y = bˣ then x = log_b(y). The graph of y = log_b(x) is the reflection of y = bˣ in the line y = x." },
    { id: 8, unit: "functions", q: "State the key features of y = log_b(x) where b > 1.", a: "Domain: x > 0. Range: y ∈ ℝ. x-intercept at (1, 0) because log_b(1) = 0. Asymptote: x = 0 (y-axis). The graph increases from left to right. Passes through (b, 1)." },
    { id: 9, unit: "functions", q: "How do the domains and ranges swap between a function and its inverse?", a: "The domain of f becomes the range of f⁻¹, and the range of f becomes the domain of f⁻¹. This is because we swap x and y." },
    { id: 10, unit: "functions", q: "What line is the axis of symmetry between a function and its inverse?", a: "The line y = x. A function and its inverse are always reflections of each other in the line y = x." },
    { id: 11, unit: "functions", q: "How do you sketch the inverse of a given graph?", a: "1. Identify key points on the original graph.\n2. Swap the x and y coordinates of each point.\n3. Plot the new points.\n4. Draw the curve through them.\n(Or reflect the entire graph in y = x.)" },
    { id: 12, unit: "functions", q: "What is the inverse of y = 10ˣ?", a: "y = log₁₀(x), commonly written as y = log x. The graph passes through (1, 0) and (10, 1), with asymptote x = 0." },

    // --- Euclidean Geometry ---
    { id: 13, unit: "euclidean", q: "State the Proportionality Theorem (Basic Proportionality Theorem).", a: "If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally. If DE ∥ BC in △ABC with D on AB and E on AC, then AD/DB = AE/EC." },
    { id: 14, unit: "euclidean", q: "State the converse of the Proportionality Theorem.", a: "If a line divides two sides of a triangle in the same proportion, then the line is parallel to the third side. If AD/DB = AE/EC, then DE ∥ BC." },
    { id: 15, unit: "euclidean", q: "State the Midpoint Theorem.", a: "The line segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. If D and E are midpoints of AB and AC, then DE ∥ BC and DE = ½BC." },
    { id: 16, unit: "euclidean", q: "What are the conditions for two triangles to be similar?", a: "Two triangles are similar if: (1) All corresponding angles are equal (AAA), OR (2) All corresponding sides are in the same proportion. Similar triangles have the same shape but not necessarily the same size." },
    { id: 17, unit: "euclidean", q: "State the theorem: Triangles with equal bases between parallel lines.", a: "Triangles with equal bases (or the same base) and between the same parallel lines have equal areas. This is because they share the same base and have the same height." },
    { id: 18, unit: "euclidean", q: "If two triangles are equiangular, what can you conclude about their sides?", a: "Their corresponding sides are in proportion (the triangles are similar). This is the AA similarity theorem - if two angles of one triangle equal two angles of another, the triangles are similar." },
    { id: 19, unit: "euclidean", q: "State the Theorem of Pythagoras and its converse.", a: "Theorem: In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides (c² = a² + b²).\nConverse: If c² = a² + b² in a triangle, then the angle opposite the longest side is 90°." },
    { id: 20, unit: "euclidean", q: "Outline the proof of Pythagoras using similar triangles.", a: "In △ABC with Ĉ = 90°, draw altitude CD ⊥ AB.\n△ACD ||| △ABC (AA) → AC² = AD · AB\n△BCD ||| △ABC (AA) → BC² = BD · AB\nAdding: AC² + BC² = AB(AD + BD) = AB². ∎" },
    { id: 21, unit: "euclidean", q: "How do you prove that two triangles are similar?", a: "Method 1: Show all three pairs of corresponding angles are equal (AAA - only need 2 pairs).\nMethod 2: Show all three pairs of corresponding sides are in the same proportion.\nMethod 3: Show two sides in proportion and included angles equal." },
    { id: 22, unit: "euclidean", q: "What is the area rule relating similar triangles?", a: "If two triangles are similar with sides in ratio k:1, then their areas are in the ratio k²:1. Area scales as the square of the linear scale factor." },
    { id: 23, unit: "euclidean", q: "Outline the proof of the Proportionality Theorem.", a: "Given DE ∥ BC. Construct heights from B and C to DE.\nArea(△ADE)/Area(△BDE) = AD/DB (same height from E)\nArea(△ADE)/Area(△CDE) = AE/EC (same height from D)\n△BDE and △CDE have equal areas (same base, between ∥ lines)\nTherefore AD/DB = AE/EC. ∎" },
    { id: 24, unit: "euclidean", q: "If △ABC ||| △DEF with AB/DE = 3/2 and area of △ABC = 54 cm², find area of △DEF.", a: "Scale factor k = 3/2, area ratio = k² = 9/4.\n54 / Area(△DEF) = 9/4\nArea(△DEF) = 54 × 4/9 = 24 cm²." },

    // --- Circle Geometry ---
    { id: 25, unit: "circles", q: "State: angle at the centre vs angle at the circumference.", a: "The angle subtended by an arc at the centre is twice the angle subtended by the same arc at any point on the circumference. Central angle = 2 × inscribed angle." },
    { id: 26, unit: "circles", q: "State: angles in the same segment.", a: "Angles subtended by the same arc (or chord) at the circumference, on the same side of the chord, are equal." },
    { id: 27, unit: "circles", q: "State: the angle in a semicircle.", a: "The angle subtended by a diameter at the circumference is always 90°. Special case: central angle is 180°, so inscribed angle is 90°." },
    { id: 28, unit: "circles", q: "What is a cyclic quadrilateral?", a: "A four-sided figure with all four vertices on the circumference of a circle." },
    { id: 29, unit: "circles", q: "State: opposite angles of a cyclic quadrilateral.", a: "The opposite angles of a cyclic quadrilateral add up to 180° (supplementary). If ABCD is cyclic, then Â + Ĉ = 180° and B̂ + D̂ = 180°." },
    { id: 30, unit: "circles", q: "How do you prove a quadrilateral is cyclic?", a: "(1) Opposite angles are supplementary, OR\n(2) An exterior angle equals the interior opposite angle, OR\n(3) Two points on the same side of a line subtend equal angles to the endpoints." },
    { id: 31, unit: "circles", q: "State the exterior angle theorem for cyclic quadrilaterals.", a: "An exterior angle of a cyclic quadrilateral equals the interior opposite angle." },
    { id: 32, unit: "circles", q: "State the Tangent-Chord (Tan-Chord) theorem.", a: "The angle between a tangent to a circle and a chord drawn from the point of tangency equals the inscribed angle subtended by the chord on the opposite side (angle in alternate segment)." },
    { id: 33, unit: "circles", q: "State the two tangent theorem.", a: "Two tangents drawn from the same external point to a circle are equal in length. The line from the external point to the centre bisects the angle between the tangents." },
    { id: 34, unit: "circles", q: "What is the relationship between a tangent and radius at the point of tangency?", a: "A tangent is perpendicular to the radius at the point of tangency. The angle between them is 90°." },
    { id: 35, unit: "circles", q: "State: equal chords subtend equal angles.", a: "If two chords are equal in length, they subtend equal angles at the centre. Conversely, chords subtending equal central angles are equal." },
    { id: 36, unit: "circles", q: "State: perpendicular from centre to a chord.", a: "A line from the centre perpendicular to a chord bisects that chord. Conversely, a line from the centre to the midpoint of a chord is perpendicular to the chord." },

    // --- Sequences & Series ---
    { id: 37, unit: "sequences", q: "What is the general term formula for an arithmetic sequence?", a: "Tₙ = a + (n - 1)d, where a is the first term and d is the common difference. The common difference d = Tₙ - Tₙ₋₁ (constant difference between consecutive terms)." },
    { id: 38, unit: "sequences", q: "What is the general term formula for a geometric sequence?", a: "Tₙ = arⁿ⁻¹, where a is the first term and r is the common ratio. The common ratio r = Tₙ / Tₙ₋₁ (constant ratio between consecutive terms)." },
    { id: 39, unit: "sequences", q: "What is the formula for the sum of an arithmetic series?", a: "Sₙ = n/2 × (2a + (n-1)d), or equivalently Sₙ = n/2 × (a + l) where l is the last term (l = Tₙ). Use the second form when the last term is known." },
    { id: 40, unit: "sequences", q: "What is the formula for the sum of a geometric series?", a: "Sₙ = a(rⁿ - 1)/(r - 1) when r ≠ 1. If r > 1, use this form. If r < 1 (and r ≠ 0), an equivalent form is Sₙ = a(1 - rⁿ)/(1 - r). If r = 1, Sₙ = na." },
    { id: 41, unit: "sequences", q: "When does a geometric series converge, and what is the sum to infinity?", a: "A geometric series converges only when -1 < r < 1 (i.e., |r| < 1). The sum to infinity is S∞ = a/(1 - r). If |r| ≥ 1, the series diverges (no finite sum)." },
    { id: 42, unit: "sequences", q: "What does sigma notation mean? Interpret: Σ(k=1 to 5) of (2k + 1).", a: "Sigma (Σ) means 'sum of'. The expression tells you the formula for each term and the range of k. Σ(k=1 to 5)(2k+1) = 3 + 5 + 7 + 9 + 11 = 35. Substitute each value of k into the formula and add the results." },
    { id: 43, unit: "sequences", q: "How do you determine whether a sequence is arithmetic, geometric, or neither?", a: "Check constant difference: T₂ - T₁ = T₃ - T₂ → arithmetic.\nCheck constant ratio: T₂/T₁ = T₃/T₂ → geometric.\nIf neither is constant, the sequence is neither arithmetic nor geometric." },
    { id: 44, unit: "sequences", q: "What is the relationship between Tₙ and Sₙ?", a: "Tₙ = Sₙ - Sₙ₋₁ for n ≥ 2. The nth term equals the sum of the first n terms minus the sum of the first (n-1) terms. For n = 1: T₁ = S₁." },
    { id: 45, unit: "sequences", q: "In an arithmetic sequence, T₃ = 11 and T₇ = 27. Find a and d.", a: "T₃ = a + 2d = 11 and T₇ = a + 6d = 27. Subtracting: 4d = 16, so d = 4. Then a = 11 - 8 = 3. The sequence is 3, 7, 11, 15, ..." },
    { id: 46, unit: "sequences", q: "In a geometric sequence, T₁ = 2 and T₄ = 54. Find r.", a: "T₄ = ar³ → 54 = 2r³ → r³ = 27 → r = 3. The sequence is 2, 6, 18, 54, ..." },
    { id: 47, unit: "sequences", q: "What is the sum of the first n natural numbers: 1 + 2 + 3 + ... + n?", a: "This is an arithmetic series with a = 1, d = 1, last term = n. Sₙ = n(n+1)/2. For example, 1+2+3+...+100 = 100 × 101/2 = 5050." },
    { id: 48, unit: "sequences", q: "A ball is dropped from 8 m and bounces to 3/4 of its previous height each time. What is the total distance travelled?", a: "Going down: S∞ = 8/(1-3/4) = 32 m. Going up after first bounce: 6 + 6(3/4) + ... = 6/(1-3/4) = 24 m. Total = 8 + 2 × 24 = 56 m. (Or: Total = 8 + 2 × (6/(1-3/4)) = 56 m.)" },
    { id: 49, unit: "sequences", q: "How do you convert sigma notation to expanded form and evaluate?", a: "Identify the formula and limits. Substitute each integer value from the lower to upper limit into the formula. Then add all results. For Σ(k=2 to 4)(k²): 4 + 9 + 16 = 29." },
    { id: 50, unit: "sequences", q: "What is a quadratic sequence and how do you find its nth term?", a: "A quadratic sequence has a constant second difference (i.e., the differences of the differences are constant). General form: Tₙ = an² + bn + c. Find a, b, c using the first three terms and the constant second difference (2a = second difference)." },
    { id: 51, unit: "sequences", q: "State the condition for a geometric series to have a sum to infinity.", a: "The common ratio r must satisfy |r| < 1, i.e., -1 < r < 1. This ensures each successive term gets smaller and the partial sums approach a finite limit." },

    // --- Financial Mathematics ---
    { id: 52, unit: "finance", q: "What is the formula for simple interest growth?", a: "A = P(1 + in), where A is the accumulated amount, P is the principal, i is the interest rate (as a decimal) per period, and n is the number of periods. Interest is calculated only on the original principal." },
    { id: 53, unit: "finance", q: "What is the formula for compound interest growth?", a: "A = P(1 + i)ⁿ, where A is the accumulated amount, P is the principal, i is the interest rate per compounding period, and n is the number of compounding periods. Interest is calculated on principal plus accumulated interest." },
    { id: 54, unit: "finance", q: "What is simple decay (straight-line depreciation)?", a: "A = P(1 - in). The asset loses value by a fixed amount each period. Used for book value of assets. i is the annual depreciation rate and n is the number of years." },
    { id: 55, unit: "finance", q: "What is compound decay (reducing balance depreciation)?", a: "A = P(1 - i)ⁿ. The asset loses value by a fixed percentage of the current value each period. The asset value decreases more slowly over time compared to straight-line depreciation." },
    { id: 56, unit: "finance", q: "What is the effective annual interest rate?", a: "The effective annual rate (EAR) is the actual annual interest rate when compounding more than once a year. Formula: EAR = (1 + iₙₒₘ/m)ᵐ - 1, where iₙₒₘ is the nominal annual rate and m is the number of compounding periods per year." },
    { id: 57, unit: "finance", q: "Convert a nominal rate of 12% p.a. compounded monthly to an effective annual rate.", a: "i_nominal = 0.12, m = 12. EAR = (1 + 0.12/12)¹² - 1 = (1.01)¹² - 1 ≈ 0.1268 = 12.68% per year." },
    { id: 58, unit: "finance", q: "What is the formula for future value of an annuity?", a: "Fᵥ = x[(1+i)ⁿ - 1]/i, where x is the regular payment amount, i is the interest rate per period, and n is the number of payments. Used for savings/investment plans (e.g., sinking funds)." },
    { id: 59, unit: "finance", q: "What is the formula for present value of an annuity?", a: "Pᵥ = x[1 - (1+i)⁻ⁿ]/i, where x is the regular payment amount, i is the interest rate per period, and n is the number of payments. Used for loan repayments (mortgage, car loan)." },
    { id: 60, unit: "finance", q: "What is a sinking fund?", a: "A sinking fund is a savings plan where equal regular deposits are made to accumulate a specific future amount (e.g., to replace a machine). Use the future value annuity formula: Fᵥ = x[(1+i)ⁿ - 1]/i, solving for x." },
    { id: 61, unit: "finance", q: "How do you calculate the outstanding balance of a loan?", a: "Outstanding balance = Present value of remaining payments. Use Pᵥ = x[1 - (1+i)⁻ⁿ]/i where n is the number of payments still remaining (not total payments made)." },
    { id: 62, unit: "finance", q: "What is a time line and when is it used?", a: "A time line is a diagram showing cash flows at specific time points. Used in finance problems involving multiple transactions at different times. Mark each transaction at the correct time point and use the appropriate formula to move amounts to a common time point (usually t=0 or t=n)." },
    { id: 63, unit: "finance", q: "What is a deferred annuity?", a: "An annuity where payments begin at a future date rather than immediately. To solve: find the present value of the annuity at the start of payments, then discount that amount back to t=0 using compound interest: P = Pᵥ × (1+i)⁻ᵏ where k is the deferral period." },
    { id: 64, unit: "finance", q: "How do you calculate loan repayment (monthly instalment)?", a: "Rearrange the present value annuity formula to find x: x = P × i / [1 - (1+i)⁻ⁿ], where P is the loan amount, i is the monthly interest rate, and n is the number of monthly payments. Ensure i and n are in consistent units (both monthly)." },
    { id: 65, unit: "finance", q: "A car worth R200 000 depreciates at 15% p.a. on reducing balance. What is its value after 4 years?", a: "A = P(1 - i)ⁿ = 200 000(1 - 0.15)⁴ = 200 000 × (0.85)⁴ ≈ 200 000 × 0.5220 ≈ R104 400." },
    { id: 66, unit: "finance", q: "What is the difference between nominal and effective interest rates?", a: "The nominal rate is the stated annual rate (e.g., 12% p.a. compounded monthly). The effective rate is the actual annual rate after compounding effects. The effective rate is always higher than the nominal rate when compounding more than once a year." },

    // --- Differential Calculus ---
    { id: 67, unit: "calculus", q: "What is the definition of the derivative using first principles?", a: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h. Substitute x+h into f, subtract f(x), simplify the numerator, divide by h, then take the limit as h approaches 0." },
    { id: 68, unit: "calculus", q: "State the power rule for differentiation.", a: "If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹. Multiply by the exponent and reduce the exponent by 1. Examples: d/dx(x³) = 3x², d/dx(x) = 1, d/dx(x⁻²) = -2x⁻³." },
    { id: 69, unit: "calculus", q: "State the constant rule for differentiation.", a: "The derivative of a constant is zero: d/dx(c) = 0. Also, d/dx[c·f(x)] = c·f'(x). A constant factor stays in front when differentiating." },
    { id: 70, unit: "calculus", q: "State the sum/difference rule for differentiation.", a: "The derivative of a sum or difference equals the sum or difference of the derivatives: d/dx[f(x) ± g(x)] = f'(x) ± g'(x). Differentiate each term separately." },
    { id: 71, unit: "calculus", q: "Find the derivative of f(x) = 3x⁴ - 2x³ + 5x - 7 using differentiation rules.", a: "f'(x) = 12x³ - 6x² + 5. Apply the power rule to each term: 3×4x³ = 12x³; -2×3x² = -6x²; 5×1 = 5; derivative of -7 is 0." },
    { id: 72, unit: "calculus", q: "How do you find the equation of a tangent to a curve at a given point?", a: "1. Find f'(x) (the derivative).\n2. Substitute the x-value to get the gradient m = f'(a).\n3. Find the y-value: y₁ = f(a).\n4. Use y - y₁ = m(x - a) to write the tangent equation." },
    { id: 73, unit: "calculus", q: "What are turning points and how do you find them?", a: "Turning points occur where f'(x) = 0 (stationary points). To find them: set f'(x) = 0 and solve for x, then substitute x back into f(x) to find the y-coordinate. Check second derivative or sign change to classify as max/min." },
    { id: 74, unit: "calculus", q: "How do you determine whether a stationary point is a local maximum or minimum?", a: "Method 1 (Second derivative test): If f''(x) < 0 at the point, it is a local maximum. If f''(x) > 0, it is a local minimum.\nMethod 2 (Sign chart): Check the sign of f'(x) on either side of the stationary point." },
    { id: 75, unit: "calculus", q: "What is a point of inflection?", a: "A point where the concavity of the curve changes (from concave up to concave down, or vice versa). Found by setting f''(x) = 0 and solving. For a cubic f(x) = ax³ + ..., the inflection point is the midpoint between the two turning points." },
    { id: 76, unit: "calculus", q: "Describe the shape of a cubic graph f(x) = ax³ + bx² + cx + d.", a: "If a > 0: starts bottom-left, ends top-right (S-shape). Has 0 or 2 turning points. If a < 0: starts top-left, ends bottom-right. y-intercept at d. x-intercepts found by factorisation or the given factor. Turning points found by setting f'(x) = 0." },
    { id: 77, unit: "calculus", q: "How do you use calculus for optimisation problems?", a: "1. Define a variable and express the quantity to maximise/minimise as a function of that variable.\n2. Find the derivative and set it equal to zero.\n3. Solve for the variable.\n4. Verify it gives a maximum or minimum using the second derivative or context.\n5. Answer in context." },
    { id: 78, unit: "calculus", q: "What is the notation for derivatives?", a: "Several notations are used: f'(x) (Lagrange), dy/dx (Leibniz), Dₓ[y] (operator notation). All mean the same: the derivative of the function with respect to x. Higher derivatives: f''(x) or d²y/dx² is the second derivative." },
    { id: 79, unit: "calculus", q: "Find f'(x) from first principles if f(x) = x².", a: "f'(x) = lim(h→0) [(x+h)² - x²]/h = lim(h→0) [x² + 2xh + h² - x²]/h = lim(h→0) [2xh + h²]/h = lim(h→0) (2x + h) = 2x." },
    { id: 80, unit: "calculus", q: "What does f'(x) > 0 / f'(x) < 0 / f'(x) = 0 mean about f(x)?", a: "f'(x) > 0: f is increasing at that point.\nf'(x) < 0: f is decreasing at that point.\nf'(x) = 0: f has a stationary point (turning point or point of inflection) — the tangent is horizontal." },
    { id: 81, unit: "calculus", q: "How do you differentiate expressions written as fractions or roots before applying rules?", a: "Rewrite in index form first. √x = x^(1/2), 1/x² = x⁻², 3/x = 3x⁻¹. Then apply the power rule. Example: d/dx(1/x) = d/dx(x⁻¹) = -x⁻² = -1/x²." },

    // --- Probability ---
    { id: 82, unit: "probability", q: "State the Fundamental Counting Principle.", a: "If one event can occur in m ways and a second event can occur in n ways, then both events together can occur in m × n ways. This extends to any number of events: multiply all possibilities together." },
    { id: 83, unit: "probability", q: "What is factorial notation? Evaluate 5!.", a: "n! = n × (n-1) × (n-2) × ... × 2 × 1. It is the product of all positive integers from 1 to n. 5! = 5 × 4 × 3 × 2 × 1 = 120. By definition, 0! = 1." },
    { id: 84, unit: "probability", q: "What is a permutation and what is the formula nPr?", a: "A permutation is an ordered arrangement of objects. nPr = n!/(n-r)! gives the number of ways to arrange r objects chosen from n distinct objects where order matters. Example: ₅P₂ = 5!/3! = 20." },
    { id: 85, unit: "probability", q: "What is a combination and what is the formula nCr?", a: "A combination is a selection of objects where order does NOT matter. nCr = n!/[r!(n-r)!]. Example: ₅C₂ = 5!/(2! × 3!) = 10. Also written as C(n,r) or (n choose r)." },
    { id: 86, unit: "probability", q: "What is the difference between permutations and combinations?", a: "Permutations: order matters (arranging). Combinations: order does not matter (selecting/choosing). If you must arrange/order, use permutations. If you only select a group, use combinations. nPr = nCr × r! always." },
    { id: 87, unit: "probability", q: "State the addition rule for probability.", a: "P(A or B) = P(A) + P(B) - P(A and B). This avoids double-counting events in both A and B. If A and B are mutually exclusive, P(A and B) = 0, so P(A or B) = P(A) + P(B)." },
    { id: 88, unit: "probability", q: "What are mutually exclusive events?", a: "Two events are mutually exclusive if they cannot both occur at the same time. P(A and B) = 0. Example: rolling a 3 and rolling a 5 on one die. For mutually exclusive events: P(A or B) = P(A) + P(B)." },
    { id: 89, unit: "probability", q: "What are independent events?", a: "Two events are independent if the occurrence of one does not affect the probability of the other. Test: P(A and B) = P(A) × P(B). If this equation holds, the events are independent." },
    { id: 90, unit: "probability", q: "What is the complementary probability rule?", a: "P(A') = 1 - P(A), where A' (A complement) is the event that A does NOT occur. The probability of an event and its complement always sum to 1. Useful when it is easier to calculate the complement." },
    { id: 91, unit: "probability", q: "How do you use a tree diagram in probability?", a: "Draw branches for each stage of an experiment. Label each branch with its probability. Multiply probabilities along a path to get the probability of that outcome. Add probabilities of all paths that give a desired event." },
    { id: 92, unit: "probability", q: "How do you use a Venn diagram in probability?", a: "Draw overlapping circles for each event inside a rectangle (sample space). Place probabilities in each region. The overlap represents P(A and B). Values in the rectangle but outside circles give P(neither A nor B). All values sum to 1." },
    { id: 93, unit: "probability", q: "What is a contingency table and how do you use it?", a: "A two-way table showing frequencies for two variables. Rows for one variable, columns for another. Use the table to find probabilities by dividing frequencies by the total. Check independence: P(A and B) = P(A) × P(B)." },
    { id: 94, unit: "probability", q: "In how many ways can the letters of MATHS be arranged?", a: "All 5 letters are distinct. Number of arrangements = 5! = 120." },
    { id: 95, unit: "probability", q: "How many 3-digit codes can be formed from digits 1-6 if repetition is NOT allowed?", a: "Order matters (different arrangements = different codes), no repetition. ₆P₃ = 6!/(6-3)! = 6 × 5 × 4 = 120." },
    { id: 96, unit: "probability", q: "A team of 3 is chosen from 8 people. How many ways?", a: "Order does not matter (a team). ₈C₃ = 8!/(3! × 5!) = (8 × 7 × 6)/(3 × 2 × 1) = 56 ways." },

    // --- Statistics ---
    { id: 97, unit: "statistics", q: "What are measures of central tendency?", a: "Mean (arithmetic average: sum ÷ count), Median (middle value when data is ordered), Mode (most frequent value). Each describes the 'centre' of a data set in a different way." },
    { id: 98, unit: "statistics", q: "What are measures of dispersion?", a: "Range (max - min), Interquartile range (IQR = Q3 - Q1), variance, and standard deviation. They describe how spread out or variable the data is around the central value." },
    { id: 99, unit: "statistics", q: "What is standard deviation and what does it tell us?", a: "Standard deviation (σ or s) measures the average distance of data values from the mean. A small σ means data is clustered near the mean. A large σ means data is spread out. It is the square root of the variance." },
    { id: 100, unit: "statistics", q: "How do you construct a box-and-whisker plot?", a: "Identify the five-number summary: minimum, Q1 (lower quartile), Q2 (median), Q3 (upper quartile), maximum. Draw a number line, mark the five values, draw a box from Q1 to Q3 with a line at Q2, draw whiskers to min and max." },
    { id: 101, unit: "statistics", q: "What is an ogive (cumulative frequency curve)?", a: "An ogive is a graph of cumulative frequency (or cumulative relative frequency) vs upper class boundary. It is S-shaped. Used to read off percentiles, median, and quartiles. Plot cumulative frequency on y-axis and the upper boundary of each class on x-axis." },
    { id: 102, unit: "statistics", q: "What does a symmetric data distribution look like?", a: "In a symmetric distribution, the mean, median, and mode are all equal (or nearly equal). The box-and-whisker plot shows equal whiskers. The histogram is bell-shaped. No skewness." },
    { id: 103, unit: "statistics", q: "What is positively skewed data (skewed to the right)?", a: "Most data clusters on the left (lower values), with a long tail to the right. Mean > Median > Mode. The right whisker and right box section are longer. Caused by a few very large values pulling the mean upward." },
    { id: 104, unit: "statistics", q: "What is negatively skewed data (skewed to the left)?", a: "Most data clusters on the right (higher values), with a long tail to the left. Mean < Median < Mode. The left whisker and left box section are longer. Caused by a few very small values pulling the mean downward." },
    { id: 105, unit: "statistics", q: "What is a scatter plot used for?", a: "A scatter plot displays bivariate data (two variables) as points on a Cartesian plane. It shows the relationship (association) between two variables. Used to identify correlation and the appropriate regression model." },
    { id: 106, unit: "statistics", q: "What is the least squares regression line?", a: "The least squares line ŷ = a + bx minimises the sum of squared vertical distances from the data points to the line. It is the line of best fit. Calculate: b = (nΣxy - ΣxΣy)/[nΣx² - (Σx)²] and a = ȳ - bx̄." },
    { id: 107, unit: "statistics", q: "What is the correlation coefficient r?", a: "r measures the strength and direction of the linear relationship between two variables. Range: -1 ≤ r ≤ 1. r = 1: perfect positive correlation. r = -1: perfect negative correlation. r = 0: no linear correlation. |r| close to 1 indicates strong correlation." },
    { id: 108, unit: "statistics", q: "What does the interquartile range (IQR) measure?", a: "IQR = Q3 - Q1. It measures the spread of the middle 50% of data, and is not affected by outliers or extreme values. A larger IQR means the middle half of data is more spread out." },
    { id: 109, unit: "statistics", q: "How do you identify an outlier?", a: "An outlier lies more than 1.5 × IQR below Q1 or more than 1.5 × IQR above Q3. Lower fence = Q1 - 1.5(IQR). Upper fence = Q3 + 1.5(IQR). Points outside these fences are outliers." },
    { id: 110, unit: "statistics", q: "What can you read from a cumulative frequency graph (ogive)?", a: "From the ogive: the median (50th percentile at 50% cumulative frequency), Q1 (25th percentile), Q3 (75th percentile), and any other percentile. Read the x-value corresponding to the desired cumulative frequency percentage." },
    { id: 111, unit: "statistics", q: "What is the meaning of the gradient and y-intercept of a regression line?", a: "Gradient b: for each 1-unit increase in x, y changes by b units (the rate of change). Y-intercept a: the predicted value of y when x = 0. Use the equation ŷ = a + bx to predict y-values from given x-values." },

    // --- Trigonometry ---
    { id: 112, unit: "trigonometry", q: "State the compound angle formula for cos(A + B).", a: "cos(A + B) = cosA·cosB - sinA·sinB. Related: cos(A - B) = cosA·cosB + sinA·sinB. These are key formulae — all others are derived from them." },
    { id: 113, unit: "trigonometry", q: "State the compound angle formula for sin(A + B).", a: "sin(A + B) = sinA·cosB + cosA·sinB. Related: sin(A - B) = sinA·cosB - cosA·sinB." },
    { id: 114, unit: "trigonometry", q: "State all three forms of the double angle formula for cos(2A).", a: "cos(2A) = cos²A - sin²A (from compound angle)\n= 2cos²A - 1 (using sin²A = 1 - cos²A)\n= 1 - 2sin²A (using cos²A = 1 - sin²A). Choose the form that matches the expression given." },
    { id: 115, unit: "trigonometry", q: "State the double angle formula for sin(2A).", a: "sin(2A) = 2sinA·cosA. This follows from the compound angle formula: sin(A + A) = sinA·cosA + cosA·sinA = 2sinA·cosA." },
    { id: 116, unit: "trigonometry", q: "What is the general solution for sinθ = k?", a: "If sinθ = k (where -1 ≤ k ≤ 1), then θ = arcsin(k) + 360°n OR θ = 180° - arcsin(k) + 360°n, where n ∈ ℤ (any integer). The reference angle is α = arcsin(|k|)." },
    { id: 117, unit: "trigonometry", q: "What is the general solution for cosθ = k?", a: "If cosθ = k (where -1 ≤ k ≤ 1), then θ = ±arccos(k) + 360°n, where n ∈ ℤ. Cosine is positive in Q1 and Q4, so the ± accounts for both quadrants." },
    { id: 118, unit: "trigonometry", q: "What is the general solution for tanθ = k?", a: "If tanθ = k, then θ = arctan(k) + 180°n, where n ∈ ℤ. Tangent has a period of 180°, so solutions repeat every 180° (not 360° like sine and cosine)." },
    { id: 119, unit: "trigonometry", q: "State the Sine Rule and when to use it.", a: "a/sinA = b/sinB = c/sinC. Use the Sine Rule when you know: (1) Two angles and any side (AAS or ASA), or (2) Two sides and a non-included angle (SSA — careful of ambiguous case). Used in non-right-angled triangles." },
    { id: 120, unit: "trigonometry", q: "State the Cosine Rule and when to use it.", a: "a² = b² + c² - 2bc·cosA (to find a side). cosA = (b² + c² - a²)/(2bc) (to find an angle). Use when you know: (1) Three sides (SSS), or (2) Two sides and the included angle (SAS). For non-right-angled triangles." },
    { id: 121, unit: "trigonometry", q: "State the Area Rule for a triangle.", a: "Area = ½ab·sinC = ½bc·sinA = ½ac·sinB. Use when you know two sides and the included angle. If the included angle C = 90°, this reduces to ½ × base × height." },
    { id: 122, unit: "trigonometry", q: "How do you approach a 3D trigonometry problem?", a: "1. Draw a clear, labelled 3D diagram.\n2. Identify right-angled triangles within the 3D figure.\n3. Work with one flat (2D) triangle at a time.\n4. Use the Sine Rule, Cosine Rule, or right-angle trig as appropriate.\n5. Use angles of elevation/depression carefully." },
    { id: 123, unit: "trigonometry", q: "How do you prove a trigonometric identity?", a: "Work on ONE side only (usually the more complex side). Rewrite everything in terms of sinθ and cosθ. Use known identities (sin²θ + cos²θ = 1, compound angles, double angles). Do not move terms across the equals sign. Show LHS = RHS." },
    { id: 124, unit: "trigonometry", q: "Express tan(2A) in terms of sinA and cosA.", a: "tan(2A) = sin(2A)/cos(2A) = 2sinA·cosA / (cos²A - sin²A). This can also be written as 2sinA·cosA / (2cos²A - 1) using a different form of cos(2A)." },
    { id: 125, unit: "trigonometry", q: "Simplify: sin(90° + x).", a: "Use compound angle: sin(90° + x) = sin90°·cosx + cos90°·sinx = 1·cosx + 0·sinx = cosx. This is a co-function identity." },
    { id: 126, unit: "trigonometry", q: "What is the angle of elevation and angle of depression?", a: "Angle of elevation: the angle measured upward from the horizontal to a point above the observer. Angle of depression: the angle measured downward from the horizontal to a point below the observer. Both are always measured from the horizontal." }
];

// ============================================================
// QUIZ QUESTIONS
// ============================================================
const quizQuestions = [
    // --- Functions & Inverses ---
    { id: 1, unit: "functions", type: "mc", question: "What is the inverse of f(x) = 3x - 6?", options: ["f⁻¹(x) = (x + 6)/3", "f⁻¹(x) = 3x + 6", "f⁻¹(x) = (x - 6)/3", "f⁻¹(x) = -3x + 6"], correct: 0, explanation: "Swap x and y: x = 3y - 6, then x + 6 = 3y, so y = (x + 6)/3." },
    { id: 2, unit: "functions", type: "mc", question: "The graph of y = log₃(x) passes through which point?", options: ["(0, 1)", "(1, 0)", "(3, 0)", "(0, 3)"], correct: 1, explanation: "log₃(1) = 0, so the graph passes through (1, 0). All log graphs pass through (1, 0)." },
    { id: 3, unit: "functions", type: "mc", question: "The inverse of y = 2ˣ is:", options: ["y = x²", "y = 2⁻ˣ", "y = log₂(x)", "y = √x"], correct: 2, explanation: "Swap x and y: x = 2ʸ → y = log₂(x). The inverse of an exponential is a logarithm with the same base." },
    { id: 4, unit: "functions", type: "mc", question: "The inverse of y = x² (unrestricted domain) is NOT a function because:", options: ["It has no y-intercept", "It fails the vertical line test", "It is not continuous", "It has no domain"], correct: 1, explanation: "y = ±√x fails the vertical line test since each positive x gives two y-values." },
    { id: 5, unit: "functions", type: "mc", question: "If f(x) = x² with domain x ≥ 0, the inverse is:", options: ["f⁻¹(x) = -√x", "f⁻¹(x) = √x", "f⁻¹(x) = ±√x", "f⁻¹(x) = x²"], correct: 1, explanation: "Restricting to x ≥ 0 gives inverse f⁻¹(x) = √x (positive root only)." },
    { id: 6, unit: "functions", type: "mc", question: "A function and its inverse are reflections in:", options: ["y = 0", "x = 0", "y = x", "y = -x"], correct: 2, explanation: "A function and its inverse are always reflections in the line y = x." },

    // --- Euclidean Geometry ---
    { id: 7, unit: "euclidean", type: "mc", question: "In △ABC, DE ∥ BC. If AD = 4, DB = 6, AE = 3, find EC.", options: ["2", "4.5", "5", "7.5"], correct: 1, explanation: "Proportionality Theorem: AD/DB = AE/EC → 4/6 = 3/EC → EC = 4.5." },
    { id: 8, unit: "euclidean", type: "mc", question: "The Midpoint Theorem states the line joining midpoints of two sides of a triangle is:", options: ["Equal to the third side", "Parallel to the third side and half its length", "Perpendicular to the third side", "Twice the third side"], correct: 1, explanation: "The segment joining midpoints is parallel to the third side and half its length." },
    { id: 9, unit: "euclidean", type: "mc", question: "Two triangles are similar if:", options: ["They have the same perimeter", "Their corresponding angles are all equal", "They share one side", "One is inside the other"], correct: 1, explanation: "Triangles are similar if all corresponding angles are equal (AAA)." },
    { id: 10, unit: "euclidean", type: "mc", question: "In the Pythagoras proof using similar triangles, the altitude is drawn from:", options: ["A vertex to the midpoint of the opposite side", "The right angle to the hypotenuse", "An acute angle to the opposite side", "The centre of the hypotenuse"], correct: 1, explanation: "The altitude from the right angle to the hypotenuse creates two smaller triangles each similar to the original." },
    { id: 11, unit: "euclidean", type: "mc", question: "If similar triangles have scale factor 3:1, the ratio of their areas is:", options: ["3:1", "6:1", "9:1", "27:1"], correct: 2, explanation: "Areas scale as the square of the linear factor: 3²:1² = 9:1." },

    // --- Circle Geometry ---
    { id: 12, unit: "circles", type: "mc", question: "The angle at the centre is _____ the angle at the circumference.", options: ["Equal to", "Twice", "Half", "Three times"], correct: 1, explanation: "Central angle = 2 × inscribed angle." },
    { id: 13, unit: "circles", type: "mc", question: "The angle in a semicircle is always:", options: ["45°", "60°", "90°", "180°"], correct: 2, explanation: "Diameter subtends 180° at centre, so inscribed angle = 90°." },
    { id: 14, unit: "circles", type: "mc", question: "Opposite angles of a cyclic quadrilateral:", options: ["Are equal", "Add up to 90°", "Add up to 180°", "Add up to 360°"], correct: 2, explanation: "Opposite angles of a cyclic quadrilateral are supplementary (180°)." },
    { id: 15, unit: "circles", type: "mc", question: "A tangent to a circle is _____ to the radius at the point of tangency.", options: ["Parallel", "Perpendicular", "Equal", "Bisected by"], correct: 1, explanation: "A tangent is perpendicular (90°) to the radius at the point of tangency." },
    { id: 16, unit: "circles", type: "mc", question: "The tan-chord angle equals:", options: ["The angle at the centre", "The angle in the alternate segment", "Twice the inscribed angle", "Half the reflex angle"], correct: 1, explanation: "The tangent-chord angle equals the inscribed angle in the alternate segment." },
    { id: 17, unit: "circles", type: "mc", question: "Two tangents from the same external point are:", options: ["Perpendicular", "Parallel", "Equal in length", "Unequal"], correct: 2, explanation: "Two tangents from the same external point are always equal in length." },
    { id: 18, unit: "circles", type: "mc", question: "If ABCD is cyclic and Â = 70°, then Ĉ = ?", options: ["70°", "90°", "110°", "140°"], correct: 2, explanation: "Opposite angles supplementary: Â + Ĉ = 180° → Ĉ = 110°." },
    { id: 19, unit: "circles", type: "mc", question: "An exterior angle of a cyclic quadrilateral equals:", options: ["The adjacent interior angle", "The interior opposite angle", "Half the central angle", "The sum of all interior angles"], correct: 1, explanation: "Exterior angle of a cyclic quad = interior opposite angle." },
    { id: 20, unit: "circles", type: "mc", question: "The perpendicular from the centre to a chord:", options: ["Passes through a vertex", "Bisects the chord", "Equals the radius", "Is parallel to the tangent"], correct: 1, explanation: "A perpendicular from the centre to a chord bisects that chord." },

    // --- Sequences & Series ---
    { id: 21, unit: "sequences", type: "mc", question: "In an arithmetic sequence, T₁ = 5 and d = 3. What is T₁₀?", options: ["32", "35", "30", "28"], correct: 0, explanation: "Tₙ = a + (n-1)d. T₁₀ = 5 + 9×3 = 5 + 27 = 32." },
    { id: 22, unit: "sequences", type: "mc", question: "Which series converges? (Find the geometric series with |r| < 1)", options: ["1 + 2 + 4 + 8 + ...", "1 + 1/2 + 1/4 + 1/8 + ...", "3 + 6 + 12 + ...", "2 - 4 + 8 - 16 + ..."], correct: 1, explanation: "r = 1/2, so |r| < 1. This series converges. S∞ = 1/(1-0.5) = 2." },
    { id: 23, unit: "sequences", type: "mc", question: "The sum to infinity of 12 + 4 + 4/3 + ... is:", options: ["16", "18", "20", "24"], correct: 1, explanation: "r = 4/12 = 1/3. S∞ = a/(1-r) = 12/(1-1/3) = 12/(2/3) = 18." },
    { id: 24, unit: "sequences", type: "mc", question: "How many terms are in the arithmetic series 7 + 11 + 15 + ... + 91?", options: ["20", "21", "22", "23"], correct: 2, explanation: "Tₙ = 7 + (n-1)×4 = 91 → 4(n-1) = 84 → n-1 = 21 → n = 22 terms." },
    { id: 25, unit: "sequences", type: "mc", question: "What is S₅ for the geometric series with a = 3 and r = 2?", options: ["93", "96", "63", "32"], correct: 0, explanation: "Sₙ = a(rⁿ-1)/(r-1) = 3(2⁵-1)/(2-1) = 3×31 = 93." },
    { id: 26, unit: "sequences", type: "mc", question: "The second difference of a quadratic sequence is 4. The coefficient of n² in Tₙ is:", options: ["4", "2", "1", "8"], correct: 1, explanation: "Second difference = 2a, so 4 = 2a → a = 2. The coefficient of n² is 2." },
    { id: 27, unit: "sequences", type: "mc", question: "Σ(k=1 to 4) of 3k equals:", options: ["12", "24", "30", "36"], correct: 2, explanation: "3(1) + 3(2) + 3(3) + 3(4) = 3 + 6 + 9 + 12 = 30." },
    { id: 28, unit: "sequences", type: "mc", question: "Tₙ = Sₙ - Sₙ₋₁ is valid for:", options: ["n ≥ 1 always", "n ≥ 2 only", "n = 1 only", "n ≤ 0"], correct: 1, explanation: "Tₙ = Sₙ - Sₙ₋₁ is valid for n ≥ 2. For n = 1, T₁ = S₁ directly." },
    { id: 29, unit: "sequences", type: "mc", question: "A geometric sequence has T₂ = 6 and T₅ = 48. Find r.", options: ["2", "3", "4", "1/2"], correct: 0, explanation: "T₅/T₂ = ar⁴/ar = r³ = 48/6 = 8 → r = 2." },
    { id: 30, unit: "sequences", type: "mc", question: "The sum of the first 10 terms of 2 + 5 + 8 + ... is:", options: ["140", "155", "160", "150"], correct: 1, explanation: "a = 2, d = 3. S₁₀ = 10/2 × (2(2) + 9(3)) = 5 × 31 = 155." },

    // --- Financial Mathematics ---
    { id: 31, unit: "finance", type: "mc", question: "R5 000 is invested at 8% p.a. simple interest for 3 years. What is the total amount?", options: ["R5 400", "R6 200", "R6 800", "R6 300"], correct: 1, explanation: "A = P(1 + in) = 5000(1 + 0.08×3) = 5000(1.24) = R6 200." },
    { id: 32, unit: "finance", type: "mc", question: "R10 000 is invested at 10% p.a. compounded annually for 3 years. Amount =", options: ["R13 000", "R13 100", "R13 310", "R13 210"], correct: 2, explanation: "A = P(1+i)ⁿ = 10000(1.1)³ = 10000×1.331 = R13 310." },
    { id: 33, unit: "finance", type: "mc", question: "A car costing R150 000 depreciates at 20% p.a. on reducing balance. Value after 3 years:", options: ["R60 000", "R76 800", "R80 000", "R72 000"], correct: 1, explanation: "A = 150000(0.8)³ = 150000×0.512 = R76 800." },
    { id: 34, unit: "finance", type: "mc", question: "The effective annual rate for 12% p.a. compounded quarterly is approximately:", options: ["12.00%", "12.36%", "12.55%", "13.00%"], correct: 2, explanation: "EAR = (1 + 0.12/4)⁴ - 1 = (1.03)⁴ - 1 ≈ 12.55%." },
    { id: 35, unit: "finance", type: "mc", question: "Which formula gives the future value of an annuity?", options: ["Fᵥ = x(1+i)ⁿ", "Fᵥ = x[(1+i)ⁿ-1]/i", "Fᵥ = x[1-(1+i)⁻ⁿ]/i", "Fᵥ = P(1+i)ⁿ"], correct: 1, explanation: "Fᵥ = x[(1+i)ⁿ-1]/i is the future value annuity formula. Used for sinking funds and savings plans." },
    { id: 36, unit: "finance", type: "mc", question: "Which formula gives the present value of an annuity (for loan repayments)?", options: ["Pᵥ = x[(1+i)ⁿ-1]/i", "Pᵥ = x[1-(1+i)⁻ⁿ]/i", "Pᵥ = P(1+i)ⁿ", "Pᵥ = x/i"], correct: 1, explanation: "Pᵥ = x[1-(1+i)⁻ⁿ]/i is the present value annuity formula. Used for loan repayments." },
    { id: 37, unit: "finance", type: "mc", question: "To find the outstanding balance of a loan after some payments, you use:", options: ["Future value of all payments made", "Present value of remaining payments", "Simple interest on original loan", "Compound interest formula"], correct: 1, explanation: "Outstanding balance = present value of remaining payments = x[1-(1+i)⁻ᵣ]/i where r = remaining payments." },
    { id: 38, unit: "finance", type: "mc", question: "Simple decay vs compound decay: which depreciates faster initially?", options: ["Both are the same", "Compound decay", "Simple decay", "Depends on the rate"], correct: 2, explanation: "Simple decay (straight-line) is faster initially because the depreciation amount stays constant rather than decreasing each year." },
    { id: 39, unit: "finance", type: "mc", question: "R2 000 is deposited monthly into an account earning 6% p.a. compounded monthly for 5 years. The future value uses i =", options: ["0.06", "0.005", "0.06/12", "0.5"], correct: 1, explanation: "Monthly rate i = 6%/12 = 0.5% = 0.005 per month. Always convert to match the payment period." },
    { id: 40, unit: "finance", type: "mc", question: "A loan of R80 000 is repaid over 10 years at 9% p.a. compounded monthly. Monthly payment uses n =", options: ["10", "120", "9", "1080"], correct: 1, explanation: "n = 10 years × 12 months = 120 monthly payments. Always express n in the same period as i." },

    // --- Differential Calculus ---
    { id: 41, unit: "calculus", type: "mc", question: "Using first principles, the derivative of f(x) = x² is:", options: ["2x + h", "2x", "x", "2"], correct: 1, explanation: "lim(h→0) [(x+h)² - x²]/h = lim(h→0)(2x+h) = 2x." },
    { id: 42, unit: "calculus", type: "mc", question: "If f(x) = 5x³ - 3x + 7, then f'(x) =", options: ["15x² - 3", "5x² - 3", "15x² - 3x", "15x³ - 3"], correct: 0, explanation: "Power rule: 5×3x² - 3×1 + 0 = 15x² - 3." },
    { id: 43, unit: "calculus", type: "mc", question: "At a turning point of f(x), the value of f'(x) is:", options: ["1", "Undefined", "0", "Maximum"], correct: 2, explanation: "At a turning point, the tangent is horizontal, so the gradient f'(x) = 0." },
    { id: 44, unit: "calculus", type: "mc", question: "If f''(x) < 0 at a stationary point, the point is a:", options: ["Minimum", "Maximum", "Point of inflection", "Saddle point"], correct: 1, explanation: "f''(x) < 0 means the curve is concave down at that point, so it is a local maximum." },
    { id: 45, unit: "calculus", type: "mc", question: "The equation of the tangent to f(x) = x² at x = 3 is:", options: ["y = 6x - 9", "y = 6x + 9", "y = 3x - 9", "y = 9x - 6"], correct: 0, explanation: "f(3) = 9, f'(x) = 2x, f'(3) = 6. Tangent: y - 9 = 6(x - 3) → y = 6x - 9." },
    { id: 46, unit: "calculus", type: "mc", question: "Which is the derivative of f(x) = 1/x²?", options: ["2x", "-2x⁻³", "2x⁻³", "-2x³"], correct: 1, explanation: "1/x² = x⁻². d/dx(x⁻²) = -2x⁻³ = -2/x³." },
    { id: 47, unit: "calculus", type: "mc", question: "f(x) = ax³ + ... (a > 0). Which describes this cubic?", options: ["Starts top-left, ends bottom-right", "Starts bottom-left, ends top-right", "Always has two turning points", "Has a vertical asymptote"], correct: 1, explanation: "For a > 0, as x → -∞, f → -∞ (bottom-left) and as x → +∞, f → +∞ (top-right)." },
    { id: 48, unit: "calculus", type: "mc", question: "To find the x-values of turning points of f(x) = x³ - 3x² - 9x + 5, solve:", options: ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "f(x) = f'(x)"], correct: 1, explanation: "Turning points occur where f'(x) = 0. f'(x) = 3x² - 6x - 9 = 0." },
    { id: 49, unit: "calculus", type: "mc", question: "The point of inflection of a cubic f(x) is found by solving:", options: ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "f'''(x) = 0"], correct: 2, explanation: "Point of inflection is where f''(x) = 0 and concavity changes." },
    { id: 50, unit: "calculus", type: "mc", question: "If f(x) is increasing on an interval, then on that interval:", options: ["f'(x) < 0", "f'(x) > 0", "f'(x) = 0", "f''(x) = 0"], correct: 1, explanation: "A function is increasing where its derivative is positive: f'(x) > 0." },

    // --- Probability ---
    { id: 51, unit: "probability", type: "mc", question: "In how many ways can 4 people be seated in a row?", options: ["12", "16", "24", "64"], correct: 2, explanation: "4! = 4×3×2×1 = 24 arrangements." },
    { id: 52, unit: "probability", type: "mc", question: "How many 2-letter codes can be made from A, B, C, D (no repetition)?", options: ["6", "8", "12", "16"], correct: 2, explanation: "₄P₂ = 4×3 = 12. Order matters (AB ≠ BA), no repetition." },
    { id: 53, unit: "probability", type: "mc", question: "A committee of 3 is chosen from 7 people. How many ways?", options: ["21", "35", "42", "210"], correct: 1, explanation: "₇C₃ = 7!/(3!×4!) = (7×6×5)/(3×2×1) = 35." },
    { id: 54, unit: "probability", type: "mc", question: "P(A) = 0.4 and P(B) = 0.3, mutually exclusive. P(A or B) =", options: ["0.12", "0.58", "0.70", "1.00"], correct: 2, explanation: "Mutually exclusive means P(A and B) = 0. P(A or B) = 0.4 + 0.3 = 0.70." },
    { id: 55, unit: "probability", type: "mc", question: "P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Are A and B independent?", options: ["Yes, because 0.5×0.4 = 0.2", "No, because P(A and B) ≠ 0", "No, because P(A) ≠ P(B)", "Yes, because P(A or B) < 1"], correct: 0, explanation: "P(A) × P(B) = 0.5 × 0.4 = 0.2 = P(A and B). Independence test confirmed." },
    { id: 56, unit: "probability", type: "mc", question: "The complement rule states P(A') =", options: ["1 + P(A)", "1 - P(A)", "P(A) - 1", "P(A)/P(sample space)"], correct: 1, explanation: "P(A') = 1 - P(A). The probability of an event NOT occurring equals 1 minus the probability it does occur." },
    { id: 57, unit: "probability", type: "mc", question: "Evaluate 0! + 3! =", options: ["3", "6", "7", "1"], correct: 2, explanation: "0! = 1, 3! = 6. 1 + 6 = 7." },
    { id: 58, unit: "probability", type: "mc", question: "nCr = nC(n-r). If ₈C₃ = 56, then ₈C₅ =", options: ["28", "56", "70", "112"], correct: 1, explanation: "₈C₅ = ₈C(8-5) = ₈C₃ = 56. This symmetry property always holds." },
    { id: 59, unit: "probability", type: "mc", question: "In a class of 30, 18 like Maths and 15 like Science, 8 like both. How many like neither?", options: ["5", "3", "7", "10"], correct: 0, explanation: "n(M or S) = 18 + 15 - 8 = 25. Neither = 30 - 25 = 5." },
    { id: 60, unit: "probability", type: "mc", question: "The fundamental counting principle: 3 shirt colours, 4 trouser styles, 2 shoe types. Total outfits:", options: ["9", "14", "24", "28"], correct: 2, explanation: "3 × 4 × 2 = 24 possible outfit combinations." },

    // --- Statistics ---
    { id: 61, unit: "statistics", type: "mc", question: "The median is the value that:", options: ["Occurs most frequently", "Is the arithmetic average", "Divides ordered data into two equal halves", "Equals Q3 - Q1"], correct: 2, explanation: "The median divides the ordered data set into two equal halves (50th percentile)." },
    { id: 62, unit: "statistics", type: "mc", question: "IQR = Q3 - Q1. For data: 2, 5, 7, 9, 12, 15, 18. IQR =", options: ["16", "10", "9", "7"], correct: 1, explanation: "Q1 = 5, Q3 = 15 (median = 9 splits into 2,5,7 and 12,15,18). IQR = 15 - 5 = 10." },
    { id: 63, unit: "statistics", type: "mc", question: "In a positively skewed distribution:", options: ["Mean = Median = Mode", "Mean < Median < Mode", "Mean > Median > Mode", "Mode > Mean > Median"], correct: 2, explanation: "Positive skew: long tail to the right. A few high values pull the mean up above the median. Mean > Median > Mode." },
    { id: 64, unit: "statistics", type: "mc", question: "A correlation coefficient of r = -0.92 indicates:", options: ["Weak negative correlation", "Strong negative correlation", "No correlation", "Strong positive correlation"], correct: 1, explanation: "r = -0.92 is close to -1, indicating strong negative (inverse) linear correlation." },
    { id: 65, unit: "statistics", type: "mc", question: "On an ogive, the median is read at what cumulative frequency percentage?", options: ["25%", "50%", "75%", "100%"], correct: 1, explanation: "The median is the 50th percentile, so read off the x-value at 50% on the cumulative frequency axis." },
    { id: 66, unit: "statistics", type: "mc", question: "Standard deviation measures:", options: ["The middle value", "The most common value", "The spread of data around the mean", "The highest minus lowest value"], correct: 2, explanation: "Standard deviation measures the average spread (deviation) of data values from the mean." },
    { id: 67, unit: "statistics", type: "mc", question: "The least squares regression line always passes through:", options: ["The origin (0,0)", "The point (x̄, ȳ)", "The maximum point", "The median point"], correct: 1, explanation: "The regression line always passes through the point (x̄, ȳ) — the mean of x and mean of y." },
    { id: 68, unit: "statistics", type: "mc", question: "Which plot shows the five-number summary?", options: ["Histogram", "Scatter plot", "Box-and-whisker plot", "Bar graph"], correct: 2, explanation: "A box-and-whisker plot displays the five-number summary: minimum, Q1, Q2 (median), Q3, maximum." },
    { id: 69, unit: "statistics", type: "mc", question: "A data set has mean = 50 and standard deviation = 5. A value of 65 is how many standard deviations above the mean?", options: ["1", "2", "3", "5"], correct: 2, explanation: "(65 - 50)/5 = 15/5 = 3. The value is 3 standard deviations above the mean." },
    { id: 70, unit: "statistics", type: "mc", question: "Which value of r indicates no linear correlation?", options: ["-1", "1", "0", "0.5"], correct: 2, explanation: "r = 0 means no linear relationship between the variables. The closer to 0, the weaker the correlation." },

    // --- Trigonometry ---
    { id: 71, unit: "trigonometry", type: "mc", question: "cos(2A) expressed as 1 - 2sin²A uses which identity?", options: ["Compound angle only", "Pythagorean identity: cos²A = 1 - sin²A", "Pythagorean identity: sin²A = 1 - cos²A", "Double angle: sin(2A) = 2sinA·cosA"], correct: 2, explanation: "cos(2A) = cos²A - sin²A = (1-sin²A) - sin²A = 1 - 2sin²A. Uses sin²A = 1 - cos²A substituted for cos²A." },
    { id: 72, unit: "trigonometry", type: "mc", question: "sin(2A) =", options: ["2sinA", "sinA·cosA", "2sinA·cosA", "sin²A + cos²A"], correct: 2, explanation: "sin(2A) = 2sinA·cosA from the double angle formula." },
    { id: 73, unit: "trigonometry", type: "mc", question: "The general solution for tanθ = 1 is:", options: ["θ = 45° + 360°n", "θ = 45° + 180°n", "θ = 135° + 360°n", "θ = 45° + 90°n"], correct: 1, explanation: "tan has period 180°. Reference angle = 45°. General solution: θ = 45° + 180°n, n ∈ ℤ." },
    { id: 74, unit: "trigonometry", type: "mc", question: "In △ABC, a = 8, b = 5, C = 60°. Find c using the Cosine Rule.", options: ["c² = 49", "c² = 61", "c² = 64 - 25", "c² = 64 + 25 - 40"], correct: 3, explanation: "c² = a² + b² - 2ab·cosC = 64 + 25 - 2(8)(5)(0.5) = 89 - 40 = 49, so c = 7." },
    { id: 75, unit: "trigonometry", type: "mc", question: "Area of △ABC with a = 6, b = 4, C = 30° is:", options: ["6", "12", "24", "3"], correct: 0, explanation: "Area = ½ab·sinC = ½×6×4×sin30° = ½×6×4×0.5 = 6 square units." },
    { id: 76, unit: "trigonometry", type: "mc", question: "sin(A + B) = sinA·cosB + cosA·sinB. What is sin(A - B)?", options: ["sinA·cosB - cosA·sinB", "sinA·cosB + cosA·sinB", "cosA·cosB - sinA·sinB", "cosA·cosB + sinA·sinB"], correct: 0, explanation: "sin(A - B) = sinA·cosB - cosA·sinB. The only change is the sign between the two terms." },
    { id: 77, unit: "trigonometry", type: "mc", question: "To prove a trig identity, you should:", options: ["Work on both sides simultaneously", "Cross-multiply across the equals sign", "Work on ONE side only and transform it", "Substitute specific angle values"], correct: 2, explanation: "Always work on one side only (usually the more complex side) and transform it to match the other side. Never move terms across the equals sign." },
    { id: 78, unit: "trigonometry", type: "mc", question: "The Sine Rule is used when you know:", options: ["Three sides (SSS)", "Two sides and included angle (SAS)", "Two angles and any side (AAS)", "Only two sides (SS)"], correct: 2, explanation: "The Sine Rule applies when you know two angles and any side (AAS or ASA), or two sides and a non-included angle (SSA)." },
    { id: 79, unit: "trigonometry", type: "mc", question: "sin(90° - x) simplifies to:", options: ["sinx", "cosx", "-sinx", "-cosx"], correct: 1, explanation: "sin(90° - x) = sin90°·cosx - cos90°·sinx = cosx - 0 = cosx. (Co-function identity.)" },
    { id: 80, unit: "trigonometry", type: "mc", question: "The general solution for sinθ = -1/2 includes (for 0° ≤ θ ≤ 360°):", options: ["30° and 150°", "210° and 330°", "60° and 120°", "150° and 210°"], correct: 1, explanation: "sin is negative in Q3 and Q4. Reference angle = 30°. Solutions: 180° + 30° = 210° and 360° - 30° = 330°." }
];

// ============================================================
// FEYNMAN TOPICS
// ============================================================
const feynmanTopics = [
    { id: "f1", title: "Inverse of a Parabola (y = ax²)", unit: "functions", keyPoints: ["Swap x and y: x = ay² → y = ±√(x/a)", "The inverse is NOT a function (fails vertical line test)", "Restrict domain: x ≥ 0 gives y = √(x/a), x ≤ 0 gives y = -√(x/a)", "Graphically: sideways parabola, reflection in y = x", "Restricted inverse domain x ≥ 0 (if a > 0), range y ≥ 0 or y ≤ 0"] },
    { id: "f2", title: "Exponential and Logarithmic Functions as Inverses", unit: "functions", keyPoints: ["y = bˣ and y = log_b(x) are inverses of each other", "Exponential: domain ℝ, range y > 0, asymptote y = 0, passes through (0, 1)", "Logarithmic: domain x > 0, range ℝ, asymptote x = 0, passes through (1, 0)", "Domains and ranges swap because x and y are swapped", "For b > 1 both increase; for 0 < b < 1 both decrease", "log_b(bˣ) = x and b^(log_b(x)) = x"] },
    { id: "f3", title: "Sketching Inverses and Reading from Graphs", unit: "functions", keyPoints: ["Reflect original graph in y = x", "Swap coordinates: (a, b) becomes (b, a)", "x-intercept of f becomes y-intercept of f⁻¹", "Horizontal asymptote becomes vertical asymptote", "Domain of f becomes range of f⁻¹", "Function and inverse intersect on y = x"] },
    { id: "f4", title: "The Proportionality Theorem and Its Proof", unit: "euclidean", keyPoints: ["If DE ∥ BC in △ABC, then AD/DB = AE/EC", "Proof uses area ratios: same-height triangles have areas proportional to bases", "Construct heights from B and C to line DE", "△BDE and △CDE have equal areas (same base, between parallel lines)", "Therefore Area(△ADE)/Area(△BDE) = Area(△ADE)/Area(△CDE)", "Giving AD/DB = AE/EC"] },
    { id: "f5", title: "Similar Triangles — Proving and Using Similarity", unit: "euclidean", keyPoints: ["Similar if corresponding angles equal (AAA — need only 2 angles)", "Or corresponding sides in same proportion", "Write similarity with vertices in corresponding order: △ABC ||| △DEF", "Once similar: use proportional sides to find unknowns", "Area ratio = (length ratio)²"] },
    { id: "f6", title: "Theorem of Pythagoras — Similar Triangles Proof", unit: "euclidean", keyPoints: ["△ABC with Ĉ = 90°; draw altitude CD ⊥ AB", "Creates 3 similar triangles: △ABC, △ACD, △CBD", "△ACD ||| △ABC: AC² = AD · AB", "△BCD ||| △ABC: BC² = BD · AB", "Add: AC² + BC² = AB(AD + BD) = AB²", "Elegant proof using only similar triangle properties"] },
    { id: "f7", title: "Angle at Centre vs Angle at Circumference", unit: "circles", keyPoints: ["Central angle = 2 × inscribed angle (same arc)", "Special case: semicircle → inscribed angle = 90°", "Angles in same segment are equal (both half of same central angle)", "Central angle equals the arc it subtends", "Foundation for all other circle theorems"] },
    { id: "f8", title: "Cyclic Quadrilaterals — Properties and Proofs", unit: "circles", keyPoints: ["All four vertices on the circle", "Opposite angles supplementary (sum to 180°)", "Proof: opposite angles subtend arcs totalling 360°, so central angles sum to 360°, inscribed angles sum to 180°", "Exterior angle = interior opposite angle", "Prove cyclic: opposite angles supplementary, or ext = int opp, or equal angles from same segment"] },
    { id: "f9", title: "Tangent Properties and the Tan-Chord Theorem", unit: "circles", keyPoints: ["Tangent ⊥ radius at point of tangency (90°)", "Two tangents from same external point are equal", "Tan-chord angle = angle in alternate segment", "Use tan-chord to find unknown angles with tangent lines", "Tangent-radius perpendicularity key for Pythagoras calculations"] },
    { id: "f10", title: "Arithmetic vs Geometric Sequences — Identifying and Using Formulae", unit: "sequences", keyPoints: ["Arithmetic: constant difference d = T₂ - T₁. Formula: Tₙ = a + (n-1)d", "Geometric: constant ratio r = T₂/T₁. Formula: Tₙ = arⁿ⁻¹", "To identify: test if differences are constant (arithmetic) or ratios are constant (geometric)", "For series: arithmetic Sₙ = n/2(2a + (n-1)d); geometric Sₙ = a(rⁿ-1)/(r-1)", "Always find a and d (or r) first, then apply the formula"] },
    { id: "f11", title: "Convergent Geometric Series and Sum to Infinity", unit: "sequences", keyPoints: ["Converges only when |r| < 1 (i.e., -1 < r < 1)", "S∞ = a/(1-r). Cannot use if |r| ≥ 1 — series diverges", "Each term gets smaller and smaller, approaching zero", "Real-world example: bouncing ball total distance", "Sigma notation Σ(k=1 to ∞) is the sum to infinity if |r| < 1"] },
    { id: "f12", title: "Compound Interest and Annuities — Choosing the Right Formula", unit: "finance", keyPoints: ["Lump sum growth: A = P(1+i)ⁿ (one payment, left to grow)", "Future value annuity: Fᵥ = x[(1+i)ⁿ-1]/i (regular deposits, e.g., sinking fund)", "Present value annuity: Pᵥ = x[1-(1+i)⁻ⁿ]/i (loan repayment)", "Always match i and n to the same time period (e.g., both monthly)", "Outstanding balance = Pᵥ of remaining payments"] },
    { id: "f13", title: "Effective vs Nominal Interest Rates", unit: "finance", keyPoints: ["Nominal rate: stated rate e.g., 12% p.a. compounded monthly", "Effective rate: actual annual rate after compounding: EAR = (1 + iₙ/m)ᵐ - 1", "Effective rate > nominal rate when compounding more than once per year", "Use effective rate to compare investments with different compounding periods", "To convert: find EAR, then compare directly"] },
    { id: "f14", title: "First Principles and Differentiation Rules", unit: "calculus", keyPoints: ["First principles: f'(x) = lim(h→0)[f(x+h)-f(x)]/h — expand, simplify, cancel h, take limit", "Power rule: d/dx(xⁿ) = nxⁿ⁻¹", "Constant rule: d/dx(c) = 0; d/dx(cf(x)) = cf'(x)", "Sum rule: differentiate each term separately", "Always rewrite fractions and roots in index form before differentiating"] },
    { id: "f15", title: "Cubic Graphs — Shape, Turning Points, Inflection", unit: "calculus", keyPoints: ["f(x) = ax³ + bx² + cx + d", "a > 0: bottom-left to top-right; a < 0: top-left to bottom-right", "Turning points: solve f'(x) = 0 (quadratic — up to 2 solutions)", "Local max/min: test with f''(x) or sign change of f'(x)", "Inflection point: solve f''(x) = 0; lies midway between turning points for a cubic", "x-intercepts: factorise f(x) = 0 (often a factor is given)"] },
    { id: "f16", title: "Permutations and Combinations — When to Use Which", unit: "probability", keyPoints: ["Permutations (order matters): nPr = n!/(n-r)! — use for arrangements, codes, queues", "Combinations (order does NOT matter): nCr = n!/[r!(n-r)!] — use for teams, selections, groups", "Fundamental Counting Principle: multiply choices at each stage", "Restrictions: count total minus restricted, OR handle restricted positions first", "Factorial: n! = n×(n-1)×...×2×1; 0! = 1"] },
    { id: "f17", title: "Probability Rules — Addition, Product, Complementary", unit: "probability", keyPoints: ["Addition: P(A or B) = P(A) + P(B) - P(A and B)", "Mutually exclusive: P(A and B) = 0, so P(A or B) = P(A) + P(B)", "Complementary: P(A') = 1 - P(A)", "Independent: P(A and B) = P(A) × P(B)", "Use tree diagrams: multiply along branches, add across branches for a given event"] },
    { id: "f18", title: "Regression and Correlation — Interpreting the Statistics", unit: "statistics", keyPoints: ["Scatter plot shows bivariate data — look for pattern and direction", "r measures strength and direction: r = 1 (perfect +ve), r = -1 (perfect -ve), r = 0 (none)", "Regression line ŷ = a + bx is the least squares line of best fit", "Line always passes through (x̄, ȳ)", "Use line to predict: substitute x to get ŷ. Only reliable within the data range (interpolation)", "Correlation ≠ causation"] },
    { id: "f19", title: "Skewness and the Five-Number Summary", unit: "statistics", keyPoints: ["Five-number summary: min, Q1, Q2 (median), Q3, max — shown on box-and-whisker plot", "Symmetric: mean ≈ median ≈ mode, equal whiskers", "Positively skewed: long right tail, mean > median > mode", "Negatively skewed: long left tail, mean < median < mode", "IQR = Q3 - Q1 measures spread of middle 50%", "Outlier: below Q1-1.5(IQR) or above Q3+1.5(IQR)"] },
    { id: "f20", title: "Compound Angle and Double Angle Formulae", unit: "trigonometry", keyPoints: ["Key formulae to memorise: cos(A±B) = cosA·cosB ∓ sinA·sinB", "sin(A±B) = sinA·cosB ± cosA·sinB", "sin(2A) = 2sinA·cosA (from sin(A+A))", "cos(2A) has THREE forms: cos²A-sin²A; 2cos²A-1; 1-2sin²A", "Choose the cos(2A) form that matches what you are given", "Prove identities by working on one side only, converting to sin and cos"] },
    { id: "f21", title: "General Solutions of Trig Equations", unit: "trigonometry", keyPoints: ["sinθ = k: θ = arcsin(k) + 360°n OR θ = 180° - arcsin(k) + 360°n", "cosθ = k: θ = ±arccos(k) + 360°n", "tanθ = k: θ = arctan(k) + 180°n (period = 180°)", "Always find the reference angle first (positive acute angle)", "Determine quadrants where the trig ratio is positive/negative", "Apply the general solution then restrict to a given interval if asked"] }
];

// ============================================================
// NOTES — All Topics
// ============================================================
const notes = [
    {
        title: "Functions & Inverses",
        unit: "functions",
        content: `A function is a relation where each input (x-value) produces exactly one output (y-value). The vertical line test confirms whether a graph represents a function.

The inverse of a function f is found by swapping x and y in the equation and solving for y. The inverse function f⁻¹ undoes what f does. Graphically, f and f⁻¹ are reflections of each other in the line y = x. The domain of f becomes the range of f⁻¹ and vice versa.

Linear functions f(x) = ax + q always have inverses that are functions. For the parabola f(x) = ax², swapping gives x = ay², so y = ±√(x/a). This relation is NOT a function (each x gives two y-values), so the domain of the original parabola must be restricted. Restricting to x ≥ 0 gives the inverse y = √(x/a); restricting to x ≤ 0 gives y = -√(x/a).

The exponential function f(x) = bˣ (b > 0, b ≠ 1) has the logarithmic function f⁻¹(x) = log_b(x) as its inverse. Key features of y = bˣ: domain all real numbers, range y > 0, passes through (0,1), horizontal asymptote y = 0. Key features of y = log_b(x): domain x > 0, range all real numbers, passes through (1,0), vertical asymptote x = 0.

To sketch an inverse: reflect the original graph in y = x, equivalently swap all x and y coordinates. The x-intercept of f becomes the y-intercept of f⁻¹. A horizontal asymptote becomes a vertical asymptote. The function and its inverse intersect on the line y = x.`
    },
    {
        title: "Euclidean Geometry",
        unit: "euclidean",
        content: `Euclidean Geometry at Grade 12 focuses on proportionality, similarity, and the Theorem of Pythagoras.

The Proportionality Theorem (Basic Proportionality Theorem): If a line is drawn parallel to one side of a triangle, it divides the other two sides in the same proportion. If DE ∥ BC in △ABC, then AD/DB = AE/EC. The converse also holds: if a line divides two sides proportionally, it is parallel to the third side. Proof uses the area method — triangles sharing the same height have areas in proportion to their bases.

The Midpoint Theorem is a special case: the segment joining the midpoints of two sides is parallel to the third side and half its length.

Two triangles are similar (|||) if all corresponding angles are equal (AAA) or all corresponding sides are in proportion. In practice, showing two pairs of equal angles (AA) is sufficient. If △ABC ||| △DEF with scale factor k, then the ratio of their areas is k².

The Theorem of Pythagoras: in a right-angled triangle, c² = a² + b² (hypotenuse squared equals sum of squares of other two sides). The elegant proof uses similar triangles: in △ABC with C = 90°, dropping the altitude from C to hypotenuse AB creates triangles △ACD and △BCD, both similar to △ABC, giving AC² = AD·AB and BC² = BD·AB, which sum to AB².`
    },
    {
        title: "Circle Geometry",
        unit: "circles",
        content: `Circle geometry theorems at Grade 12 involve relationships between angles, chords, and tangents.

Key angle theorems: The angle subtended by an arc at the centre is twice the angle at the circumference on the same arc. Angles in the same segment (same side of a chord) are equal. The angle in a semicircle is always 90°.

A cyclic quadrilateral has all four vertices on the circle. Its opposite angles are supplementary (sum to 180°). An exterior angle of a cyclic quadrilateral equals the interior opposite angle. To prove a quadrilateral is cyclic: show opposite angles are supplementary, or that an exterior angle equals the interior opposite angle, or that two points subtend equal angles to a line segment from the same side.

Tangent properties: A tangent is perpendicular to the radius at the point of tangency. Two tangents from the same external point are equal in length, and the line from the external point to the centre bisects the angle between the tangents.

The Tangent-Chord (Tan-Chord) theorem: the angle between a tangent and a chord at the point of tangency equals the inscribed angle in the alternate segment. This is extremely useful for finding unknown angles in problems involving tangents.

Chord theorems: The perpendicular from the centre to a chord bisects the chord. Equal chords subtend equal angles at the centre and are equidistant from the centre.`
    },
    {
        title: "Sequences & Series",
        unit: "sequences",
        content: `Sequences are ordered lists of numbers. Arithmetic sequences have a constant difference d between consecutive terms: Tₙ = a + (n-1)d where a is the first term. Geometric sequences have a constant ratio r between consecutive terms: Tₙ = arⁿ⁻¹.

To identify the type: if T₂-T₁ = T₃-T₂ (constant difference), it is arithmetic. If T₂/T₁ = T₃/T₂ (constant ratio), it is geometric. Quadratic sequences have a constant second difference; for Tₙ = an²+bn+c, the second difference equals 2a.

Series are sums of sequences. Arithmetic series: Sₙ = n/2 × (2a + (n-1)d) = n/2 × (first + last). Geometric series: Sₙ = a(rⁿ-1)/(r-1) for r ≠ 1.

Convergent geometric series: a geometric series converges only when |r| < 1. The sum to infinity is S∞ = a/(1-r). If |r| ≥ 1, the series diverges.

Sigma notation: Σ(k=m to n) f(k) means substitute each integer value from m to n into f(k) and sum the results. To switch between Tₙ and Sₙ: Tₙ = Sₙ - Sₙ₋₁ for n ≥ 2.

Word problems often involve finding n (use Tₙ formula and solve), finding the first term exceeding a value, or total distance with bouncing balls (sum two geometric series: downward and upward).`
    },
    {
        title: "Financial Mathematics",
        unit: "finance",
        content: `Financial Mathematics covers growth, decay, and annuity calculations.

Growth: Simple interest A = P(1 + in). Compound interest A = P(1 + i)ⁿ. In compound interest, interest earns interest, so money grows faster over time. Decay (depreciation): simple (straight-line) A = P(1-in); compound (reducing balance) A = P(1-i)ⁿ.

Nominal vs effective rates: When compounding more than once per year, the nominal rate (stated rate) differs from the effective annual rate (EAR). EAR = (1 + iₙₒₘ/m)ᵐ - 1 where m is the number of compounding periods per year. Always convert nominal rates to effective rates when comparing investments.

Annuities are regular equal payments. Future value annuity (sinking fund): Fᵥ = x[(1+i)ⁿ - 1]/i — used when saving towards a future goal. Present value annuity (loan repayment): Pᵥ = x[1-(1+i)⁻ⁿ]/i — used for mortgages and car loans. Always ensure i and n are in the same units (e.g., both monthly).

Outstanding loan balance after k payments: use Pᵥ formula with n = remaining payments.

Time lines: draw a line with t=0 on the left and t=n on the right. Mark all cash inflows/outflows at the correct positions. To compare amounts, move everything to the same time point using the compound interest formula.

Deferred annuities begin at a later date. Calculate the present value of the annuity at the start of payments, then discount back to t=0.`
    },
    {
        title: "Differential Calculus",
        unit: "calculus",
        content: `Calculus studies rates of change. The derivative f'(x) gives the gradient of the tangent to the curve y=f(x) at any point x.

First principles: f'(x) = lim(h→0) [f(x+h) - f(x)]/h. Substitute x+h into f, expand, subtract f(x), cancel h from numerator and denominator, then take the limit as h → 0.

Differentiation rules: Power rule: d/dx(xⁿ) = nxⁿ⁻¹. Constant rule: d/dx(c) = 0. Constant multiple: d/dx(cf(x)) = cf'(x). Sum/difference: differentiate each term separately. Before differentiating, rewrite roots as fractional exponents (√x = x^(1/2)) and fractions as negative exponents (1/x² = x⁻²).

Applications: Equation of tangent at x = a: find gradient m = f'(a), point (a, f(a)), then y - f(a) = m(x - a).

Cubic graphs f(x) = ax³ + bx² + cx + d: sign of a determines end behaviour. Turning points: solve f'(x) = 0. Classify using f''(x): if f''(x) < 0, local maximum; if f''(x) > 0, local minimum. Point of inflection: solve f''(x) = 0 (for a cubic, this is the midpoint between turning points).

Optimisation: define a variable, express the quantity in terms of that variable, differentiate, set equal to zero, solve, verify with second derivative, and answer in context.

f'(x) > 0 means f is increasing; f'(x) < 0 means f is decreasing.`
    },
    {
        title: "Probability",
        unit: "probability",
        content: `Probability quantifies the likelihood of events. The sample space S is the set of all possible outcomes. P(event) = favourable outcomes / total outcomes (for equally likely outcomes).

Counting techniques: The Fundamental Counting Principle states that if event A can occur in m ways and event B in n ways, together they can occur in m × n ways. Factorial: n! = n × (n-1) × ... × 2 × 1; 0! = 1.

Permutations (order matters): nPr = n!/(n-r)! — number of ways to arrange r objects from n distinct objects. Combinations (order does NOT matter): nCr = n!/[r!(n-r)!] — number of ways to select r objects from n. Key: if the problem mentions arrangement, ordering, or sequence, use permutations. If it mentions selection, teams, or groups, use combinations.

Probability rules: Addition rule: P(A or B) = P(A) + P(B) - P(A and B). Complementary rule: P(A') = 1 - P(A). For mutually exclusive events (cannot both occur): P(A and B) = 0, so P(A or B) = P(A) + P(B). For independent events: P(A and B) = P(A) × P(B).

Venn diagrams show overlapping events. Tree diagrams show sequential events — multiply along branches, add across branches. Contingency tables show two-way frequency data; divide by totals for probability. Test independence: P(A and B) = P(A) × P(B).`
    },
    {
        title: "Statistics",
        unit: "statistics",
        content: `Statistics involves collecting, organising, analysing, and interpreting data.

Measures of central tendency: Mean (x̄) = Σx/n. Median = middle value of ordered data. Mode = most frequent value. Measures of spread: Range = max - min. IQR = Q3 - Q1 (spread of middle 50%). Standard deviation σ measures average distance from the mean — a larger σ means more spread.

Five-number summary: minimum, Q1, Q2 (median), Q3, maximum. Displayed on a box-and-whisker plot. Q1 is the median of the lower half; Q3 is the median of the upper half.

Ogive (cumulative frequency curve): plots cumulative frequency vs upper class boundary. S-shaped curve. Read off median (50%), Q1 (25%), Q3 (75%) by finding where horizontal lines at those percentages cross the ogive.

Distribution shape: Symmetric — mean ≈ median ≈ mode, equal whiskers. Positively skewed (right) — long right tail, mean > median > mode. Negatively skewed (left) — long left tail, mean < median < mode.

Bivariate data: scatter plots display two variables. The correlation coefficient r (-1 ≤ r ≤ 1) measures the strength and direction of linear association. r close to ±1 is strong; r close to 0 is weak. The least squares regression line ŷ = a + bx minimises squared deviations. It always passes through (x̄, ȳ). Use it to predict y from x (interpolation is reliable; extrapolation is not). Correlation does not imply causation.`
    },
    {
        title: "Trigonometry",
        unit: "trigonometry",
        content: `Grade 12 trigonometry extends to compound angles, double angles, general solutions, and 3D problems.

Compound angle formulae (must be memorised):
sin(A ± B) = sinA·cosB ± cosA·sinB
cos(A ± B) = cosA·cosB ∓ sinA·sinB (note the sign change)

Double angle formulae (derived from compound):
sin(2A) = 2sinA·cosA
cos(2A) = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A

Choose the cos(2A) form that matches the expression in the problem. These formulae are used to simplify expressions, prove identities, and solve equations.

Proving identities: work on one side only (usually the more complex). Express everything in terms of sinθ and cosθ. Use the Pythagorean identity sin²θ + cos²θ = 1. Never move terms across the equals sign.

General solutions: sinθ = k → θ = arcsin(k) + 360°n or θ = 180° - arcsin(k) + 360°n. cosθ = k → θ = ±arccos(k) + 360°n. tanθ = k → θ = arctan(k) + 180°n (period 180°). Find the reference angle, determine the correct quadrants, write the general solution, then restrict to a given interval if asked.

Sine Rule: a/sinA = b/sinB = c/sinC — use for AAS or SSA.
Cosine Rule: a² = b² + c² - 2bc·cosA — use for SAS or SSS.
Area Rule: Area = ½ab·sinC.

3D problems: draw a clear diagram, identify right-angled triangles, work with one flat triangle at a time, and use elevation/depression angles from the horizontal.`
    }
];
