//import React, { useEffect, useState } from 'react';
//import { getTrialEntries } from '../endpoint';

// function TestEntries(){

//     const [testlist,setTestList] = useState([]);
    
//     useEffect(() => {
//         getTrialEntries().then((res) => {
//             console.log(res.data.entries);
//             return res.data.entries ? setTestList(res.data.entries) : [];
//         });
//     },[]);

//     return (
//         <div>
//             <ul>
//                 {
                    
//                     testlist.map((item,i) => 
//                     {
//                         return (<li key={`testlist-${i}`} ><h3>{ item.API}</h3> <p>{item.Description}</p></li>)
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
function TestList(props){
console.log("props-",props);
    return (
        <div>
            <ul className="my-list">
                { props.data.map((item,i) => <li key={`list-${i}`}>{ item.API }</li>) }
            </ul>
        </div>
    )
}
export default TestList;
