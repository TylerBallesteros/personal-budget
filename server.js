//Budget API

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const pbschemaModel = require("./models/pb_schema");

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/mongodb_pb';

app.use(cors());

app.use('/', express.static('public'));
app.use(express.json());

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            pbschemaModel.find({})
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error)
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.post('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            var pbItems = new pbschemaModel({
                title: req.body.title,
                budget: req.body.budget,
                color: req.body.color,
            });

            pbschemaModel.insertMany(pbItems)
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});