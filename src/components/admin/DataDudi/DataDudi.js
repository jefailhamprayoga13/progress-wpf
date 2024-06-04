import React from 'react';
import { useState, useEffect , useRef} from "react";
import Image from 'next/image';
import Modal from './Modal';


const DataDudi = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const dataPerPage = 5;

  useEffect(() => {
    // Menggunakan useEffect untuk menghindari masalah hidrasi dengan data statis
    const fetchData = () => {
      const dummyData = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        username: `Username ${i + 1}`,
        name : `Name ${i + 1}`,
        phone: Math.floor(Math.random() * 100),
        email : `Email${i + 1}@gmail.com`,
      }));
      setData(dummyData);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / dataPerPage);

  const currentData = data.slice(
    (currentPage - 1) * dataPerPage,
    currentPage * dataPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSave = (item) => {
    if (item.id) {
      setData(data.map((d) => (d.id === item.id ? item : d)));
    } else {
      item.id = data.length + 1;
      setData([...data, item]);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className="mt-8">
      <div className="container mx-auto mt-5">
        <button
          className="btn btn-primary mb-4"
          onClick={() => {
            setCurrentItem(null);
            setModalVisible(true);
          }}
        >
          Tambah Data
        </button>
        <table className="table w-full flex justify-center items-center">
          <thead className=''>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Phone</th>
              <th>email</th>

            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={() => {
                      setCurrentItem(item);
                      setModalVisible(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button
            className="btn btn-primary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-primary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <Modal
          show={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSave}
          item={currentItem}
        />
      </div>
    </div>
  )
}

export default DataDudi