import React,{ useState } from 'react'
import "./style1.css"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import RawSQL from './pages/RawSQL';
import DontKnowsql from './pages/DontKnowsql';
import './pages/dontKnowSql.css'
// import { useSelector, useDispatch } from 'react-redux';
const ButtonsPage = () => {
    // const dispatch = useDispatch();
    // console.log(useSelector(state => state));
    // const info = useSelector(state => state.info)
    const navigate = useNavigate();
    const location = useLocation();
    // const [table, setTable] = useState(useSelector(state => state.tables))
    const [table, setTable] = useState(location.state.tables)
    // const [selectTable, setSelectTable] = useState(null)
    // const [isLoading, setIsLoading] = useState(false);
    const [active, setActive] = useState(true);
    const conn = location.state.ConnInfo

    return (
        <div className='buttonspage'>
            <div id="container" className="container">
                <div id="content" className='content'>
                    <div id="inner" className='inner'>
                        <h1 className='title'>Hi! {conn.username}</h1>
                        <p className='db-name'>DATABASE: {conn.database}</p>
                        <div className='btn-group1'>
                            <button className='queryType btn1' onClick={() => setActive(true)}>Don't know SQL?</button>
                            <button className='queryType btn2' onClick={() => setActive(false)}>Know how to write SQL?</button>
                        </div>
                        {
                            active ? <DontKnowsql connection={conn} tables={table} /> : <RawSQL connection={conn} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonsPage