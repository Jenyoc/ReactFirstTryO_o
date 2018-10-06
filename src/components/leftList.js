import React, {Component} from "react";

import withAddElement from './leftListWrapper'

class LeftList extends Component {
  constructor(){
    super();

    this.state={
      sources:[]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(sources=>this.setState({sources}))
  }

  clickByElement(event){
    const element=this.state.sources.find(el=> el.id === parseInt(event.target.dataset.index));
    this.props.addElement(element);
  }

  render(){
    return(
      <div className="leftList itemsBox">
      {
        this.state.sources.map((source)=>
          <div className="sourceBlock" onClick={this.clickByElement.bind(this)} data-index={source.id} key={source.id}>{source.title}</div>)
      }
      </div>
    )
  }
}

export default withAddElement(LeftList);