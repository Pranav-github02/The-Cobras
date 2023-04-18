import React from 'react';
import { useState } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Preloader from '../../preloader/Preloader';
import "./style1.css"

const Postpage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [columns, setColumns] = useState(location.state.col);
  const [size, setSize] = useState([null])
  const [selectedColumn, setSelectedColumn] = useState([]);
  const [inputValue, setInputValue] = useState([])
  const conn = location.state.ConnInfo
  const table = location.state.table
  const [isLoading, setIsLoading] = useState(false);

  function goBack() {
    navigate(-1);
  }

  const handleOptionChange = (e) => {
    const index = parseInt(e.target.name);
    const value = e.target.value;
    const updatedInputs = [...inputValue];
    updatedInputs[index] = value;
    setInputValue(updatedInputs);
  };

  const handleColumnChange = (e, index) => {
    const selectedOption = e.target.value;
    const updatedSelectedOptions = [...selectedColumn];
    updatedSelectedOptions[index] = selectedOption;
    setSelectedColumn(updatedSelectedOptions);
  }

  

  const handleAddOption = () => {
    const newOptions = [...size, `Option ${size.length + 1}`];
    setSize(newOptions);
    const newInputs = [...inputValue, ''];
    setInputValue(newInputs);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...size];
    newOptions.splice(index, 1);
    setSize(newOptions);
    const newInputs = [...inputValue];
    newInputs.splice(index, 1);
    setInputValue(newInputs);
    const newColumns = [...selectedColumn];
    newColumns.splice(index, 1);
    setSelectedColumn(newColumns);
  };


  const fetchData = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      username: conn.username,
      account: conn.account,
      warehouse: conn.warehouse,
      database: conn.database,
      role: conn.role,
      schema: conn.schema,
      password: conn.password,
      table: table,
      columns: selectedColumn,
      value: inputValue
    }
    axios.post("http://127.0.0.1:8000/api/post/", data)
      .then((response) => {
        setIsLoading(false)
        toast.success('Row inserted successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error('Row insertion failed', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      })
  }

  return (
    <>
      {isLoading ? <Preloader /> : (
        <div className='queryspage'>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
          />
          <div className="container">
            <div className='content'>
              <div className='inner'>
                <div className='back' onClick={goBack}>
                  <i className="fa-solid fa-chevron-left"></i>
                  Back
                </div>
                <h1 className='query-title'>INSERT</h1>
                <p className='table-name'>TABLE: {table}</p>
                <p className='subtitle'>Select the column and enter the value to be inserted</p>
                <form>
                  <div className='values'>
                    <div>
                      {size.map((option, index) => (
                        <div className='fields' key={index}>
                          <select className='dropdown' onChange={(e) => e.target.value === "select" ? window.alert("Please choose a column") : handleColumnChange(e, index)}>
                            <option value="select" name={index}>SELECT COLUMN</option>
                            {/* {columns.map((column) => <option value={column}>{column}</option>)} */}
                            {columns.filter((column) => column !== 'ID').map((column) => <option value={column}>{column}</option>)}
                          </select>
                          <input
                            type="text"
                            name={index}
                            value={inputValue[index] || ''}
                            onChange={handleOptionChange}
                            placeholder='value'
                          />
                          <i className="fa-solid fa-xmark" onClick={() => handleRemoveOption(index)}></i>
                        </div>
                      ))}
                      <p onClick={handleAddOption}>Want to add more?</p>
                    </div>

                  </div>
                  <div className="button-container">
                    <button className="button" onClick={(e) => fetchData(e)}>INSERT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Postpage;