import Particles from 'react-tsparticles'

const ParticleBackground = () => {
    return (
       <div className='App'>
           <Particles
           options={{
            "particles": {
              "number": {
                "value": 30,
                "density": {
                  "enable": false,
                  "value_area": 1736.124811591
                }
              },
              "color": {
                "value": "#6d83f2"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#b92020"
                },
                "polygon": {
                  "nb_sides": 4
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 2.5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 0,
                  "size_min": 0,
                  "sync": true
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#112240",
                "opacity": 0.14204657549380909,
                "width": 1.2626362266116362
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
           />
    
       </div>
    
    );
    }


export default ParticleBackground;