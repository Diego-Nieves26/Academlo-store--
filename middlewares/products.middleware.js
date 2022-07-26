// Models
const { Product } = require("../models/product.model");
const { ProductImg } = require("../models/productImg.model");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const productExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findOne({
    where: { id, status: "active" },
    include: { model: ProductImg },
  });

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  req.product = product;
  next();
});

const userProduct = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const { product } = req;

  if (sessionUser.id !== product.userId) {
    return next(new AppError("This is not your product", 404));
  }

  next();
});

module.exports = { productExist, userProduct };
