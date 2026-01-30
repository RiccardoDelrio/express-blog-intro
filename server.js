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
        titolo: 'Ciambellone',
        contenuto: 'Contenuto del post 1',
        img: '/img/ciambellone.jpeg',
        tags: ['dolce', 'torta', 'dessert']
    },
    {
        titolo: 'cracker barbabietola',
        contenuto: 'Contenuto del post 1',
        img: '/img/cracker_barbabietola.jpeg',
        tags: ['cracker', 'barbabietola', 'snack']
    },
    {
        titolo: 'Pane fritto dolce',
        contenuto: 'Contenuto del post 1',
        img: '/img/pane_fritto_dolce.jpeg',
        tags: ['dolce', 'pane', 'fritto']
    },
    {
        titolo: 'pasta  barbabietola',
        contenuto: 'Contenuto del post 1',
        img: '/img/pasta_barbabietola.jpeg',
        tags: ['pasta', 'barbabietola', 'primo']
    }, {
        titolo: 'Torta paesana',
        contenuto: 'Contenuto del post 1',
        img: '/img/torta_paesana.jpeg',
        tags: ['dolce', 'torta', 'dessert']
    }
]

app.get('/bacheca', (req, res) => {
    res.json(postList);
});

