const initialState ={
  elements:[]
};

const elementsReducer = (state=initialState, action)=>{
  switch (action.type) {
    case "@@list/ELEMENT_ADD": {
      return {
        ...state,
        elements:action.payload.elements
      }
    }
    default:{
      return state
    }
  }
};

export default elementsReducer;