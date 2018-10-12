const initialState ={
  sources:[]
};

const sourcesReducer = (state = initialState, action)=>{
  switch (action.type) {
    case "@@sources/ELEMENTS_GET": {
      return {
        ...state,
        sources: state.sources.concat(action.payload.sources)
      }
    }
    default:{
      return state
    }
  }
};

export default sourcesReducer;