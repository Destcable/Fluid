function useState(initialValue) {
    let state = initialValue;
  
    function getState() {
      return state;
    }
  
    function setState(newState) {
      state = newState;
    }
  
    return [getState, setState];
};

export {useState};
  