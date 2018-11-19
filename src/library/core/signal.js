let {SIGNAL_ERROR} = require('./errors');

let signal = function ({amplitude, frequency, phase, size, resolution, type, data, pps}) {

    // Chack for provided parameters only if data is not provided
    // or if all data is provided
    if(!data || (amplitude && frequency && phase && size && resolution && type)) {
        // Before creating signal object check if all required properties were provided
        let errorCause = null;
        if (!amplitude) return SIGNAL_ERROR.NO_AMPLITUDE();
        if (!frequency) return SIGNAL_ERROR.NO_FREQUENCY();
        if (!phase && phase !== 0 && phase !== "0") return SIGNAL_ERROR.NO_PHASE();
        if (!size) return SIGNAL_ERROR.NO_SIZE();
        if (!resolution) return SIGNAL_ERROR.NO_RESOLUTION();
        if (!type) return SIGNAL_ERROR.NO_TYPE();

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
        this.pps = frequency * resolution;

        // Generate data from provided data
        this.updateData();
    } else if(data && pps) {
        this.amplitude = null;
        this.frequency = null;
        this.phase = null;
        this.size = null;
        this.resolution = null;
        this.type = null;
        
        this.pps = pps
        this.data = data;
    } else {
        // TODO: Error: Custom data nees pps (points per second) property
    }
    
}

module.exports = signal;