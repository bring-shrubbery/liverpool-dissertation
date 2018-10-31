let errors = function () {
    
}

errors.throwParameterError = (errorInput) => {
    if (errorInput) {
        switch (errorInput) {
            case "NO_AMPLITUDE" : return Error("Can not create signal! No amplitude was provided.");
        
            case "NO_FREQUENCY" : return Error("Can not create signal! No frequency was provided.");

            case "NO_PHASE" : return Error("Can not create signal! No phase was provided.");

            case "NO_SIZE" : return Error("Can not create signal! No size was provided.");

            case "NO_RESOLUTION" : return Error("Can not create signal! No amplitude was provided.");

            case "NO_TYPE" : return Error("Can not create signal! No type was provided.");

            default : return null;
        }
    }
}

module.exports = errors;