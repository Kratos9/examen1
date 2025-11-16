const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ mensaje: "API funcionando", db: process.env.DB_HOST });
});

app.get('/salud', (req, res) => {
    res.json({ status: "ok" });
});

app.listen(port, () => {
    console.log(`API corriendo en puerto ${port}`);
});
