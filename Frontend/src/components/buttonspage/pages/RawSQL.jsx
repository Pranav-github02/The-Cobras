import React, { useState } from 'react'
import "./style1.css"
import Preloader from '../../preloader/Preloader';
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const RawSQL = ({ connection }) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState(null)
    const conn = connection
    const fetchDataQuery = async (e) => {
        e.preventDefault()
        if (query == null) {
            toast.warning("Please enter a valid query", {
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
                query: query
            }
            axios.post("http://127.0.0.1:8000/api/raw/", data)
                .then((response) => {
                    setIsLoading(false)
                    navigate("/results", {
                        state: {
                            cols: response.data.result.length !== 0 ? Object.keys(response.data.result[0]) : "",
                            data: response.data.result
                        }
                    })
                })
                .catch((error) => {
                    setIsLoading(false)
                    toast.error("Unable to execute sql query. Please check and try again", {
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
                <form>
                    <div className='sql-query'>
                        <textarea rows={7} cols={70} onChange={(e) => setQuery(e.target.value)} style={{ resize: "none" }} />
                    </div>
                    <div className="button-container">
                        <button className="button" onClick={(e) => fetchDataQuery(e)}>SUBMIT</button>
                    </div>
                </form>

            )}
        </>
    )
}

export default RawSQL