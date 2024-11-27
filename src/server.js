import express from "express";
import cors from "cors";
import env from "dotenv";
import path from "path";
import testRoute from "./routes/testRoute";
import authRoute from "./routes/authRoute";
import categoryRoute from "./routes/categoryRoute";
import productRoute from "./routes/productRoute";

// configuration
const app = express();
env.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(
  express.json({
    limit: "100mb",
  })
);

app.use(
  express.urlencoded({
    extended: "true",
  })
);

// route static untuk profile dan product
app.use(
  "/profile",
  express.static(path.join(__dirname, "../public/imageProfile"))
);
// route static untuk product
app.use("/public", express.static(path.join(__dirname, "../public/imageProduct"))); // Folder untuk menyimpan gambar

// routes
app.use(testRoute);
app.use(authRoute);
app.use(productRoute);
app.use(categoryRoute);

app.listen(PORT, () => {
  console.log(`
    ===========================
    
    Server running on port ${PORT}
    
    ===========================
    `);
});
