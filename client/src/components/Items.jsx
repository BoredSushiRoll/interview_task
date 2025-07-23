import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { getToken } from '../auth';






function Items() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');


  useEffect(() => {
  const fetchItems = async () => {
    try {
      const res = await axios.get('/items', {
  headers: {
    Authorization: `Bearer ${getToken()}`

  },
  withCredentials: true,
});


      setItems(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  fetchItems();
}, []);


  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;

    try {
  const res = await axios.post(
  '/items',
  { name: itemName },
  {
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    withCredentials: true,
  }
);



  setItems([res.data, ...items]);
  setItemName('');
} catch (err) {
  console.error('Create error:', err);
}

  }


  return (
    <div>
      <h2>Items</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
