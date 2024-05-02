import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeer.js"
import customerRoutes from "./routes/customers.js"
import productRoutes from "./routes/products.js"
import authRoutes from "./routes/auth.js"

const app = express();
const port = 8800;

app.use(express.json());
app.use(cors());

app.use("/employeer", employeeRoutes)
app.use("/customer", customerRoutes)
app.use("/product", productRoutes)
app.use("/auth", authRoutes)
app.get("/", (req, res) => {
  res.send("Fabrika Otomasyonu Api")
})

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
