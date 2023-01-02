import React, { useState, useContext } from "react";
import { Context } from "../context";

const Index = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      <p>index page</p>
      <button
        onClick={() =>
          dispatch({
            type: "LOGGED_IN_USER",
            payload: "Ryan Dhungel",
          })
        }
      >
        login
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "LOGGED_IN_USER",
            payload: null,
          })
        }
      >
        logout
      </button>
      {JSON.stringify(state)}
    </div>
  );
};

export default Index;
