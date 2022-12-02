let express = require ("express")
const { url } = require("inspector")
let path = require ("path")
var bodyParser=require("body-parser");

let app = express();

app.use(express.static (path.join(__dirname, 'public')))

app.get("/", (req,res)=>{
	res.sendFile(path.join(__dirname,"public/index.html"));
})

app.get("/orderonline", (req,res)=>{
	res.sendFile(path.join(__dirname,"public/orderonline.html"));
})
app.get("/dining", (req,res)=>{
	res.sendFile(path.join(__dirname,"public/dining.html"));
})


app.get('/signup',function(req,res){
  // res.set({
  // 	'Access-control-Allow-Origin': '*'
  // 	});
  
   res.sendFile(path.join(__dirname,"public/sign-up.html"));
  })

app.get("*", (req,res)=>{
  res.send("<h1> 404 Error Page</h1>")
})





const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SriramVarma:15891589@cluster0.tstqql7.mongodb.net/test');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})



app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"password":pass,
		"phone":phone
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	res.sendFile(path.join(__dirname,"public/signup_success.html"));
})





app.listen("3000", ()=>{console.log('connected...')
// console.log(path.join(__dirname, "public"))
console.log(url);
})
