import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addElement} from './addElementAction';
import {getElementsJSON} from "./addElementAction"

import store from "./store";

const withAddElement=Component=>{
  const WrappedComponent = props=>{
    return <Component sources={props.sources} addElement={props.addElement} getElementsJSON={props.getElementsJSON}/>
  };


  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      addElement: addElement,
        getElementsJSON:getElementsJSON
    },
      dispatch
    );
  const mapStateToProps = (state) => {
      return {
      sources: state.sources
      };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withAddElement;