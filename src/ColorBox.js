import React, { Component } from 'react';

export default class ColorBox extends Component {
  newBox(props){
    if(props.opacity >= .2){
      const newValue = props.opacity - .1
      return <ColorBox opacity={newValue} />
    }else{
      return null
    }
  }
  render() {
    return (
      <div className="color-box" style={{opacity: 1}}>
       {this.newBox(this.props)}
      </div>
    )
  }
  
}
