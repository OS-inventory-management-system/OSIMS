import React from 'react';
import Collections from './Collections';

const collectionsData = [
  {
    collectionName: 'Gadgets',
    initialItems: [
      {
        id: '1',
        name: 'Sample Widget',
        description: 'A handy widget for demonstration purposes.',
        imageUrl: 'https://placehold.co/300x150',
        quantity: 12,
      },
    ],
  },
  {
    collectionName: 'Books',
    initialItems: [
      {
        id: '2',
        name: 'Typescript Handbook',
        quantity: 2,
      },
    ],
  },
];

export default function CollectionsBoard() {
  return (
    <div>
      {collectionsData.map((col) => (
        <Collections
          key={col.collectionName}
          collectionName={col.collectionName}
          initialItems={col.initialItems}
        />
      ))}
    </div>
  );
}
