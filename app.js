const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');   

main().then(()=> {
    console.log('connected to mongodb');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
})

async function main() {
    await mongoose.connect('mongodb://localhost:27017/travel',
}


app.get('/', (req, res )=> {
    res.send('Hello World');
});

app.get("/listings", async (res, req) => {
   const allListings = await Listing.find({});
    res.render("index.ejs", {allListings});
});







app.listen(8080, () => {
    console.log ('connected to port 8080');
});