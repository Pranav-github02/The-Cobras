import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Preloader from '../../preloader/Preloader';
import "./style1.css"

const DeletePage = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [columns, setColumns] = useState(location.state.col);
  const [whereColumn, setWhereColumn] = useState([])
  const [operator, setOperator] = useState([])
  const [inputValue, setInputValue] = useState([]);
  const [size, setSize] = useState([null])
  const [andOr, setAndOr] = useState([])
  const conn = location.state.ConnInfo
  const table = location.state.table
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionChange = (e) => {
    const index = parseInt(e.target.name);
    const value = e.target.value;
    const updatedInputs = [...inputValue];
    updatedInputs[index] = value;
    setInputValue(updatedInputs);
  };

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
    const newColumns = [...whereColumn];
    newColumns.splice(index, 1);
    setWhereColumn(newColumns);
    const newOperators = [...operator];
    newOperators.splice(index, 1);
    setOperator(newOperators);
  };

  const handleColumnChange = (e, index) => {
    const selectedOption = e.target.value;
    const updatedSelectedOptions = [...whereColumn];
    updatedSelectedOptions[index] = selectedOption;
    setWhereColumn(updatedSelectedOptions);
  }

  const handleOperatorChange = (e, index) => {
    const selectedOperator = e.target.value;
    const updatedSelectedOperator = [...operator];
    updatedSelectedOperator[index] = selectedOperator;
    setOperator(updatedSelectedOperator);
  }

  const handleAndOr = (e, index) => {
    const selectedOption = e.target.value;
    const updatedSelectedOptions = [...andOr];
    updatedSelectedOptions[index] = selectedOption;
    setAndOr(updatedSelectedOptions);
  }

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
      where: {
        column: whereColumn,
        operator: operator,
        value: inputValue,
        condition: andOr
      }
    }
    console.log(data);
    axios.post("http://127.0.0.1:8000/api/del/", data)
      .then((response) => {
        setIsLoading(false)
        toast.success("Row(s) deleted successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error("Row(s) deletion failed! Please retry", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        console.log(error);
      })
  }

  function goBack() {
    navigate(-1);
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
                <h1 className='deletequery-title'>DELETE</h1>
                <p className='table-name'>TABLE: {table}</p>
                <form>
                  <h2>WHERE CONDITION</h2>
                  <div className='whereCondition'>
                    {size.map((option, index) => (
                      <div className='fields' key={index}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <select className='dropdown' onChange={(e) => e.target.value === "select" ? window.alert("Please choose a column") : handleColumnChange(e, index)}>
                            <option value="select">SELECT COLUMN</option>
                            {columns.map((column) => <option value={column}>{column}</option>)}
                          </select>
                          <select className='dropdown' onChange={(e) => e.target.value === "select" ? window.alert("Please choose a operator") : handleOperatorChange(e, index)}>
                            <option value="select">SELECT OPERATOR</option>
                            <option value="=">EQUALS</option>
                            <option value="!=">NOT EQUALS</option>
                            <option value="<">LESS THAN</option>
                            <option value=">">GREATER THAN</option>
                            <option value="<=">LESS THAN EQUALS</option>
                            <option value=">=">GREATER THAN EQUALS</option>
                          </select>
                          <input type='text' className='value-input'
                            placeholder='value'
                            name={index}
                            value={inputValue[index] || ''}
                            onChange={handleOptionChange}
                          />
                          <i className="fa-solid fa-xmark" onClick={() => handleRemoveOption(index)}></i>
                        </div>
                        {index === size.length - 1 ? <></> : (
                          <div className='and-or' >
                            <select className='dropdown' onChange={(e) => handleAndOr(e, index)}>
                              <option>select</option>
                              <option>AND</option>
                              <option>OR</option>
                            </select>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <p onClick={handleAddOption}>Want to add more?</p>
                  <div className="button-container">
                    <button className="button" onClick={(e) => fetchData(e)}>DELETE</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div >
      )}
    </>
  );
}

export default DeletePage;