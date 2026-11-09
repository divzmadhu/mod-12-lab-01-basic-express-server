import express from 'express';

const app = express();

const port = 3000;

app.use(express.static('public'))

app.get('/', ( req, res)=>{
    res.sendFile('index.html',{root:'./public'})

});

app.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: './public' });
});


app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`);

});


