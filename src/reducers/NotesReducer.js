const initialState = {
  list: [{ title: "First note", body: "Testing 1,2,3..." }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      break;
  }
  return state;
};
