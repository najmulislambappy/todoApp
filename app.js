const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const keys = require('./keys');

mongoose.connect(keys.mongoURI, () => {
    console.log('connected to mongodb');
});

app.listen(5000, () => console.log(`Example app listening on port 5000!`))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
//app.use(express.static('public'));

app.post('/save', (req, res)=>{
    new Todo({
        task: req.body.task
    }).save();
    //console.log(req.body)
    res.redirect('/');
})

app.post('/delete', (req, res)=>{
    Todo.findOneAndDelete({task: req.body.task})
    .then(test=>{
        console.log('deleted : '+req.body.task)
        res.redirect('/');
    });

})

app.get('/', (req, res) =>{
    Todo.find()
    .then(todos=>{
        const task = todos.map(todo=>{
            return todo.task
        })
        console.log(task);
        res.render('index', {tasks: task});
        //console.log(todos);
    })
})