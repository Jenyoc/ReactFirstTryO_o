import React from 'react'
import {connect} from 'react-redux'

const withViewList = Component =>{
  const WrappedComponent=props=>{
    return <Component list={props.list}/>
  };

  const mapStateToProps = (state) =>{
    return{
      list:state.list
    }
  };

  return connect(
    mapStateToProps,
      null)(WrappedComponent);
  };

export default  withViewList;