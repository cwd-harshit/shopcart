import Product from "../../../../models/productModel";

export default async function handler(req, res) {
  const id = await req.query.pid;
  const product = await Product.findById(id);
  if (!product) {
    res.status(400).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
}
