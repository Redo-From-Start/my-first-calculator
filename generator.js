// ssh, don't tell anyone, but the main file is actually generated

const generate = (min = 1, max = 1000, operators = ["+", "-", "*", "/", "%"]) => {
    let output = "function calculate(a, b, o) {\n    ";
    
    for (const op of operators) {
        for (let i = min; i <= max; i++) {
            for (let j = min; j <= max; j++) {
                output += `if (o === ${op} && a === ${i} && b === ${j}) return ${i} ${op} ${j};\n\n    `;
            }
        }
    }
    
    output += "return 0;\n}";
};
