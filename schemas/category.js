const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    description: { type: String, default: "" },
    isDeleted: { type: Boolean, default: false }, // Thêm cờ xóa mềm
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
