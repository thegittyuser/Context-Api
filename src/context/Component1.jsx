import "./style.css";
import Component2 from "./Component2";
import { createContext } from "react";
export const usernameContext = createContext();
function Component1() {
  const username = "Ahmed";
  return (
    <>
      <div className="box">
        <h1>Component 1</h1>
        <h2>Hello, {username}</h2>
        <usernameContext.Provider value={username}>
          <Component2 />
        </usernameContext.Provider>
      </div>
    </>
  );
}
export default Component1;
