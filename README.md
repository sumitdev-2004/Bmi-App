🚀 Project Overview: BMI CalculatorYeh ek lightweight aur user-friendly web application hai jo users ko unka Body Mass Index calculate karne mein madad karta hai.
Isme user apna weight aur height enter karta hai, aur app instant result ke saath-saath unki health category (Underweight, Normal, Overweight, etc.) bhi batata hai.
🛠️ Tech Stack UsedHTML5: App ka structure banane ke liye (input fields aur buttons).CSS3: Responsive aur clean design ke liye.JavaScript (ES6): Calculation logic aur DOM manipulation ke liye.
💡 Key FeaturesReal-time Calculation:
Bina page reload kiye result show hota hai.Health Classification: Yeh sirf number nahi batata, balki classification bhi deta hai:
Underweight: BMI < 18.5Normal: 18.5 – 24.9O
verweight: 25 – 29.9Obese: 30 or greaterResponsive Design: Yeh mobile aur desktop dono par sahi chalta hai.🧪
How the Logic WorksIs app ke piche ka main formula yeh hai:$$BMI = \frac{weight (kg)}{height (m)^2}
$$JavaScript mein hum input values ko fetch karte hain, height ko meters mein convert karte hain (agar CM mein li gayi hai),
aur phir formula apply karke result ko screen par display karte hain.
📂File Structure (Suggested)index.html: Contains the form and display area.style.css: Styles the card, inputs, and colors.script.js: Handles the math and logic.
