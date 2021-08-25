 export function debounce( fn, delay){
    var timeout;

    return function(...args){
        if(timeout) {clearTimeout(timeout);}
        timeout = setTimeout(function(){
            console.log("settimeout")
            fn(...args);
        },delay);
    }   
 }

export function throttle(cb,delay){
    let last = 0;
    return function(...args){
        let now = new Date().getTime();
        console.log(now);
        console.log(last);
        if(now - last < delay){
            console.log("if");
            return;
        } else {
            console.log("else");
            last = now;
            return cb(...args);
        }
    }
}



