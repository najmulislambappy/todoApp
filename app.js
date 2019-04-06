const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.listen(5000, () => console.log(`Example app listening on port 5000!`))

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', function(req, res){

});
app.get('/ajuhdkajusdhkauis', function(request, response, next){
    console.log(request.body);
    response.send('akjshdasdlkjashdkjahjdlasd').end();

});

app.post('/upload', (req, res)=>{
    console.log(req.body.Name);
    res.send('Post success');
});