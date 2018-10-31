// let constants = require('../core/constants');
let signals = require('../core/main');
let signal = require('../core/signal');

signals.prototype.generateSignal = function (signalProperties) {
    if(typeof signalProperties === Array || typeof signalProperties === "array") {
        // Array variable definition to be returned
        let outputSignals = [];

        // This loop goes through input array and generates sinusoid tada
        for(let signal_id in signalProperties) {
            // Put currently used signal into a constant
            const currentSignalProperties = signalProperties[signal_id];

            let newSignal = new signal(currentSignalProperties);

            // Push finalised array to output array
            outputSignals.push(newSignal);
        }

        return outputSignals;
    } else if (typeof signalProperties === Object || typeof signalProperties === "object") {
        let newSignal = new signal(signalProperties);

        return newSignal;
    } else {
        console.error("Please provide valid arguments!");
        return null;
    }
}

module.exports = signals;