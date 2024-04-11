export const sayHello = () => { //action creator (wrapper function)
  return { // action- type of object {type:,payload:} consisting of 2 params type and payload
    type: "SAY_HELLO",
    payload: "Hi and welcome to my First Redux App",
  };
};

export const sayGoodbye = () => {
  return { 
    type: "SAY_GOODBYE",
    payload: "Thank you for visiting my App",
  };
};
