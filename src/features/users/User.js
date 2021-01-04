import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, setUser, delUser } from "../users/userSlice";

export function User() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currUser, setCurrUser] = useState("");
  const inputEl = useRef(null);

  return (
    <div>
      list of users:
      <pre>
        {users.map((v) => (
          <div onClick={(e) => dispatch(delUser(v))}>{v}</div>
        ))}
      </pre>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCurrUser("");
          inputEl.current.focus();
          dispatch(setUser(currUser));
        }}
      >
        <input
          type="text"
          ref={inputEl}
          onChange={(e) => setCurrUser(e.target.value)}
          value={currUser}
        ></input>
      </form>
    </div>
  );
}
