import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { getToken } from '../auth';

function Items() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const token = getToken();
      if (!token) return;
      try {
        const res = await axios.get('/items', {
          headers: {
            Authorization: `Bearer ${token}`
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
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/items/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
        withCredentials: true
      });
      setItems(items.filter(item => item._id !== id));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEdit = async (id, currentName) => {
    const newName = prompt('Enter new name:', currentName);
    if (!newName || !newName.trim()) return;

    try {
      const res = await axios.put(`/items/${id}`, { name: newName }, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
        withCredentials: true
      });
      setItems(items.map(item => item._id === id ? res.data : item));
    } catch (err) {
      console.error('Edit error:', err);
    }
  };

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
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            <button onClick={() => handleEdit(item._id, item.name)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
