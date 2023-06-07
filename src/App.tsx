import "./styles/styles.css";
// import Img from "./assets/images/sample.png";
// import svg from "./assets/images/parachuting-1781587.svg";
import CLickCounter from "./componnets/CLickCOunter";

export const App = () => {
  return (
    <div>
      <div className="head">React webpack template</div>
      <CLickCounter />
    </div>
  );
};
