export const addElement =element=>{
  return{
    type:'@@list/ELEMENT_ADD',
    payload:{
      element
    }
  }
};


export const getElementsList=(json)=>{
  return{
    type:'@@sources/ELEMENTS_GET',
    payload:{
      sources: json || []
    }
  }
};

export const getElementsJSON = () => {
  console.log('test');
  const uri = `https://jsonplaceholder.typicode.com/todos/`;
  return dispatch => {
    dispatch(getElementsList());
    return fetch(uri)
      .then(response => response.json())
      .then(post => dispatch(getElementsList(post)));
//      .catch(err => dispatch(getElementsError(err)));
  };
};