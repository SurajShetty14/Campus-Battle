const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

const Upload = require("./models/profReg");
const Profile = require("./models/event");

require("./db/conn");
const Register = require("./models/registers");
const bcrypt = require("bcryptjs/dist/bcrypt");

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/",(req, res) => {
    res.render("index");
});

app.post("/index",async (req, res) => {
    try {
        const registerSports = new Register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })



        const registered = await registerSports.save();
        res.status(201).render("index");

    } catch (error) {
        res.send(400).send(error);
    }
});

//login check

app.post("/login",async (req, res) => {
    try {
        
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});

        const isMatch = await bcrypt.compare(password, useremail.password);
        
        if(isMatch){
            res.status(201).render("dashbord");
        }else{
            //res.send("Invalid Login Details");
            res.send('<script>alert("Invalid Login Details"); window.location.href="/login";</script>');
        }

    } catch (error) {
        //res.status(400).send("Invalid Login Details");
        res.send('<script>alert("Invalid Login Details"); window.location.href="/login";</script>');
    }
})

//profile

const {profilePath} = require("../templates/paths")
app.get("/profile",(req,res)=>{
    res.sendFile(profilePath);
});

//card

const{regcard} = require("../templates/paths")
app.get("/card",(req,res)=>{
    res.sendFile(regcard);
});

const{homePath} = require("../templates/paths")
app.get("/home",(req,res)=>{
    res.sendFile(homePath);
});

const{contactPath} = require("../templates/paths")
app.get("/contact",(req,res)=>{
    res.sendFile(contactPath);
});


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})
 
app.post("/saveProfile", async (req, res) => {
  try {
    const profile = new Upload({
      name: req.body.name,
      usn: req.body.usn,
      email: req.body.email,
      phone: req.body.phone,
      branch: req.body.branch
    });
    await profile.save();
    res.status(201).render("dashbord");
  } catch (error) {
    res.status(400).send(error.message);
  }
});


//register conn

const bodyParser = require("body-parser");

// Create a mongoose model for person profiles

  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));

app.post("/saveProfile", async (req, res) => {
    try {
      const profile = new Profile({
        name: req.body.name,
        usn: req.body.usn,
        email: req.body.email,
        phone: req.body.phone,
        branch: req.body.branch,
        eventName: req.body.eventName // Assuming you send the event name from the front-end
      });
  
      // Save the profile to MongoDB
      await profile.save();
      res.status(201).render("dashboard");
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  