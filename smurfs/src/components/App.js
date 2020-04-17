import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MainForm from "./MainForm";
import DisplayCards from "./DisplayCards";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { data } = reducer.dataReducer;
  const { inputValue } = reducer.addReducer;
  //   console.log("adding.. ", inputValue);

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "NEW_DATA", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err });
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "POSTING_DATA" });
  }, []);

  //   useEffect(() => {
  //     dispatch({ type: "ADDING_ITEM" });
  //     axios.post("http://localhost:3333/smurfs", inputValue).then((res) => {
  //       console.log("adding new ", res);
  //     });
  //   }, [inputValue]);

  const getValue = (value) => {
    //  console.log("value ", value);
    dispatch({ type: "GET_INPUT_VALUE", payload: value });
  };

  return (
    <div className="App">
      <MainForm getValue={getValue} />
      <DisplayCards data={data} />
    </div>
  );
};

export default App;
