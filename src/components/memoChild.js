import React, { useEffect,useMemo } from 'react';

let count = 0;
function Child(){

    useEffect(()=>{
        count++;
    });
    // below both methods will work
    // const sampleUseMemo = useMemo(() => {
    //     return <div>render count is {count}</div>
    // },[]);
    // return (sampleUseMemo);

    // return useMemo(() => {
    //     return <div>render count is {count}</div>
    // },[]);

    return <div>render count is {count}</div>
}

export default Child;