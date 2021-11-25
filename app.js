const express = require('express');
const app = express();
const port = 3000;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('./models');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get("/", async (req, res, next) => {
  try {
    const dataItem =  await sequelize.query(
      `select * from "data" d
      where date_part('hour', d.time)
      between 7 and 8
      order by d.longitude`,
      {
        type: QueryTypes.SELECT
      }
    )

    res.status(200).json(dataItem)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.listen(port, () => {
  console.log("listening port " + port)
})