// import {vector} from "Vector"
// import { object } from "@cycle/dom";
// import React, { Component } from "react";

// class MousePosition extends Component {
//     state = {
//         x: 0
//     }
// }

class MousePos {
    constructor(){
        this.x = 0;
        this.y = 0;
    }    
}

const BOID_SPAWN_POINT = {
    x: window.innerWidth / 2 - 1,
    y: window.innerHeight / 2 - 1
  };

class Boid {
    constructor(){
        this.position = Object.assign({}, BOID_SPAWN_POINT);
        this.velocity = {x: 0, y:0};
        // this.acceleration = {x: 2, y:6}
        this.hue = 276;
    }
}
// function Boid () {
//     return {
//       position: Object.assign({}, BOID_SPAWN_POINT),
//       velocity: {x: 0, y: 0},
//       hue: 276,
//     //   key: uuid.v4()
//     };
//   }

onmousemove = function(e){
    // console.log("mouse location:", e.clientX, e.clientY)
    let m = new MousePos();
    let rand = Math.floor(Math.random()*100)
    m.x = e.clientX; 
    m.y = e.clientY;
    console.log(m);
    let newPos = `translate(${m.x}px, ${m.y}px)`
    // console.log(newPos);
    // aca el boid sigue al mouse, pero creo que despues deberia ser el flock el que siga al mouse, y no cada boid
    let boids = document.getElementsByClassName("boid");

    for (let i = 0; i < boids.length; i++){
        boids[i].style.transform = newPos;
    }
}

let flock = [];

function createFlock(c){
    for (let i = 0; i < c; i++){
    flock.push(Boid)}
}

createFlock(30)

export default function FlockSystem(){
    
    console.log(flock);
    // console.log(m);
    // console.log(boid.position.x, boid.position.y);
    // updateBoid()
    
    let style = {
        position: 'absolute',
        transform: `translate(150px, 150px) rotate(1rad) scale(.5)`,
        'borderStyle': 'solid',
        "borderWidth": `12.5px 0px 12.5px 30px`,
        'borderColor': `transparent transparent transparent rgb(153, 0, 255)`
      };
    
    return(
        flock.map((e,i)=>{ 
            return(
                <div className='boid' style={style} key={i}></div>
            )
        })
    )
}

