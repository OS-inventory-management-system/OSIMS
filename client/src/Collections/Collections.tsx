import React, { useState } from 'react';
import './Collections.css';

type Item = {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  quantity: number;
};

type CollectionsProps = {
  collectionName: string;
  initialItems: Item[];
};

const Collections: React.FC<CollectionsProps> = ({
  collectionName,
  initialItems,
}) => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState<Partial<Item>>({
    name: '',
    description: '',
    imageUrl: '',
    quantity: 1,
  });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name) return;

    const itemToAdd: Item = {
      id: Date.now().toString(),
      name: newItem.name!,
      description: newItem.description,
      imageUrl: newItem.imageUrl,
      quantity: newItem.quantity || 1,
    };
    setItems([itemToAdd, ...items]);
    setNewItem({ name: '', description: '', imageUrl: '', quantity: 1 });
    setShowForm(false);
  };

  return (
    <div className='collections-container'>
      <div className='collections-header'>
        <h1 className='collections-title'>{collectionName} Inventory</h1>
        <button className='add-btn' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Item'}
        </button>
      </div>
      {showForm && (
        <form className='add-item-form' onSubmit={handleAddItem}>
          <input
            type='text'
            placeholder='Item name'
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
          <input
            type='number'
            placeholder='Quantity'
            min={1}
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: Number(e.target.value) })
            }
            required
          />
          <input
            type='text'
            placeholder='Image URL (optional)'
            value={newItem.imageUrl}
            onChange={(e) =>
              setNewItem({ ...newItem, imageUrl: e.target.value })
            }
          />
          <input
            type='text'
            placeholder='Description (optional)'
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          />
          <button type='submit' className='add-btn submit-btn'>
            Add
          </button>
        </form>
      )}
      <div className='inventory-list'>
        {items.length === 0 ? (
          <div className='empty-state'>
            <p>No items found in this collection.</p>
          </div>
        ) : (
          items.map((item) => (
            <div className='inventory-card' key={item.id}>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className='inventory-img'
                />
              )}
              <div className='inventory-details'>
                <h2>{item.name}</h2>
                <p className='desc'>
                  {item.description || 'No description available.'}
                </p>
                <span className='quantity'>
                  Quantity: <strong>{item.quantity}</strong>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Collections;
