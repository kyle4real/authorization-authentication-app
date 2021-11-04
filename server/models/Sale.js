import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema({
    name: String,
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: "Customer",
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
    },
});

const Sale = mongoose.model("Sale", SaleSchema);
export default Sale;
