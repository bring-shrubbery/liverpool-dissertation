const signal = require('../core/signal');
const signals = require('../core/main');
import { SIGNAL_TYPE } from '../core/constants';

// Processors stored in SIGNALS object
signals.prototype.multiplex = function(signalData, options) {
    if(typeof signalData === Array || typeof signalData === "array"){
        if(signalData.length <= 1) {
            console.error("Nothing to multiplex! Array must be at least two signals long.");
            return null;
        }
        // Return variable definition
        let outputSignal = []

        // TODO: Multiplex

        // Get the scale in points per second
        // Iterate through all points and add them up
        // Average results if provided in options
        
        for(let signal_id in signalData) {
            
        }
        
        return outputSignal;
    } else {
        console.error("You must provide array with signals that you want to multiplex");
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

            return this
        }

        // Cosine generation
        case SIGNAL_TYPE.COS : {
            // Calculate output data for whole signal and push that data
            // to signalData array
            for(let t = 0; t < this.totalPoints; t++) {
                let y = this.amplitude * Math.cos(constants.TWO_PI * this.frequency * t / this.resolution + this.phase);
                this.data.push(y);
            }

            return this
        }

        case SIGNAL_TYPE.TAN : {
            // Calculate output data for whole signal and push that data
            // to signalData array
            for(let t = 0; t < this.totalPoints; t++) {
                let y = this.amplitude * Math.tan(constants.TWO_PI * this.frequency * t / this.resolution + this.phase);
                this.data.push(y);
            }

            return this
        }

        default: {
            return null
        }
    }
}

module.exports = signal;
module.exports = signals;