import React, { useState } from "react";
import { useDispatch } from "react-redux";

//we need to import that function from another file here
import { balance, reset,withdraw, mobile,fullname} from "./actions";
export default function FormInput() {
  //the useDispatch is used to update that value here
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const[mobileData,setMobileData]=useState("");
  const[name,setName]=useState("");
  const[updatedData,setUpdatedData]=useState("");
  return (
    <div >
      <h1> Form </h1>
      <div>
        <input
          placeholder="Enter  amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="btn btn-primary col-1"
          onClick={() =>{
            //here directly by applying the dispatch here we can call that function and the state 
            //value and that dispatch type and payload is on another file
            dispatch(balance(amount));
          }
          }
        >
          Deposite
        </button>
        <button
          onClick={() =>
            dispatch(withdraw(amount))
          }
        >
          withdraw
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div>
        <input
          placeholder="Enter  name"
          onChange={(e) => {
            setMobileData(e.target.value);
          }}
        />
        <button
          onClick={() =>{
            dispatch(mobile(mobileData ));
            setMobileData(" ")
          }
          }
        >
          Update
        </button>
      </div>

      <div>
        <input
          placeholder="Enter  mobile"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() =>{
            dispatch(fullname(name ));
            setName(" ")
          }
          }
        >
          Update
        </button>
        
      </div>
    </div>
  );
}
