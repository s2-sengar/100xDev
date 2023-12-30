function counterAsTimePassBy(n){
    console.log(n);
    return setInterval(()=>{
        n=n+1;
        console.log(n)
    },1000)
}
let intervalRef=counterAsTimePassBy(0);
