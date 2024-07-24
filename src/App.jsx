import "./App.css";
import Card from "./components/Card";

function App() {
  const demoObj = {
    desc:"This is product One!"
  }
  return (
    <>
      <Card deviceName="Macbook" demoObj={demoObj} />
      <Card deviceName="Lenovo"  demoObj={demoObj}/>
      <Card deviceName="Dell"  demoObj={demoObj}/>
    </>
  );
}

export default App;
