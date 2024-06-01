import "./Header.css";

import reactImg from "../assets/react-core-concepts.png"; // dynamic value of img
// imgs can be lost during deployment, thus better to import from path

const reactDescr = ["Fundamentals", "Crucial", "Core"];

function genRandomInt(val) {
  return Math.floor(Math.random() * (val + 1));
}

export default function Header() {
  const descriptor = reactDescr[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptor} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
