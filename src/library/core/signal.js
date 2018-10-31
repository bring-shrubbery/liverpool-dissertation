let errors = require('./errors');

let signal = function ({amplitude, frequency, phase, size, resolution, type, data}) {

    // Chack for provided parameters only if data is not provided
    // or if all data is provided
    if(!data || (amplitude && frequency && phase && size && resolution && type)) {
        // Before creating signal object check if all required properties were provided
        let errorCause = null;
        if (!amplitude) errorCause = "NO_AMPLITUDE"
        if (!frequency) errorCause = "NO_FREQUENCY"
        if (!phase && phase !== 0 && phase !== "0") errorCause = "NO_PHASE"
        if (!size) errorCause = "NO_SIZE"
        if (!resolution) errorCause = "NO_RESOLUTION"
        if (!type) errorCause = "NO_TYPE"

        // Returning an error will prevent generating signal
        const err = errors.throwParameterError(errorCause);
        if (err) {
            console.error(err);
            return null;
        }
        
        // Assign private properties from arguments
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.phase = phase;
        this.size = size;
        this.resolution = resolution;
        this.type = type;

        // Calculate remainging properties
        this.period = 1 / frequency;
        this.numberOfPeriods = this.size / this.period;
        this.totalPoints = this.numberOfPeriods * this.resolution;

        // Generate data from provided data
        this.updateData();
    } else {
        this.amplitude = null;
        this.frequency = null;
        this.phase = null;
        this.size = null;
        this.resolution = null;
        this.type = null;

        this.data = data;
    }
    
}

module.exports = signal;