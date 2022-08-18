import { useContext } from "react";
import { Context } from "../Context";
export default function Header() {
  const { state } = useContext(Context);
  const countSavedRecipes = state.savedRecipes.length;
  console.log(countSavedRecipes);

  return (
    <div className="header">
      <div className="row">
        <span>Du hast {countSavedRecipes} gespeichert</span>
      </div>
    </div>
  );
}
