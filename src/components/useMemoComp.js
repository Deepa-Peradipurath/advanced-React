import React,{ useState , useMemo} from 'react';
import Child from './memoChild';


function CalcFile(){

    let [i,setI] = useState(0);

    function handleClick () {
        setI(i+1);
    }

    const memoChild = useMemo(() => { return <Child></Child>},[]);

    return(
        <div>
            <h3>memo render</h3>
            <div>i is { i }</div>
            <button onClick={ handleClick }>Increment</button>
            <h3>normal render</h3>
            <Child></Child>
            <h3>memo</h3>
            {memoChild}
        </div>
    )
}

export default CalcFile;