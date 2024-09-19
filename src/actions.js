import React from "react";


//here we can return that dispatch type and payload and then the function can call to that dispatch in another file
export function balance(amount){
return(
    { type: "balance", payload: amount }
)    
}

export function withdraw(amount){
    return({ type: "withdraw", payload: amount })
}


export function reset( ){
    return({ type: "reset" })
}



export function mobile(mobileData ){
    return({ type: "mobile", payload: mobileData })
}


export function fullname(name ){

    return({ type: "fullname", payload: name })
}

