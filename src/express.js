import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
    const id = req.query.id;
    const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}&cc=rs&filters=price_overview`);
    const data = await response.json();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data);
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})