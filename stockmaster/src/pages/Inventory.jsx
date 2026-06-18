function Inventory() {
  const products = [
    { id: 1, name: "Laptop", qty: 25, price: 50000 },
    { id: 2, name: "Mouse", qty: 100, price: 500 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Inventory</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.qty}</td>
              <td>₹{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;