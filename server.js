require('dotenv').config();
const express = require("express")
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const app = express();
const port = 3010;

// CONNECT WITH MONGOOSE LOG
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// PROMPS A CONNECTION NOTIFICATION IN TERMINAL
mongoose.connection.once('open',()=>{
    console.log('connected to mongodb')



  })

 // SETTING UP VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// LISTENER
app.listen(port, (req, res) => {
    console.log(`listening on port ${port}.`);
});

app.get("/" , (req,res) => {
    res.send(`<h1>Welcome to the captins log</h1>`)
})


//MiddleWare
app.use((req,res,next)=> {
    console.log('I run for all routes!')
    next();
})

//this allows the body 
app.use(express.urlencoded({extended:false}))
//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride('_method'));


app.get('/logs', async function(req,res){
    const foundLogs = await log.find({})
    res.render('Index',{
        logs: foundLogs
    })
} )