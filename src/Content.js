import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <>
        {items.length ? (
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
        )}
    </>
  )
}

export default Content

/* https://www.youtube.com/watch?v=RVFAyFWO4go 3:44*/