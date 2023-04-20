import Product from "../../../../models/productModel";
import initDB from "../../../../helpers/initDB";

export default async function handler(req, res) {
  req.body.user = "62a57a65c068233fe4d960de";
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
}
