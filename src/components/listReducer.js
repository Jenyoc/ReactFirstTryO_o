const initialState ={
  list:[]
};

const listReducer = (state = initialState, action)=>{
  switch (action.type) {
    case "@@list/ELEMENT_ADD": {
      return {
        ...state,
        list: state.list.concat(action.payload.element)
      }
    }
    default:{
      return state
    }
  }
};

export default listReducer;