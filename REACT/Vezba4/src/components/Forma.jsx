import { useState } from "react";
import './Style.css';

export const Forma = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showTable, setShowTable] = useState(false);

  return (
    <div id="forma">
      <input
        type={"text"}
        placeholder={"Enter Username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type={"password"}
        placeholder={"Enter Password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type={"text"}
        placeholder={"Enter First Name"}
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type={"text"}
        placeholder={"Enter Last Name"}
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type={"email"}
        placeholder={"Enter Email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          setShowTable(!showTable);
        }}
      >
        {showTable ? "Hide Table" : "Show Values"}
      </button>
      <br />
      <br />
      {showTable && (
        <table border={1}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{username}</td>
              <td>{password}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};