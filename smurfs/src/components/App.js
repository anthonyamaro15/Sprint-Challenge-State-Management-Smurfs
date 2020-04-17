import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MainForm from "./MainForm";
import DisplayCards from "./DisplayCards";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { data } = reducer.dataReducer;

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

  return (
    <div className="App">
      <MainForm />
      <DisplayCards data={data} />
    </div>
  );
};

export default App;
