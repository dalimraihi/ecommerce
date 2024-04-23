const {
  verifyToken,
  verifyTokenAndAuthorisation,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const Cart = require("../models/Cart");
const router = require("express").Router();

// CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// UPDATE;
router.put("/:id", verifyTokenAndAuthorisation, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }, // This option ensures that the updated document is returned
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

delete router.delete("/:id", verifyTokenAndAuthorisation, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
// USER GET Cart

router.get("/find/:userid", verifyTokenAndAuthorisation, async (req, res) => {
  try {
    const Cart = await Cart.find({ userID: req.params.user });

    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Carts = await Cart.find();
    res.status(200).json(Carts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
