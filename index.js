const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cakesRoutes = require('./routes/cakes');

//middleware(s)
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Welcome to happy cakes world');
});

app.use('/api/cakes', cakesRoutes);

app.listen(port, () => console.log(`listening to cakes on port ${port}`));