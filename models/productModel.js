import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
    maxLenght: [30, "Price cannot exceed 30 characters"],
  },

  longDesc: {
    type: String,
  },

  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLenght: [8, "Price cannot exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLenght: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  color: {
    type: String,
  },
  size: {
    type: Number,
  },
  variations: [
    {
      color: {
        type: String,
      },
      size: {
        type: Number,
      },
      price: {
        type: Number,
        maxLenght: [8, "Price cannot exceed 8 characters"],
      },
      ratings: {
        type: Number,
        default: 0,
      },
      images: [
        {
          public_id: {
            type: String,
          },
          url: {
            type: String,
          },
        },
      ],

      stock: {
        type: Number,
        maxLenght: [4, "Stock cannot exceed 4 characters"],
        default: 1,
      },
      numOfReviews: {
        type: Number,
        default: 0,
      },
      reviews: [
        {
          name: {
            type: String,
          },
          rating: {
            type: Number,
          },
          comment: {
            type: String,
          },
        },
      ],
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.product ||
  mongoose.model("product", productSchema);
