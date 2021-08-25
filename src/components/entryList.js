//import React, { useEffect, useState} from 'react';
//import { getEntries } from '../endpoint';

function EntryList(props){
    console.log(props)
    //const [list, setList] = useState([]);

    // useEffect(() => {
    //     let mounted = true;
    //     getEntries().then((res) => {
    //         if(mounted){
    //             console.log(res)
    //             setList(res.entries);
    //         } 
    //         });
    //         return () => mounted = false;
    // },[]);

  return (
        <div>
            <ul className="my-list">
                {props.data.map((item,i) => <li key={`list-${i}`}>{ item.API }</li>)}
            </ul>
        </div>
    )
}

export default  EntryList;