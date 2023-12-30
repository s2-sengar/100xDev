function counterAsTimePassByWithoutSetInterval(n){
    setTimeout(()=>{
        console.log(n++);
        counterAsTimePassByWithoutSetInterval(n);
    },1000)
}
counterAsTimePassByWithoutSetInterval(0);