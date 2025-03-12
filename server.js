const express = require('express');
const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`Il server è in funzione: http://localhost:${port}`);
})
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});
app.use(express.static('public'));// Risorse esterne


const postList = [
    {
        titolo: 'Post 1',
        contenuto: 'Contenuto del post 1',
        img: '',
        tags: ['tag 1', 'tag 2', 'tag 3']
    }
]
