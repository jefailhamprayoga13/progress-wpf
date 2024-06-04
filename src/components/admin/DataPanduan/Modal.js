// components/Modal.js
import { useState, useEffect } from 'react';

const Modal = ({ show, onClose, onSave, item }) => {
  const [formData, setFormData] = useState({ id: '', video: '', document: '', type: ''});

  useEffect(() => {
    if (item) {
      setFormData(item);
    } else {
      setFormData({ id: '', video: '', document: '', type: ''});
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-2 sm:mx-4 md:mx-6 lg:mx-auto max-h-3/4 overflow-auto">
        <div className="p-5">
          <h2 className="text-lg font-bold mb-4">{item ? 'Edit' : 'Create'} Panduan</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Video</label>
              <input
                type="file"
                name="video"
                value={formData.video}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Document</label>
              <input
                type="file"
                name="document"
                value={formData.document}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Tipe</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                className="btn btn-secondary mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
