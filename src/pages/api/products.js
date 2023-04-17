// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../../helpers/initDB";
import Product from "../../../models/productModel";

// initDB();

export default async function handler(req, res) {
  const products = await Product.find();
  if (!products) {
    res.status(400).json({
      success: false,
      meaasge: "Error: Product not found",
    });
  }
  res.status(200).json({
    success: true,
    products,
  });
}
