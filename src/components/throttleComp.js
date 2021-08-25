import React from 'react';
import { throttle } from '../utils/utils';

class trottleComp extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    myThrottle = throttle(() => {
        console.log("clicked");
    },5000);

    handleClick (e) {
        this.myThrottle();
    }
    render(){
        return (
        <div>
            <button onClick={ this.handleClick }>Test Trottle</button>
        </div>
        )
    }
}

export default trottleComp;