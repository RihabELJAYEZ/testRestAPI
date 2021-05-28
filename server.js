

const express=require('express')
const app=express()

let mongoose=require('mongoose')
require('dotenv').config({path:'./Config/.env'})
// install and setting mongoose
const databaseConnect=()=>{
mongoose.connect(process.env.DB_URI,{ useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify:false},(err)=>{
        
        err ? console.log(err) : console.log('database connected')
    })
}

// route

const router=express.Router()

const user=require('./models/User')

//parse the data
app.use(express.json())

// RETURN ALL USERS 
router.get('/',(req,res)=>{
    user.find({},(err,data)=>{
        err ? console.log(err) : res.json(data)
    })
})






//ADD A NEW USER TO THE DATABASE 

router.post('/newUser', (req,res)=>{
    let newUser=new user(req.body)
    newUser.save((err,data)=>{
        err ? console.log(err) : res.send(data)
    })

})

//EDIT A USER BY ID 
router.get('/NoJob/:id', (req, res) => {
    user.findById( {_id:req.params.id}, (err, data) => {
        data.Job.push("NoJob");
        data.save(err ? console.log(err) : res.json({ data })
        );
    })
    })

// DELETE : REMOVE A USER BY ID
router.delete('/:id',(req,res)=>{
    user.findByIdAndRemove({_id:req.params.id},(err,data)=>{
        err ? console.log(err) : res.json(data)
    })
})

// port
const port =5000

app.listen(port,(err)=>{
    err?console.log(err):console.log('the port is runing en 5000')})

module.exports=databaseConnect