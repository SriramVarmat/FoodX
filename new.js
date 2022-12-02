let express = require ("express")
let path = require("path")
let app = express()

// let myfile = path.join(__dirname, "about.html")

app.get("/", (req,res)=>{
res.sendFile(path.join(__dirname, "Foodx.html")
)
})

app.get("/orderonline", (req,res)=>{
    res.sendFile(path.join(__dirname, "order online.html")
    )
    })

    app.get("/login", (req,res)=>{
        res.sendFile(path.join(__dirname, "login.html")
        )
        })
       
   
app.listen("3004", ()=>{
 
console.log('connected to the server')
console.log(__dirname)
// let file = path.join(__dirname, "school.html")
// console.log(file)
})