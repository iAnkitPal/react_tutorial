import "./App.css";
// import { PasswordGenerator } from "./components/PasswordGenerator";
import {CurrencyConvertor} from "./components/CurrencyConvertor";
import {useCurrencyInfo} from "./hooks/UseCurrencyInfo";

function App() {
  const getCurrency = useCurrencyInfo("usd");
  setTimeout(() => {
    console.log(getCurrency);
  },2000);

  // const demoObj = {
  //   desc:"This is product One!"
  // }
  return (
    <>
      {/* <Card deviceName="Macbook" demoObj={demoObj} />
      <Card deviceName="Lenovo"  demoObj={demoObj}/>
      <Card deviceName="Dell"  demoObj={demoObj}/> */}
      {/* <BgChanger /> */}
      {/* <PasswordGenerator /> */}
      <CurrencyConvertor />
    </>
  );
}

export default App;
