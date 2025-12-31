import "./style.css";
import Component3 from "./Component3";
import { usernameContext } from "./Component1";
import { useContext } from "react";
function Component2() {
  const username = useContext(usernameContext);
  return (
    <>
      <div className="box">
        <h1>Component 2</h1>
        <h2>Hello Again, {username}</h2>
        <Component3 />
      </div>
    </>
  );
}
export default Component2;
