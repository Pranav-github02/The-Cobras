import React, { useState } from 'react'
import "./style1.css"
import { useLocation } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { CSVLink } from 'react-csv';
const Results = () => {
    const location = useLocation()
    const cols = location.state.cols || ""
    const data = location.state.data || ""
    const [pageNumber, setPageNumber] = useState(0);
    const [perPage] = useState(10);
    const pageCount = Math.ceil(data.length / perPage);
    const offset = pageNumber * perPage;
    const currentData = data.slice(offset, offset + perPage);

    function handlePageClick({ selected: selectedPage }) {
        setPageNumber(selectedPage);
    }
    const Colsnull = () => {
        return (
            <div className='queryspage'>
                <div className="container">
                    <div className="content">
                        <div className='inner'>
                            <p>Sorry! No data matched the specified criteria</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const Colsnotnull = () => {
        return (
            <div className='queryspage'>
                <div className="container">
                    <div className="content">
                        <div className='inner'>
                            <h1 className='results-title'>Successfully Executed!</h1>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        {cols.map((col) => (
                                            <th className='text-center' key={col} scope="col">{col}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map((item, index) => (
                                        <tr key={index}>
                                            {cols.map((col) => (
                                                <td key={col}>{item[col]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                previousLinkClassName={'pagination__link'}
                                nextLinkClassName={'pagination__link'}
                                disabledClassName={'pagination__link--disabled'}
                                activeClassName={'pagination__link--active'}
                            />
                            <CSVLink className='download-csv'
                                data={data}
                                headers={cols}
                                filename='data.csv'>
                                <i className="fa-solid fa-download"></i> Download .csv
                            </CSVLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {cols === "" || data.length === 0 ? <Colsnull /> : <Colsnotnull />}
        </>
    )
}

export default Results