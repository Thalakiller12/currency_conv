//comments
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const authorized = require('./routes/authorized');
const unauthorized = require('./routes/unauthorized');
const port = process.env.PORT||3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({urlencoded:false}));
app.use(express.static(path.join(path.dirname(process.mainModule.filename),"/public/")));
app.use('/authorized',authorized);
app.use('/',unauthorized);

app.use((req,res,next)=>{
    res.status(404).send('<h2>Page not found</h2>');
  }
)
app.listen(port,(err)=>{
    console.log('App listening on port : '+port);
});