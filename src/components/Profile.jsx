import { useContext } from "react";
import UserContext from "../context/UserContext";

export function Profile(params) {
  const { user } = useContext(UserContext);
  if (user) return <>Welcome,{user.split('@')?.[0]}</>;
  else <>Please Login!</>
}
