import React from "react";
import  withViewList from './rightListWrapper'

const RightList=(props)=>{
      return(
        <div className="rightList itemsBox">
          {
          props.list.list.map(el=><div key={el.id}>{el.title}</div>)
          }
        </div>
      )
  };

export default withViewList(RightList);