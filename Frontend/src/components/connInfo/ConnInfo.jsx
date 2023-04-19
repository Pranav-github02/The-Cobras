import React, { useState } from 'react'
import "./style.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Preloader from '../preloader/Preloader';

export default function ConnInfo() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        account: '',
        warehouse: '',
        database: '',
        role: '',
        schema: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.username === '' || formData.account === '' || formData.warehouse === '' || formData.database === '' || formData.role === '' || formData.schema === '' || formData.password === '') {
            toast.warning("Please enter all details", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        } else {
            setIsLoading(true)
            axios.post("http://127.0.0.1:8000/api/snowconn/", formData)
                .then((response) => {
                    if (response.status === 200) {
                        setIsLoading(false)
                        navigate("/buttons", {
                            state: {
                                ConnInfo: formData,
                                tables: response.data.tables
                            }
                        })
                    } else {
                        setIsLoading(false)
                        toast.error("Please enter valid details", {
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
                })
                .catch((error) => {
                    setIsLoading(false)
                    toast.error("Please enter valid details", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                    });
                });
        }
    };

    return (
        <>
            {isLoading ? <Preloader /> : (
                <div className="conn-info">
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
                    <div className='container'>
                        <div className="content">
                            <div className='inner'>
                                <h1 className='title'>Welcome</h1>
                                <p className='subtitle'>Please provide us with the following details of your Snowflake Account</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-container" style={{ color: 'black' }}>
                                        <label>Username </label>
                                        <input type="text" name="username" onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-container" style={{ color: 'black' }}>
                                        <label>Account name </label>
                                        <input type="text" name="account" onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-container" style={{ color: 'black' }}>
                                        <label>Warehouse </label>
                                        <input type="text" name="warehouse" onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-container" style={{ color: 'black' }}>
                                        <label>Database </label>
                                        <input type="text" name="database" onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-container" style={{ color: 'black' }}>
                                        <label>Role </label>
                                        <input type="text" name="role" onChange={handleInputChange} required />

                                    </div>
                                    <div className="input-container" style={{ color: 'black' }}>
                                        <label>Schema </label>
                                        <input type="text" name="schema" onChange={handleInputChange} required />

                                    </div>
                                    <div className="input-container" style={{ color: 'black' }}>
                                        <label>Password </label>
                                        <input type="password" name="password" onChange={handleInputChange} required />
                                    </div>
                                    <div className='button-container'>
                                        <button type="submit" className="button">
                                            Submit
                                        </button>
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