let errors = {
    MULTIPLEX_ERROR: {
        EMPTY_ARRAY: () => Error("Multiplex function array is empty, has to contain at least one signal"),
        INVALID_PARAMETERS: () => Error("All elements of multiplex function have to be objects containing data and pps"),
        INVALID_PPS: () => Error("Can only multiplex signals with same pps (points per second)")
    }, SIGNAL_ERROR: {
        NO_AMPLITUDE: () => Error("Can not create signal! No amplitude was provided."),
        NO_FREQUENCY: () => Error("Can not create signal! No frequency was provided."),
        NO_PHASE: () => Error("Can not create signal! No phase was provided."),
        NO_SIZE: () => Error("Can not create signal! No size was provided."),
        NO_RESOLUTION: () => Error("Can not create signal! No amplitude was provided."),
        NO_TYPE: () => Error("Can not create signal! No amplitude was provided.")
    }
}

module.exports = errors;