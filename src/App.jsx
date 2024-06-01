const reactDescr = ["Fundamentals", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.randon() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// <Header /> is a way to call the function in regular jsx component
// or <Header> </Header>
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
