const express=require('express');

const app=new express();
const router=express.Router();

router.route('/todo')
    .get()
    /**
     * body{
     *      title:string,
     *      
     *  }
     */
    .post()

router.route('/todo/:id')
    .get()
    .patch()
    .delete()



// Middlewares
app.use(express.json())
app.use('/v1',router)

app.listen(3000,()=>{
    console.log('Server is listning on port 3000')
})