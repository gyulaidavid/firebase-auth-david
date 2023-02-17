import React from "react";
import { logOut } from "../firebase-auth";

function Main() {
  async function signOut() {
    await logOut();
  }

  return (
    <div>
      <p>Main page</p>
      <button onClick={signOut}>Sign out</button>

      {/* USER, ha be van jelentkezve, eltárolni egy useState-ben. 
    --> központi helyre menteni, mint context
    --> token?
    --> ehhez lehet kötni olyan feltételt, hogy akik be vannak jelentkezve azoknak jelenik meg bizonyos tartalom */}
    </div>
  );
}

export default Main;
