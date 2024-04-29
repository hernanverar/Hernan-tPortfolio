import projectOne from "../assets/coxala.png";
import projectTwo from "../assets/cabin.jpeg";
import projectThree from "../assets/MrRobogerpic.png";

const Projects = {
  1: {
    title: "Coffee Coxala Website",
    image: projectOne,
    description: (
      <>
        <p>
          Our Simple E-commerce Application is mainly built for easy product
          browsing and ordering. While it helps users find and
          purchase items, it also includes basic features for
          keeping track of inventory and transactions. Designed with
          user-friendliness in mind, our platform allows customers to browse
          products and place orders with convenience. Experience the simplicity of finding and
          ordering products with our coffee shop Application, designed to
          cater to your basic e-commerce needs.
        </p>
      </>
    ),
    github: "https://github.com/hernanverar/CoffeeCoxala-Ecommerce",
    demo: "https://coffee-coxala.netlify.app/",
  },
  2: {
    title: "Airbnb clone App",
    image: projectTwo,
    description: (
      <>
        <p>
          Airbnb clone App. A Mock clone just to practice some React.js, Banners
          headders, fotters, cards, serch and CSS files etc.
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
          Introducing the Mr. Robogers Application, a solution designed to
          facilitate the seamless generation of arrays based on specific
          numerical inputs. This application harnesses advanced algorithms to
          meticulously construct arrays and deliver anticipated outputs
          corresponding to the entered numbers. Experience unparalleled
          precision and efficiency in sound generation with the Mr. Robogers
          App.
        </p>
      </>
    ),
    github: "https://github.com/hernanverar/Mr.-Roboger-s-Neighborhood",
    demo: "https://zesty-rabanadas-8caf26.netlify.app/",
  },
};

export default Projects;
