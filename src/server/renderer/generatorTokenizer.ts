// ---------------------------------- Generator Code Tokeniser -----------------------------------
// Generator code tokeniser function is algorithmically simple, but produces a good representation
// of the provided code in JavaScript Object format (which can then be easily converted to JSON,
// since it's pretty much the same thing).
// When going through the code, it can detect several types of operators. These are:
//     * Variable
//     * Constant Number
//     * Math Operator
//     * Math Function
//     * Regular scope - everything inside brackets "(" and ")" should be executed first
// The Variables, Numbers and Math operators are just added as an object with appropriate type and
// value taken from the code.

// TODO:
// * Sanetise variable names !!! Javascript injection is possible now throun variable names...

import {fixScopes} from './scopeFixer';

export const tokenizeGenerator = (gen: string, nodeId: string): GeneratorSegment[] => {
    // Get value of generator code and store in g
    let g = String(gen);
    g = String(fixScopes(g));

    // Parsed Generator Code
    let pgen: GeneratorSegment[] = [];
    
    // The stack
    let stack: GeneratorSegment[] = [];

    // Code tokeniser
    for(let i = 0; i < g.length; i++) {
        const topStackObject: GeneratorSegment = stack.length > 0 ?
            stack[stack.length - 1] : null;

        // --------------- VARIABLE ----------------
        if(g[i] === "[") {
            // Move to next character
            i++;
            // Initialise empty variable
            let variable = "";

            // Scan until variable scope is closed
            while(g[i] !== "]") {
                variable += g[i];
                i++;
            }

            if(variable === "time" || variable === "PI") {
                // Do nothing ?
            } else {
                variable = nodeId + variable;
            }

            const variableSnippet: GeneratorSegment = {
                type: "var",
                value: variable,
                code: null
            }

            if(topStackObject) {
                const topIndex = stack.length - 1;
                stack[topIndex].code.push(variableSnippet);
            } else {
                pgen.push(variableSnippet);
            }

            continue;
        }
        
        // --------------- MATH OPERATOR ----------------
        if (g[i] === "*" || g[i] === "/" || g[i] === "+" || g[i] === "-" || g[i] === "^" || g[i] === "%") {
            const operatorSnippet: GeneratorSegment = {
                type: "operator",
                value: g[i],
                code: null
            };

            
            if(topStackObject) {
                // If scope exists push it to the top scope
                const topIndex = stack.length - 1;
                stack[topIndex].code.push(operatorSnippet);
            } else {
                // Otherwise push it to root level
                pgen.push(operatorSnippet);
            }

            continue;
        }
        
        // --------------- MATH FUNCTION ----------------
        // Mathematical formulas are coded in three letters
        let nextThree = String(g[i] + g[i+1] + g[i+2]);
        
        // Check if next three chars are one of 
        const isSin = nextThree === "sin";
        const isCos = nextThree === "cos";
        const isTan =nextThree === "tan";
        const isSquare = nextThree === "sqw"
        const isExponent = nextThree === "exp";
        const isSinc = nextThree === "snc";
        const isUnitStep = nextThree === "stp";
        const isUnitRamp = nextThree === "rmp";
        const isUnitPulse = nextThree === "ups";
        const isNoise = nextThree === "nos";
        const isPyramid = nextThree === "pyr";
        const isSawtooth = nextThree === "saw";
        const isAbsolute = nextThree === "abs";

        if(isSin || isCos || isTan || isSquare || isExponent || isSinc || isUnitStep || isUnitRamp || isUnitPulse || isNoise || isPyramid || isSawtooth || isAbsolute) {
            // Adjust index to next character
            i += 3;

            // Search for opening brackets
            while(g[i] !== "(") {
                i++;

                if(i >= g.length) {
                    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    // TODO: throw error
                    // ERROR REASON: should provide brackets for math operators
                    console.error("should provide brackets for math operators");
                    return null
                }
            }
            
            // Check if provided space or a character after three math chars
            // if (g[i+1] === "(") i++;

            const mathSnippet: GeneratorSegment = {
                type: "math",
                value: nextThree,
                code: []
            };

            if(topStackObject) {
                // If scope exists push it to the top scope
                const stackTopIndex = stack.length - 1;
                stack[stackTopIndex].code.push(mathSnippet);

                const scopeTopIndex = stack[stackTopIndex].code.length - 1;

                stack.push(
                    stack[stackTopIndex].code[scopeTopIndex]
                )
            } else {
                // Otherwise push it to root level
                pgen.push(mathSnippet);

                stack.push(
                    pgen[pgen.length - 1]
                );
            }
            

            // Continue parsing code
            continue;
        }

        // --------------- REGULAR SCOPE ----------------
        if(g[i] === "(") {
            // Begin regular scope
            const scopeSnippet: GeneratorSegment = {
                type: "scope",
                value: "",
                code: []
            }

            if(topStackObject) {
                // If scope exists push it to the top scope
                const stackTopIndex = stack.length - 1;
                stack[stackTopIndex].code.push(scopeSnippet);

                const scopeTopIndex = stack[stackTopIndex].code.length - 1;

                stack.push(
                    stack[stackTopIndex].code[scopeTopIndex]
                );

                continue;
            } else {
                // Otherwise push it to root level
                pgen.push(scopeSnippet);

                stack.push(
                    pgen[pgen.length - 1]
                );

                continue;
            }
        }

        // --------------- END ANY SCOPE ----------------
        if(g[i] === ")" || g.charAt(i) === ")") {
            // End Scope

            if(topStackObject) {
                // Remove top item from stack if there is one
                stack.pop();
                continue;
            } else {
                // Throw error if closed scope that wasn't opened
                // TODO:            throw ERROR
                // ERROR REASON:    non existent scope was closed
                console.error("non existent scope was closed");
                return null;
            }
        }

        // --------------- NUBMER ----------------
        let maybeNumber = String(parseInt(g[i]));

        if(maybeNumber !== String(NaN) && typeof parseInt(maybeNumber) == "number") {
            let numberStart = i;

            // Is current char a number or a dot?
            const isNumber = () => (maybeNumber !== String(NaN) && typeof parseInt(maybeNumber) === "number");
            const isDot = (index: number) => String(g[index]) === ".";

            // Was there a dot in current sequence of numbers?
            let wasDotAlready = false;
            
            while(isNumber() || isDot(i)) {
                // If current char is a dot
                if(isDot(i)) {
                    if(wasDotAlready) {
                        // If it there was a dot already, throw error, since it doesn't make sense
                        // TODO: throw ERROR
                        // ERROR REASON: invalid floating point number syntax
                    } else {
                        // If not, set was dot already to true
                        wasDotAlready = true;
                    }
                }

                // Move to next index and 
                i++;
                maybeNumber = String(parseInt(g[i]));
            }

            const resultingNumber = g.slice(numberStart, i);

            const numberSnippet: GeneratorSegment = {
                type: "number",
                value: resultingNumber,
                code: null
            };

            if(topStackObject) {
                // If scope exists push it to the top scope
                const topIndex = stack.length - 1;
                stack[topIndex].code.push(numberSnippet);
            } else {
                // Otherwise push it to root level
                pgen.push(numberSnippet);
            }

            i--;

            continue;
        }
    }


    // Return parsed generator array
    return pgen;
}

export interface GeneratorSegment {
    type: string,
    value: (string|number),
    code: GeneratorSegment[]
}