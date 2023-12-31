const express=require('express');
const { createTodo, updateTodo } = require('./types');
const Todo=require('./db')
const app=new express();
const router=express.Router();

router.route('/todo')
    .get()
    
    .post(async(req,res)=>{
        try {
            const createPayload=req.body;
            console.log(createPayload)
            const parsedPayload=createTodo.safeParse(createPayload);
            if(!parsedPayload.success){
                return res.status(411).json({
                    msg:"You sent the wrong inputs"
                })
            }
            let result=await Todo.create({
                title:createPayload.title,
                description:createPayload.description,
                completed:false
            })
            res.status(201).json({
                msg:"To do created",
                todo:result
            })
        } catch (error) {
            // console.log(error)
            res.status(500).json(error)
        }
    })

router.route('/todo/:id')
    .get()
    .patch()
    .delete()

router.route('/completed',async(req,res)=>{
    try {
        const statusPayload=req.body;
        const parsedPayload=updateTodo.safeParse(statusPayload);
        if(!parsedPayload.success){
            res.status(411).json({
                msg:"You sent the wrong inputs"
            })
        }
    } catch (error) {
        
    }
})


// Middlewares
app.use(express.json())
app.use('/v1',router)

app.listen(3000,()=>{
    console.log('Server is listning on port 3000')
})