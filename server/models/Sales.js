import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
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

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
