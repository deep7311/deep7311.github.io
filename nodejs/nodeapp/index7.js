import express from "express";

const app = express();

let products = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.json(products);
});


app.post("/", (req, res) => {
  try {
    const { name } = req.body;
    const exists = products.find((product) => product.name === name);

    if (exists)
      return res.status(400).json({ message: "Product already exists" });

    let product = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
    };

    products.push(product);
    res.status(201).send("Product Created");
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
});


app.put("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { name, price } = req.body;

    const product = products.find((product) => product.id === id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (name) product.name = name;
    if (price) product.price = price;

    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
});


app.delete("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = products.find((product) => product.id === id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    products = products.filter((product) => product.id !== id);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
});

app.listen(8080, () => {
  console.log("Server started");
});
