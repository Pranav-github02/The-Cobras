import { useState, useEffect } from 'react';
import axios from 'axios';
import './getstyles.css';
import * as React from 'react';
import {Multiselect} from 'multiselect-react-dropdown';

function ColumnDropdown() {
  var columnss=[{value: "MovieName" , id:1},{value: "MovieId" , id:1},{value: "MovieRating" , id:1},{value: "MovieMovie" , id:1}];
  const [columns,setColumns] = useState(columnss);
  const [selectedColumn, setSelectedColumn] = useState([]);
  const [selectedColumn2, setSelectedColumn2] = React.useState('condition');
  const [selectedColumn3, setSelectedColumn3] = React.useState('condition2');
  const [inputValue,setInputValue]=React.useState('');

 
  useEffect(() => {
    axios.get('/api/columns')
      .then(response => {
        setColumns(response.data.columns);
      })
      .catch(error => {
        console.error(error);
      });
     // setColumns(columnss);
  }, []);

  const handleColumnChange = (event) => {
    const options = Array.from(event.target.selectedColumn, option => option.value);
    setSelectedColumn(options);
  }
  const handleColumnChange2 = (event) => {
    setSelectedColumn2(event.target.value);
    console.log(selectedColumn2);
  }
  const handleColumnChange3 = (event) => {
    setSelectedColumn3(event.target.value);
    console.log(selectedColumn3);
  }

  const handleChange=(event) =>{
    setInputValue(event.target.value)
  }


  return (
    <div className='outerbody'>
      <div className='innerbody'>
    <div className = "heading">
        <h1>GET</h1>
    </div>
    <form >
    <div className="dropdown-container">
      <Multiselect className="dropdown"options={columns} displayValue="value">
        {/* <option value="">Select a column</option>
        {columns.map(column => (
          <option value={column}>{column}</option>
        ))} */}
      </Multiselect>
    </div>
    <div className="where">
      <h3>Where condition</h3>
    </div>
    
    <span className="dropdown-container">
      <select className="dropdown" value={selectedColumn2} onChange={handleColumnChange2}>
        <option value="">Select</option>
        {columns.map(column => (
          <option value={column.value}>{column.value}</option>
        ))} 
      </select>
  
  
      <select className="Wheredropdownn" value={selectedColumn3} onChange={handleColumnChange3}>
        <option value="Select">Select</option>
          <option key="3" value="value3">value3</option>
          <option key="4" value="value4">value4</option> 
      </select>
    
          <input class="inputValue" type="text" value={inputValue} onChange={handleChange} placeholder="Enter your name"/>
        
        
        </span> 
        <div class="submitButtonDiv">
        <input class="Button"type="submit" value="Submit" />
        </div>
      </form>
     

      </div>
    </div>
  );
}
export default ColumnDropdown;
