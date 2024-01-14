const express=require('express');
const { createTodo, updateTodo } = require('./types');
const Todo=require('./db')
const app=new express();
const router=express.Router();

// let i=0;
// const heavyTask=()=>{
//     return new Promise(resolve=>{
//         for(let i=0;i<100000000000000000000000000000;i++){}
//         resolve('Heavy task completed');
//     })
// }

// router.route('/')
//     .get(async(req,res)=>{
//         i++;
//         console.log(Date.now() +" - Recieved Request # " + " :::::: "+i);
//         const task=await heavyTask();
//         res.status(200).json({
//             msg:'Hello',
//             task
//         })
// })
const heavyTask = () => {
    return new Promise(resolve => {
        // Simulate a heavy asynchronous task
        for (let i = 0; i < 1000000000000000000000; i++) {
            // Heavy computation
        }
        resolve('Heavy task completed');
    });
};
let requestCount = 0;
router.route('/')
    .get((req, res) => {
        // Increment the request count
        requestCount++;
        console.log(Date.now() + " - Request received" + " :::::: " + requestCount);
        res.status(202).json({ msg: 'Request accepted, processing task in background' }); // Immediate response
        heavyTask()
        .then(taskResult => {
            console.log(taskResult)
            res.status(200).json({
            msg: 'Performed heavy task',
            task: taskResult
            }); // Final response with task result
        })
        .catch(error => {
            // ...
        });
    });


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
