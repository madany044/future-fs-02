const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE}/api/products`);
  return await response.json();
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${API_BASE}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  return await response.json();
};