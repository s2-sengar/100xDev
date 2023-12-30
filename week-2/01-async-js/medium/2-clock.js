let clock=()=>{
    let formatter=new Intl.DateTimeFormat('en-us',{
        timeStyle:'medium'
    });
    console.log(formatter.format(new Date()));
    setInterval(()=>{
        console.log(formatter.format(new Date()));
    },1000);
}
clock();