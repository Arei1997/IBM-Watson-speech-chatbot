import { config } from "@/helpers/config";

const validateProduct = (req, res) => {
  const { product_name } = req.body;
  if (
    config.products.findIndex(
      (x) => x.name.toLowerCase() === product_name.toLowerCase()
    ) > -1
  ) {
    return res.status(200).json({
      success: true,
      message: `Product is available to order`,
    });
  } else {
    return res.status(404).json({
      success: false,
      message: `Not found`,
    });
  }
};

export default validateProduct;
