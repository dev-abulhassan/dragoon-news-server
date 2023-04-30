const experss = require('express');
const app = experss()
const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
   res.send('DragonMagazine Server running')
});

app.listen(port, ()=>{
   console.log(`listening on portt: ${port}`);
})