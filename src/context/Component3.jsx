import "./style.css";
import { usernameContext } from "./Component1";
import { useContext } from "react";
function Component3() {
  const username = useContext(usernameContext);

  return (
    <>
      <div className="box">
        <h1>Component 3</h1>
        <h2>Bye, {username}</h2>
      </div>
    </>
  );
}
export default Component3;
