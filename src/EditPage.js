// EditPage.js
import React from 'react';
import EditModal from './EditModal';

function EditPage({ data, editingIndex, setEditingIndex, onSave }) {
  const editedName = data[editingIndex]?.name || '';

  const handleSave = (editedName) => {
    onSave(editedName);
    setEditingIndex(null);
  };

  return (
    <div className="edit-page">
      <h2>Edit Data</h2>
      <EditModal initialValue={editedName} onSave={handleSave} onClose={() => setEditingIndex(null)} />
    </div>
  );
}

export default EditPage;
