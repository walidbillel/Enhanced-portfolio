import React from "react";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import CardProject from "./components/Cardprojects";
import Contact from "./components/Contact";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Illustration from "./components/Illustrations";

// ...
const projects = [
  {
    id: 1,
    projectName: "HAPPENIN'",
    technologies: "HTML5, CSS3, JAVASCRIPT, JQUERY, AJAX",
    gitHub: "https://github.com/walidbillel/project1-WABD-",
    appLink: "https://walidbillel.github.io/project1-WABD-/",
    gif:
      "https://www.diocesefl.org/media/11267/ed-web-mission-youth-762x302_happening.jpg"
  },

  {
    id: 2,
    projectName: "Vriend",
    technologies: "HTML5, CSS3, JAVASCRIPT, JQUERY, NODE JS, SEQUELIZE",
    gitHub: "https://github.com/walidbillel/vfriend-book-heroku",
    appLink: "https://vfriend-book.herokuapp.com/",
    gif: "https://cdn-images-1.medium.com/max/1279/1*0IpquI0xSAap0jeUItwaVg.png"
  },

  {
    id: 3,
    projectName: "Vriend 2",
    technologies: "HTML5, CSS3, JAVASCRIPT, REACT JS, MONGO DB, NODE JS",
    gitHub: "https://github.com/Cbutler64/Vfriend-Videos",
    appLink: "https://fathomless-dawn-58912.herokuapp.com/",
    gif: "https://www.cmo.com/content/dam/CMO_Other/articles/1046x616-video.png"
  },

  {
    id: 4,
    projectName: "Burger",
    technologies: "HTML5, CSS3, JAVASCRIPT, NODE JS, HANDLEBARS JS, MYSQL",
    gitHub: "https://github.com/walidbillel/burger",
    appLink: "https://burger-eater0.herokuapp.com/",
    gif:
      "https://theultralinx.com/.image/t_share/MTM1MTU4MDA2NjY4MTE4MDI2/boigerpng.png"
  },

  {
    id: 5,
    projectName: "Clicky Game",
    technologies: "HTML5, CSS3, JAVASCRIPT, REACT JS",
    gitHub: "https://github.com/walidbillel/Clicky-Game-Heros",
    appLink: "https://clicky-game-walid.herokuapp.com/",
    gif:
      "https://img.freepik.com/free-vector/illustration-of-touch-screen-hand-gesture_53876-5608.jpg?size=338&ext=jpg"
  },

  {
    id: 6,
    projectName: "Friend Finder",
    technologies: "HTML5, CSS3, JAVASCRIPT, NODE JS",
    gitHub: "https://github.com/walidbillel/FriendFinder",
    appLink: "https://friend-finder-wb.herokuapp.com/",
    gif:
      "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_630/uatwh9wwtf1xkolzrzqf"
  },

  {
    id: 7,
    projectName: "Crystal Game",
    technologies: "HTML5, CSS3, JAVASCRIPT, JQUERY",
    gitHub: "https://github.com/walidbillel/unit-4-game",
    appLink: "https://walidbillel.github.io/unit-4-game/",
    gif:
      "https://us.123rf.com/450wm/dariatri3/dariatri31509/dariatri3150900033/44567555-hand-drawing-crystals-set-crystal-gems-sketch-illustration.jpg?ver=6"
  },

  {
    id: 8,
    projectName: "Trivia Game",
    technologies: "HTML5, CSS3, JAVASCRIPT, JQUERY",
    gitHub: "https://github.com/walidbillel/TriviaGame",
    appLink: "https://walidbillel.github.io/TriviaGame/",
    gif:
      "https://static.vecteezy.com/system/resources/previews/000/129/108/non_2x/trivia-papper-background-illustration-vector.jpg"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <About />
        <Skills />
        <Fade right>
          <br></br>
          <br></br>
          <Zoom>
            <p id="project-title">Projects</p>
          </Zoom>
          <div className="projects">
            {projects.map((project, i) => (
              <CardProject
                key={i}
                projectName={project.projectName}
                gif={project.gif}
                yarn
                appLink={project.appLink}
                technologies={project.technologies}
              />
            ))}
          </div>
        </Fade>
        <br></br>
        <Zoom>
          <p className="illu-titre">Illustrations</p>
        </Zoom>
        <Illustration />
        <br></br>
        <Fade left>
          <Contact />
        </Fade>
        <ScrollUpButton />
      </div>
    );
  }
}
export default App;
