import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: String,
});

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
