import React, {Component} from "react";

import withAddElement from './leftListWrapper'

class LeftList extends Component {
  constructor(){
    super();

    this.state={
      sources:[]
    };
  }


  componentWillMount(){
    this.props.getElementsJSON();
  }

  clickByElement(event){
    const element=this.props.sources.sources.find(el=> el.id === parseInt(event.target.dataset.index));
    this.props.addElement(element);
    this.setState(this.props.sources.sources=this.props.sources.sources.filter(el=> el.id !== parseInt(event.target.dataset.index)))
  }

  render(){
    return(
      <div className="leftList itemsBox">
        {this.props.sources.sources.map((source)=>
          <div className="sourceBlock" onClick={this.clickByElement.bind(this)} data-index={source.id} key={source.id}>{source.title}</div>)}
      </div>
    )
  }
}

export default withAddElement(LeftList);