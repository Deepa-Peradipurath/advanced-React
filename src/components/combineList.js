import React, { useEffect, useState} from 'react';
import { getCombineList } from '../endpoint';

function CombineList(props){
    console.log(props)
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getCombineList().then((res) => {
            if(mounted){
                console.log(res);
                setList([...res.mylist.data.entries,...res.sciencelist.data.entries]);
            } 
            });
            return () => mounted = false;
    },[]);

  return (
        <div>
            <ul className="my-list">
                {list.map((item,i) => <li key={`list-${i}`}>{ item.API }</li>)}
            </ul>
        </div>
    )
}

export default  CombineList;