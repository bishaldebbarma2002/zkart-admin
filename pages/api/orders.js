import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  try {
    await mongooseConnect();

    if (req.method === "GET") {
      const orders = await Order.find().sort({ createdAt: -1 });
      res.json(
        orders.map((order) => ({ ...order.toObject(), status: order.status }))
      );
    } else if (req.method === "PUT") {
      const { orders } = req.body;

      // Update the status of each order
      for (const order of orders) {
        const { _id, status } = order;
        await Order.findByIdAndUpdate(_id, { status });
      }

      res.status(200).json({ message: "Status updated successfully." });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
