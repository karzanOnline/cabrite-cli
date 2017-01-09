
const logger = store => next => action => {
    // what you do before action,
    //example: logger. console.log("dispatching", action);
    let result = next(action);
    // what you can do after action
    console.log('next state', store.getState());
    return result;
};

export default logger;
