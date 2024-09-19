import React from "react";
import { useSelector } from "react-redux";
export default function Account() {
  //the useSelector is used to get data from the another file
  const data = useSelector((state) => {
    return state;
  });

  return (
    <div className="container">
      <h1>Account Details</h1>

      <table style={{border:"12px solid black"}}>
        <thead  >
          <tr>
            <th> Balance</th>
            <th>UserName</th>
            <th>Mobile</th>
          </tr>
        </thead>

        <tbody  >
          <tr>
            <td>{data.balance}</td>
            <td>{data.mobile}</td>
            <td>{data.fullname}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
