const express = require('express');
const app = express();
const path = require('path');

// EJS'yi şablon motoru olarak ayarla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// CSS, JS ve Resimleri 'public' klasöründen çekmesini söyle
app.use(express.static(path.join(__dirname, 'public')));

// ANA SAYFA (index.ejs'yi açar)
app.get('/', (req, res) => {
    res.render('index'); 
});

// HAKKIMDA SAYFASI (hakkimda.ejs'yi açar)
app.get('/hakkimda', (req, res) => {
    res.render('hakkimda');
});

app.get('/yazilarim', (req, res) => {
    res.render('yazilarim');
});

app.get('/projelerim', (req, res) => {
    res.render('projelerim');
});

app.get('/oyun', (req, res) => {
    res.render('oyun');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde aktif!`);
});