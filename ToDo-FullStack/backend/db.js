const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todo=mongoose.model('todo',todoSchema);

mongoose.connect('mongodb://localhost:27017/100xDev').then(()=>{
    console.log('Connected to DB')
})

module.exports=Todo;
