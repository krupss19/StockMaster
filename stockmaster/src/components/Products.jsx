import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Steel Rod",
      sku: "SR001",
      category: "Raw Material",
      stock: 100,
    },
    {
      id: 2,
      name: "Steel Chair",
      sku: "SC001",
      category: "Furniture",
      stock: 8,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    stock: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = () => {
    if (
      !formData.name ||
      !formData.sku ||
      !formData.category ||
      !formData.stock
    ) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...formData,
      stock: Number(formData.stock),
    };

    setProducts([...products, newProduct]);

    setFormData({
      name: "",
      sku: "",
      category: "",
      stock: "",
    });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">
      <div className="hero">
        <h1>📦 Products Management</h1>
        <p>Manage your inventory, categories and stock levels.</p>
      </div>

      <div className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="sku"
          placeholder="SKU Code"
          value={formData.sku}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />

        <button onClick={addProduct}>
          ➕ Add Product
        </button>
      </div>

      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="recent">
        <h2>Inventory List</h2>

        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>

                <td>
                  {product.stock > 10 ? (
                    <span className="badge success">
                      In Stock
                    </span>
                  ) : (
                    <span className="badge warning">
                      Low Stock
                    </span>
                  )}
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;