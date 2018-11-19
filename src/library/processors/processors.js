const signal = require('../core/signal');
const { SIGNAL_TYPE } = require('../core/constants');
const { MULTIPLEX_ERROR } = require("../core/errors");

// Processors stored in SIGNALS object
signal.prototype.multiplex = function(signalsToAdd, options) {
    let outputSignal = [];
    let numberOfSignals;
    let maxLength = 0;
    let average = (options.average !== null && options.average === true);

    if(typeof signalsToAdd === Array || typeof signalsToAdd === "array") {
        // Check if array has something
        if(signalsToAdd.length <= 1) {
            // TODO: ERROR: Multiplex function array is empty, has to contain at least one signal
            return MULTIPLEX_ERROR.EMPTY_ARRAY();
        }

        // Check if all elements of array are objects containing required parameters
        for(let signalId in signalsToAdd) {
            const currentObject = signalsToAdd[signalId];
            if(!currentObject.pps || !currentObject.data) {
                // TODO: ERROR: All elements of multiplex function have to be objects containing data and pps
                return MULTIPLEX_ERROR.INVALID_PARAMETERS();
            }
        }

        // Assign value to  number of signals variable
        numberOfSignals = signalsToAdd.length + 1;

        // Check if all pps are equal to current signal pps, return error if not
        for(let signalId in signalsToAdd) {
            if(signalsToAdd[signalId].pps !== this.pps) {
                //TODO: ERROR: Can only multiplex signals with same pps (points per second)
                return MULTIPLEX_ERROR.INVALID_PPS();
            }

            // Find longest data array and save length
            if(signalsToAdd[signalId].data.length > maxLength) maxLength = signalsToAdd[signalId].data.length;
        }

        // Go through all values and add them up
        for(let i = 0; i < maxLength; i++) {
            let sum = 0; 

            if(this.data[i]) sum += this.data[i];

            for(let signalId in signalsToAdd) {
                if(signalsToAdd[signalId].data[i]) sum += signalsToAdd[signalId].data[i];
            }
        
            if(average) sum = sum / numberOfSignals;
            
            outputSignal.push(sum);
        }
    } else if(typeof signalsToAdd === Object || typeof signalsToAdd === "object") {
        // Check if object contains all required parameters
        if(signalsToAdd.data && signalsToAdd.pps) {
            // Assign value to  number of signals variable
            numberOfSignals = 2;

            // Compare current signal pps with added signal pps
            if(signalsToAdd.pps !== this.pps) {
                //TODO: ERROR: Can only multiplex signals with same pps (points per second)
                return MULTIPLEX_ERROR.INVALID_PPS();
            }

            if(this.data.length > maxLength) maxLength = this.data.length;
            if(signalsToAdd.data.length > maxLength) maxLength = signalsToAdd.data.length;

            // Go through all values and add them up
            for(let i = 0; i < maxLength; i++) {
                let sum = 0; 
                if(this.data[i]) sum += this.data[i];
                if(signalsToAdd.data[i]) sum += signalsToAdd.data[i];

                if(average) sum = sum / numberOfSignals;
                
                outputSignal.push(sum);
            }
        } else {
            // TODO: ERROR: Multiplex input object doesn't have all necessary parameters
            return MULTIPLEX_ERROR.INVALID_PARAMETERS();
        }
    } else {
        // TODO: ERROR: Incorrect parameter format
        return MULTIPLEX_ERROR.INVALID_PPS();
    }

    return outputSignal;
}

signal.prototype.equalizePointsPerSecond = function (options) {
    if(options.newPps) {
        // TODO: Create pps changer functionality
    } else {
        // TODO: Error: no new pps was provided
        return null;
    }
}

// Processors stored in SIGNAL object
signal.prototype.updateData = function() {
    // Output data array definition for current signal
    this.data = [];

    // Choose which type of function to use
    switch(this.type) {
        // Sine generation
        case SIGNAL_TYPE.SIN : {
            // Calculate output data for whole signal and push that data
            // to signalData array
            for(let t = 0; t < this.totalPoints; t++) {
                let y = this.amplitude * Math.sin(constants.TWO_PI * this.frequency * t / this.resolution + this.phase);
                this.data.push(y);
            }

            return this;
        }

        // Cosine generation
        case SIGNAL_TYPE.COS : {
            // Calculate output data for whole signal and push that data
            // to signalData array
            for(let t = 0; t < this.totalPoints; t++) {
                let y = this.amplitude * Math.cos(constants.TWO_PI * this.frequency * t / this.resolution + this.phase);
                this.data.push(y);
            }

            return this;
        }

        case SIGNAL_TYPE.TAN : {
            // Calculate output data for whole signal and push that data
            // to signalData array
            for(let t = 0; t < this.totalPoints; t++) {
                let y = this.amplitude * Math.tan(constants.TWO_PI * this.frequency * t / this.resolution + this.phase);
                this.data.push(y);
            }

            return this;
        }

        default: return null;
    }
}

module.exports = signal;