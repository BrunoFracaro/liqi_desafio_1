import { Router } from "express";
import exchangeApi from "./utils/exchangeApi.js";
import conversionRate from "./utils/conversionRate.js";

const routes = Router();

routes.post("/convert", async (req, res) => {
  const { value, from, to } = req.body;

  if (!value || !from || !to) {
    res.statusCode = 400
    res.send({ Error: "Body is missing" })
    return
  }

  const currentRates = await exchangeApi()

  const fromRate = currentRates.conversion_rates[from]
  const toRate = currentRates.conversion_rates[to]

  if (!fromRate || !toRate) {
    res.statusCode = 400
    res.send({ Error: "Currency does not exist" })
    return
  }

  const finalValue = conversionRate(value, fromRate, toRate)

  res.statusCode = 200
  res.send({ value: finalValue })
  res.end()
});

export default routes;