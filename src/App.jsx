import "./App.css";
import { PasswordGenerator } from "./components/PasswordGenerator";

function App() {
  // const demoObj = {
  //   desc:"This is product One!"
  // }
  return (
    <>
      {/* <Card deviceName="Macbook" demoObj={demoObj} />
      <Card deviceName="Lenovo"  demoObj={demoObj}/>
      <Card deviceName="Dell"  demoObj={demoObj}/> */}
      {/* <BgChanger /> */}
      <PasswordGenerator />
    </>
  );
}

export default App;
