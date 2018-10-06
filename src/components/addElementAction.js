export const addElementAction =element=>{
  return{
    type:'@@list/ELEMENT_ADD',
    payload:{
      element
    }
  }
};


export const getElements=()=>{
  return{
    type:'@@list/ELEMENTS_GET',
    payload:{
      elements
    }
  }
};