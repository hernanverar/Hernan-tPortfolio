import projectOne from "../assets/coxala.png";
import projectTwo from "../assets/cabin.jpeg";
import projectThree from "../assets/MrRobogerpic.png";

const projects = {
  1: {
    title: "Hernan Portfolio Projects",
    image: projectOne,
    description: (
      <>
        <p>
        This simple Ecommerce application serves as a convenient tool for keeping track of items, whether they are being sold or purchased. It provides an organized system to monitor transactions and manage inventory.
        </p>
      </>
    ),
    github: "https://github.com/hernanverar",
    demo: "https://coffee-coxala.netlify.app/",
  },
  2: {
  title: "Airbnb clone App",
  image: projectTwo,
  description: (
    <>
      <p>
        Airbnb clone App.
        A Mock clone just to practice some React.js, Banners headders, fotters, cards, serch and CSS files etc.

      </p>
    </>
  ),
  github: "https://github.com/hernanverar/Arbnb-clone/tree/main",
  demo: "https://jade-klepon-2c1c23.netlify.app",
  },
  3: {
    title: "Mr Robogers App",
    image: projectThree,
    description: (
      <>
        <p>
        Simple app that creates arrays on certain numbers, to rerturn back expected outputs of sounds depending on what numbers have been entered.
  
        </p>
      </>
    ),
    github: "https://github.com/hernanverar/Arbnb-clone/tree/main",
    demo: "https://zesty-rabanadas-8caf26.netlify.app/",
    },
};

export default projects;