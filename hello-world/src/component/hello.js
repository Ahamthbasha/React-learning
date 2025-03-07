import React from "react";


// jsx
// const Hello=()=>{
//     return(
//         <div>
//             <h1>Hello visvas</h1>
//         </div>
//     )
// }

const Hello=()=>{
    return React.createElement('div',
        {id:'helllo',className:"dummyclass"},
        React.createElement('h1',null,'hello viswas')
    )
}

export default Hello