// ssh, don't tell anyone, but the main file is actually generated

const generate = (max = 1000, operators = ["+", "-", "*", "/", "%"]) => {
    let output = "function calculate(a, b, o) {\n    ";
    
    for (const op of operators) {
        for (let i = 0; i <= max; i++) {
            for (let j = 0; j <= max; j++) {
                output += `if (o === ${op} && a === ${i} && b === ${i}) return ${a} ${op} ${b};\n\n    `;
            }
        }
    }
    
    output = output.substring(0, -4) + "}";
};
