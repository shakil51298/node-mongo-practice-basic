const express = require('express'); // express install
const cors = require('cors'); // middle weare
const bodyParser = require('body-parser'); // for post value undefined
const app = express(); 

app.use(cors());
app.use(bodyParser.json());
const port = 8000;


const members = ["azad", "rahim", "karim", "abu saleh" , "arman", "sajib", "kolmilota", "azad Hasan"];
const Occupation = ["doctor" , "businssman", "teacher", "Footballer" , "madrasha teacher", "golf player"]
app.get('/:id', (req, res)=>{

    const uId = req.params.id;
    const userName = members[uId];
    const Ocupation = Occupation[uId];
    res.send({userName, uId, Ocupation});

})
app.post('/addUser' , (req, res) =>{
    // SAVE TO DATA BASE
    const user = req.body;
    user.id = 55;
    res.send(user)
    console.log(res.user);
    console.log(user);
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})