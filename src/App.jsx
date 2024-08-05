import "./App.css";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

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
      {/* <PasswordGenerator /> */}
      <UserContextProvider>
      <Login />
      <Profile/>
      </UserContextProvider>
    </>
  );
}

export default App;
