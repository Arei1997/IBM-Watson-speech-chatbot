// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import validateProduct from "./handlers/product.handler";

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Check product availability by it's name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product_name
 *             properties:
 *               product_name:
 *                 type: string
 *             example:
 *               product_name: potato
 *     responses:
 *       "200":
 *         description: Available
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *               example:
 *                   success: false
 *                   message: Product is available to order
 *       "404":
 *         description: Unavailable
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *               example:
 *                   success: false
 *                   message: Not found
 */

function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      return validateProduct(req, res);
    default:
      return res.status(404).json({
        success: false,
        message: `Not found`,
      });
  }
}

export default handler;
