const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const path = require('path');
const dbURL = 'mongodb+srv://dbprac:dbprac@cluster0.eoswt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(dbURL);
const USER = mongoose.model('Users', 
    { 
    fullName: String,
    email: String,
    password: String,
    address: String,
    created: {
        type: String,
        default: Date.now
    }
    }
);
const POST = mongoose.model('Post', 
    { 
    post: String,
    created: {
        type: String,
        default: Date.now
    }
    }
);

app.use(express.json());
app.use('/',express.static(path.join(__dirname, 'web/build')));


app.post('/api/v1/signup', (req, res)=>{
    if(!req.body.email || !req.body.fullName || !req.body.address){
        console.log("Field is missing");
        res.status(403).send("field is missing");
    }
    else{
        USER.findOne({email: req.body.email}, (err, email)=>{
            if(err){
                res.status(500).send("error in getting database");
            }
            else if(email){
                res.status(403).send('email already exist');
            }
            else{
                let newUser = new USER(
                    {
                        fullName: req.body.fullName,
                        email: req.body.email,
                        password: req.body.password,
                        address: req.body.address
                    }
                );
                newUser.save(()=>{
                    console.log('data saved, profile has been created')
                    res.send('profile has been created');   
                })
            }
        })
       
    }
    
    
});

// app.get('/api/v1/delete', (req, res)=>{
//     USER.deleteOne({id: req.body._id},(err, data)=>{
//         if(err){
//             res.send('status 500, error in deleting data base')
//         }
//         else{
//             res.send(data)
//         }
//     })
// });
app.get('/api/v1/dashboard', (req, res) => {

    POST.find({}, (err, data) => {

        if(err){
            res.status(500).send("error in getting database")
        }else{
            res.send(data)
        }

    })
})


app.post('/api/v1/login', (req, res)=>{
    if(!req.body.email || !req.body.password) {
        console.log('email and password is required');
        res.status(403).send("required field is missing");
    }
    else{
        USER.findOne({email: req.body.email}, (err, user)=>{
            if(err){
                res.status(500).send("error in getting database");
            }
            else{
                if(user){
                    if(user.password === req.body.password){
                        res.send(user);
                    }
                    else {
                        res.status(401).send("Authentication Failed");
                    }
                }
                else{
                    res.send("user not found")
                }
            }
        })
    }
});
app.get("/**", (req, res, next) => {
    res.redirect("/")
})
// router.route('/:id').delete((req,res) => {
//     Exercise.findByIdAndDelete(req.params.id)
//         .then(exercise => res.json('Exercise deleted'))
//         .catch(err => res.status(400).json('Error: '+err));
// });

// app.post('/api/v1/createpost', (req, res)=>{
//     if(!req.body.post){
//         console.log("Post is missing");
//         res.status(403).send("Post is missing");
//     }
//     else{
//         let newPost = new POST(
//             {
//                 post: req.body.post
//             }
//         );
//         newPost.save(()=>{
//             console.log('Post has been created')
//             res.send('Post has been created');   
//         })       
//     }    
// });
app.post('/api/v1/createpost', (req, res) => {

    console.log(req.body)

    let newPost = new POST({
        post: req.body.post
    })
    newPost.save(() => {
        console.log("data saved")
        res.send('Post created')
    })

})

app.listen(PORT, ()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
}); 