import React, { Component, PropTypes } from 'react';

export default class Login extends Component {

componentDidMount() {
    this.updateCanvas();
}

updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    var imageObj1 = new Image();
    imageObj1.src = 'https://s-media-cache-ak0.pinimg.com/236x/d7/b3/cf/d7b3cfe04c2dc44400547ea6ef94ba35.jpg'
 imageObj1.onload = function() {
    const color = '#'+Math.floor(Math.random()*16777215).toString(16);
    ctx.strokeStyle = color
    ctx.font = '18px Arial'
    ctx.fillStyle = color
    ctx.drawImage(imageObj1,0,0);
    ctx.beginPath()
    ctx.fillText('urso', 80, 100)
    ctx.rect(80, 100, 200, 200)
    ctx.stroke()
        
}

}
render() {
    return (


        <canvas ref="canvas" width={300} height={300}> </canvas>

    );
 }
};