// --------------------------------------- Scope Fixer ---------------------------------------
// Scope Fixer function is related to the gen variable parsing algorithm. Since the tokenizer 
// function does not take into accound that math operators * (multiplication) and / (division)
// are executed first, we need to put scopes around bits that should executed first. This is 
// not final solution, since it does not take following situations into account:
//     * there is a minus or plus sign before a number: -1*[variable]
//         - In this case it would return this: -(1*[variable]). This does not apply scopes
//           correctly.
//
//
// ---------------------------------------- Algorithm ----------------------------------------
// This algorithm makes only one general sweep through the string. This means that if no 
// scopes are needed, execution time will be minimal, i.e. it will take as much time as it
// takes to loop through the string once and check if the character is * or /. In the case of
// 34 character string, this function is executed in abount 0.3-0.5 ms. With an average of 
// around 0.4ms and 34 characters, we can approximate that one character takes 0.4 / 34 = 1.66
// micro seconds. This was tested on 2.7Ghz Intel Core i7. So it took around 4482 clock cycles
// to execute that according to following equation: 1.66us / (1 / 2.7G) = 4482. This could be 
// dramatically improved by using custom made Node.js c++ plugin which allows to run c++
// binaries from Node.js or by writing the whole renderer server in a compiled language like 
// python, c#, go, or swift. There is also a possibility to write it in Rust language, C or
// C++. This would allow to compile just this function to WebAssembly and run it in Node.js at 
// compiled speed. If further development will be done and there will be a decision to  switch
// to a compiled language server, I would suggest using GO language due to its simplicity.
//
// Algithm works in a following fashion:
//   1. Make sure passed text is of a String type
//   2. Set flags to false:
//       - border flags: indicate if on left or right, a + or - sign was found
//       - bracket flags: indicate if while sweeping left and right a scope was found
//   3. Initiate variables for left and right sweepers
//   4. Loop until whole string was scanned, in the loop:
//       1. If current character is "*"" or "/", continue, otherwise increase index by one and check again
//       2. Scan to the left from the current index.
//       3. If ran out of bounds of the string, stop scanning left, move to step 7
//       4. If hit closing bracket, set closing bracket flag to true.
//       5. If hit opening bracket, check if closing bracket was hit before:
//           - If closing bracket WAS hit, continue scanning and set closing bracket flag to false again.
//           - If closing bracket WAS NOT hit, stop scanning and move to step 7
//       6. If "+" or "-" sign was hit, check if closing bracket was hit before:
//           - If closing bracket WAS hit, continue scanning, since it means that the + or - sign is in another scope
//           - If closing bracket WAS NOT hit, stop scanning, move right by one step and reset left border flag
//       7. Scan to the right from the current index.
//       8. If ran out of bounds of the string, stop scanning left, move to step 12
//       9. If hit opening bracket, set opening bracket flag to true.
//       10. If hit closing bracket, check if opening bracket was hit before:
//           - If opening bracket WAS hit, continue scanning and set opening bracket flag to false again.
//           - If opening bracket WAS NOT hit, stop scanning and move to step 12
//       11. If "+" or "-" sign was hit, check if opening bracket was hit before:
//           - If opening bracket WAS hit, continue scanning, since it means that the + or - sign is in another scope
//           - If opening bracket WAS NOT hit, stop scanning and reset left border flag

export function fixScopes(gen) {
    let g = String(gen);

    // Variable are taken outside of for loop, to increase performance.
    // In this way, variables are just rewritten in the same memory
    // location instead of creating new variable every time.
    let foundLeftBorder = false;
    let foundRightBorder = false;

    let justHitOpeningBracket = false;
    let justHitClosingBracket = false;

    let left;
    let right;

    for (let i = 0; i < g.length; i++) {
        if (g[i] === "*" || g[i] === "/") {
            // Scan left
            for (left = i; !foundLeftBorder; left--) {
                // Exit the scanning loop if hit left string wall
                if (left <= 0) {
                    // This does not set foundLeftBorder variable to true,
                    // since if both sides are brackets or outer walls of
                    // the string, new brackets should not be inserted
                    break;
                }

                // When it hits opening bracket, it checks if it hit closing bracket before
                if (g[left] === "(") {
                    if (justHitClosingBracket) {
                        // If it did, it skips current bracket and continues searching.
                        // This basically prevents inserting bracket inside of the scope.
                        justHitClosingBracket = false;
                        continue;
                    } else {
                        // If it didn't, it's time to insert a bracket
                        break;
                    }
                }

                // Marks that it hit closing bracket, so that if opening bracket was hit later,
                // it knows that it shouldn't 
                if (g[left] === ")") justHitClosingBracket = true;

                // Exit scanning loop if hit plus or minus
                // Also, move right, so that brackes is inserted after + or - sign
                if (g[left] === "+" || g[left] === "-") {
                    if (justHitClosingBracket) {
                        // If it did, it skips current bracket and continues searching.
                        // This basically prevents inserting bracket inside of the scope.
                        continue;
                    } else {
                        // If it didn't, it's time to insert a bracket
                        left++;
                        foundLeftBorder = true;
                        break;
                    }
                }
            }

            // Scan right
            for (right = i; !foundRightBorder; right++) {
                // Exit the scanning loop if hit right string wall or closing bracket
                if (right >= g.length) {
                    // This does not set foundRightBorder variable to true,
                    // since if both sides are brackets or outer walls of
                    // the string, new brackets should not be inserted
                    break;
                }

                // When it hits closing bracket, it checks if it hit opening bracket before
                if (g[right] === ")") {
                    if (justHitOpeningBracket) {
                        // If it did, it skips current bracket and continues searching.
                        // This basically prevents inserting bracket inside of the scope.
                        justHitOpeningBracket = false;
                        continue;
                    } else {
                        // If it didn't, it's time to insert a bracket
                        break;
                    }
                }

                // Marks that it hit closing bracket, so that if opening bracket was hit later,
                // it knows that it shouldn't 
                if (g[right] === "(") justHitOpeningBracket = true;

                if (g[right] === "+" || g[right] === "-") {
                    if (justHitOpeningBracket) {
                        // If it did, it skips current bracket and continues searching.
                        // This basically prevents inserting bracket inside of the scope.
                        continue;
                    } else {
                        // If it didn't, it's time to insert a bracket
                        foundRightBorder = true;
                        break;
                    }
                    
                }
            }

            // If on one of the sides there is + or - sign
            if (foundLeftBorder || foundRightBorder) {
                // Slice original string at the specified locations
                let one = g.slice(0, left);
                let two = g.slice(left, right);
                let three = g.slice(right, g.length);

                // Insert brackets between former three strings to form
                // new string with inserted brackets
                g = one + "(" + two + ")" + three;
            }

            // Reset border variables
            foundLeftBorder = false;
            foundRightBorder = false;
        }
    }

    return g;
}