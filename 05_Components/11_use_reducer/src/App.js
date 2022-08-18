import { useEffect, useReducer } from "react";
import "./App.css";
import Coin from "./components/Coin/Coin";
import Counter from "./components/Counter/Counter";

const initState = {
  price: 0,
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updatePrice":
      state = {
        ...state,
        price: action.price,
      };
      break;
    case "increase":
      state = {
        ...state,
        count: state.count + 1,
      };
      break;

    case "decrease":
      state = {
        ...state,
        count: state.count - 1,
      };
      break;
    case "reset":
      state = {
        ...state,
        count: 0,
      };
      break;

    default:
      console.log("Unknown action");
      break;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const curName = "BTC";

  const getCoinData = async (currency) => {
    const key =
      "f4815f908ba8959fff8c78553ed8f723a8f249324f13887151997558ec212cdf";
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=EUR&api_key=`;
    const res = await fetch(`${url}${key}`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "updatePrice", price: data["EUR"] });
  };

  useEffect(() => {
    getCoinData(curName);
  }, []);

  return (
    <div className="App">
      <p>Hallo Bitcoin Welt</p>
      <Coin name={curName} price={state.price} date={"10-08-2022 07:20 UTC"} />
      <Counter count={state.count} dispatch={dispatch} />
    </div>
  );
}

export default App;
