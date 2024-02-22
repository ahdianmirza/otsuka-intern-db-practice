const express = require('express');
const cors = require('cors');
const query = require('./query');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Define routes
app.get('/count-by-special-features', async (req, res) => {
  let data = await query.getCountBySpecialFeatures();
  res.status(200).json(data);
});

app.get('/count-by-rating', async (req, res) => {
    let data = await query.getCountByRating();
    res.status(200).json(data);
});

//silakan tambahkan route lainnya untuk membuat api end-point baru dengan query yang baru juga
app.get("/top-ten-customer-rental", async (req, res) => {
  let data = await query.getTopTenCustomerRental();
  res.status(200).json(data);
});

app.get("/count-by-category", async (req, res) => {
  let data = await query.getCountByCategory();
  res.status(200).json(data);
});

app.get("/count-by-actor", async (req, res) => {
  let data = await query.getMovieCountByActor();
  res.status(200).json(data);
});

app.get("/customer-by-amount", async (req, res) => {
  let data = await query.getCustomerByAmount();
  res.status(200).json(data);
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});