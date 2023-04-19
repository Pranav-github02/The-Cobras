import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Preloader from '../../preloader/Preloader'
import { ToastContainer, toast } from 'react-toastify';

const DontKnowsql = ({ connection, tables }) => {
  const navigate = useNavigate();
  const [table, setTable] = useState(tables)
  const [selectTable, setSelectTable] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const conn = connection
  const fetchColumnsGet = async (e) => {
    e.preventDefault()
    if (selectTable === null || selectTable === "select") {
      toast.warning("Please select a table", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      setIsLoading(true)
      const data = {
        username: conn.username,
        account: conn.account,
        warehouse: conn.warehouse,
        database: conn.database,
        role: conn.role,
        schema: conn.schema,
        password: conn.password,
        where: conn.where,
        columns: conn.columns,
        table: selectTable
      }
      axios.post("http://127.0.0.1:8000/api/col/", data)
        .then((response) => {
          // dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data })
          setIsLoading(false)
          navigate("/get", {
            state: {
              ConnInfo: conn,
              table: selectTable,
              col: response.data.columns
            }
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  const fetchColumnsPost = async (e) => {
    e.preventDefault()
    if (selectTable === null || selectTable === "select") {
      toast.warning("Please select a table", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      setIsLoading(true)
      const data = {
        username: conn.username,
        account: conn.account,
        warehouse: conn.warehouse,
        database: conn.database,
        role: conn.role,
        schema: conn.schema,
        password: conn.password,
        where: conn.where,
        columns: conn.columns,
        table: selectTable
      }
      axios.post("http://127.0.0.1:8000/api/col/", data)
        .then((response) => {
          // dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data })
          setIsLoading(false)
          navigate("/post", {
            state: {
              ConnInfo: conn,
              table: selectTable,
              col: response.data.columns
            }
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  const fetchColumnsPatch = async (e) => {
    e.preventDefault()
    if (selectTable === null || selectTable === "select") {
      toast.warning("Please select a table", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      setIsLoading(true)
      const data = {
        username: conn.username,
        account: conn.account,
        warehouse: conn.warehouse,
        database: conn.database,
        role: conn.role,
        schema: conn.schema,
        password: conn.password,
        where: conn.where,
        columns: conn.columns,
        table: selectTable
      }
      axios.post("http://127.0.0.1:8000/api/col/", data)
        .then((response) => {
          // dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data })
          setIsLoading(false)
          navigate("/patch", {
            state: {
              ConnInfo: conn,
              table: selectTable,
              col: response.data.columns
            }
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  const fetchColumnsDelete = async (e) => {
    e.preventDefault()
    if (selectTable === null || selectTable === "select") {
      toast.warning("Please select a table", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      setIsLoading(true)
      const data = {
        username: conn.username,
        account: conn.account,
        warehouse: conn.warehouse,
        database: conn.database,
        role: conn.role,
        schema: conn.schema,
        password: conn.password,
        where: conn.where,
        columns: conn.columns,
        table: selectTable
      }
      axios.post("http://127.0.0.1:8000/api/col/", data)
        .then((response) => {
          // dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data })
          setIsLoading(false)
          navigate("/delete", {
            state: {
              ConnInfo: conn,
              table: selectTable,
              col: response.data.columns
            }
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
  return (
    <>
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
      {isLoading ? <Preloader /> : (
        <>
          <p className='subtitle'>Select the table and choose the operation to perform</p>
          <form>
            {/* <label for="tableName">Select Table: </label> */}
            <select name="tableName" id="tableName" onChange={(e) => setSelectTable(e.target.value)} className='dropdown'>
              <option value="select">select table</option>
              {table.map((table) => <option value={table}>{table}</option>)}

            </select>
            <div className="button-container">
              <div className='btn-group'>
                <button className="button" onClick={(e) => fetchColumnsGet(e)}>FETCH</button>
                <button className="button" onClick={(e) => fetchColumnsPost(e)}>INSERT</button>
              </div>
              <div className='btn-group'>
                <button className="button" onClick={(e) => fetchColumnsPatch(e)}>UPDATE</button>
                <button className="button" onClick={(e) => fetchColumnsDelete(e)}>DELETE</button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  )
}

export default DontKnowsql