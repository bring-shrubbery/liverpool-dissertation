import { initTime } from "../scriptGeneratorFunctions";


test("Time Init Function", () => {
    const START = -1;
    const STOP = 1;
    const STEP = 0.1;

    const expectedTimeInitiatorOutput = `let t = (function(){
        let r = [];
        for(let i = ${START}; i < ${STOP}; i+=${STEP}) {
            r.push(i);
        }
        return r;
    })();`;

    expect(initTime(-1, 1, 0.1)).toEqual(expectedTimeInitiatorOutput)
})