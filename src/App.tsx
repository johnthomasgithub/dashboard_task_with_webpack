import "./styles/styles.css";
import Img from './assets/images/sample.png';
import svg  from './assets/images/parachuting-1781587.svg'

export const App = () => {
  return (
    <div>
      <div className="head">React webpack template</div>
      <img src={Img} />
      <img src={svg} />
    </div>
  );
};
