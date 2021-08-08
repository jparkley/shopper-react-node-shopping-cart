require("dotenv").config()
const express = require("express")
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_API_SECRET)
const validateCartItems = require("use-shopping-cart/utilities").validateCartItems
const products = require("./products.json")

module.exports = function getRoutes() {
  const router = express.Router()
  router.get("/products", getProducts)
  router.get("/products/:productId", getProduct)
  router.post("/checkout-sessions", createCheckoutSession)
  router.get("/checkout-sessions/:sessionId", getCheckoutSession)
  return router
}

function getProducts(req, res) {
  return res.status(200).json({ products })
}

function getProduct(req, res) {
  const { productId } = req.params
  const product = products.find(product => product.id === productId)

  try {
    if (!product) {
      throw Error(`No product found for this id: ${productId}`)
    }
    return res.status(200).json({ product })
  } catch (e) {
    return res.status(404).json({ statusCode: 404, message: error.message })
  }
}

async function createCheckoutSession(req, res) {
  try {
    const validated_items = validateCartItems(products, req.body)
    //console.log(validated_items);
    const line_items = validated_items.map(item => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.price_data.product_data.name
          },
          unit_amount: item.price_data.unit_amount
        },
        quantity: item.quantity
      }
    })
    //console.log(line_items)
    const origin = process.env.PUBLIC_URL === "production" ? req.headers.origin : "http://localhost:3000"

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: origin
    })
    //console.log(checkoutSession)
    res.status(200).json(checkoutSession)
  } catch (error) {
    console.log(error)
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

async function getCheckoutSession(req, res) {
  const { sessionId } = req.params
  try {
    if (!sessionId.startsWith("cs_")) {
      throw Error("Incorrect session id")
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["payment_intent"] })
    res.status(200).json(checkout_session)
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}
