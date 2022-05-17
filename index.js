const express = require('express');

const application = express();

const PORT = 3000;

application.get('/', (req, res) =>{
    res.send('test');
});

application.listen(PORT, (err)=>{
    if(err)console.log(err)
})
