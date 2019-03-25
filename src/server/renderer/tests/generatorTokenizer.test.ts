import { tokenizeGenerator } from '../generatorTokenizer'

const testGenerator = "[amplitude]*sin(PI*2*[frequency]+[phase])";
const testTokens = [
    {
        "code": null, "type": "var", "value": "nodeIdamplitude"
    }, {
        "code": null, "type": "operator", "value": "*"
    }, {
        "code": [
            {
                "code": [
                    { "code": null, "type": "operator", "value": "*" },
                    { "code": null, "type": "number", "value": "2" },
                    { "code": null, "type": "operator", "value": "*" },
                    { "code": null, "type": "var", "value": "nodeIdfrequency" }
                ],
                "type": "scope", "value": ""
            }, {
                "code": null, "type": "operator", "value": "+"
            }, {
                "code": null, "type": "var", "value": "nodeIdphase"
            }
        ],
        "type": "math",
        "value": "sin"
    }]

test('Generator Tokenizer', () => {
    expect(tokenizeGenerator(testGenerator, "nodeId")).toEqual(testTokens)
})
