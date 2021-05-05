function ActionsObserver() {
    const state = {
        observers: [],
    };

    function subscribe(observerFunction) {
        state.observers.push(observerFunction);
    };

    function notifyAll(...functionParameters) {
        console.log(`Notifying observers`);

        return (
            functionParameters.map((parameter) => {
                const subscribedFunctions = state.observers;
                const subscriberIndex = subscribedFunctions.findIndex(subscriber => subscriber.name === parameter.name);
                const requestedFunction = subscribedFunctions[subscriberIndex];

                return requestedFunction(parameter.arg);
            })
       );
    };

    return {
        subscribe,
        notifyAll
    };
};

export {ActionsObserver};