import React from 'react'
import Particles from 'react-particles-js'
import "./ParticlesStyle.css"
const ParticlesConfig = () => {
    return (
        <Particles
            params={{
              "particles": {
    "number": {
      "value": 160,//Quantity
      "density": {
        "enable": true, //Enable the density of particles
        "value_area": 800 //Regional distribution density
      }
    },
    "color": {
      "value": "#00aeff" //The color of the atom
    },
    "shape": {
      "type": "circle", //The shape of the atom "circle" ,"edge" ,"triangle" ,"polygon" ,"star" ,"image" ,["circle", "triangle", "image"]
      "stroke": {
        "width": 0, //The width of the atom
        "color": "#362cff" //Atomic color
      },
      "polygon": {
        "nb_sides": 5 // The number of polygonal sides of the atom
      },
      "image": {
        "src": "img/github.svg", // Atom pictures can use custom pictures "assets/img/yop.svg", "http://mywebsite.com/assets/img/yop.png"
        "width": 100, //Image width
        "height": 100 //Picture height
      }
    },
    "opacity": {
      "value": 1, //Opacity
      "random": true, //Random opacity
      "anim": {
        "enable": true, //Gradient animation
        "speed": 1, // Gradient animation speed
        "opacity_min": 0, //Gradient animation opacity
        "sync": true 
      }
    },
    "size": {
      "value": 3, //Atom size
      "random": true, // random atom size
      "anim": {
        "enable": false, // Atomic gradient
        "speed": 4, //Atomic gradient speed
        "size_min": 0.3, 
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, //Connecting line
      "distance": 150, //Connecting line distance
      "color": "#ffffff", //Connecting line color
      "opacity": 0.4, //Connecting line opacity
      "width": .5 //The width of the connecting line
    },
    "move": {
      "enable": true, //Atomic move
      "speed": 1, //Atomic movement speed
      "direction": "none", //Atom moving direction "none" ,"top" ,"top-right" ,"right" ,"bottom-right" ,"bottom" ,"bottom-left" ,"left" ,"top-left"
      "random": true, //Move in random direction
      "straight": false, //Move directly
      "out_mode": "bounce", //Whether to move out of the canvas
      "bounce": false, //Whether to move
      "attract": { 
        "enable": false, // Attraction between atoms
        "rotateX": 600, //Attract X horizontal distance between atoms
        "rotateY": 600  //Attract Y horizontal distance between atoms
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas", //Interaction detection between atoms "canvas", "window"
    "events": {
      "onhover": {
        "enable": true, //Hover
        "mode": "bubble" //Hover mode "grab" grabs nearby, "bubble" bubble ball effect, "repulse" knockback effect, ["grab", "bubble"]
      },
      "onclick": {
        "enable": false,  //Click effect
        "mode": "repulse"  //Click the effect mode "push" ,"remove" ,"bubble" ,"repulse" ,["push", "repulse"]
      },
      "resize": true // Interactive event adjustment
    },
    "modes": {
      "grab": {
        "distance": 100, //Atomic interaction grab distance
        "line_linked": { 
          "opacity": 0.8  //Atomic interactive capture distance connection opacity
        }
      },
      "bubble": {
        "distance": 250, //The distance between the atom grabbing the bubble effect
        "size": 4, // The size between the atom grabbing bubbles
        "duration": 2, //Continuous event between atomic grabbing bubble effect
        "opacity": 1, //Atomic grabbing bubble effect transparency
        "speed": 3 
      },
      "repulse": {
        "distance": 400, //Knockback effect distance
        "duration": 0.4 //Knockback effect continuous event
      },
      "push": {
        "particles_nb": 4 //Number of particles launched
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
            }}  
                  />
    )
                }

export default ParticlesConfig
