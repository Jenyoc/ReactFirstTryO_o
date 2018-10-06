import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addElementAction} from './addElementAction';

const withAddElement=Component=>{
  const WrappedComponent = props=>{
    return <Component addElement={props.addElement}/>
  };

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      addElement: addElementAction
    },
      dispatch
    );
  return connect(
    null,
    mapDispatchToProps
  )(WrappedComponent)
};

export default withAddElement;