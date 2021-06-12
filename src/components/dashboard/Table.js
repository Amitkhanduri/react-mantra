import React, { useState } from "react";
import { Table, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalComponent from './Modal';
import './index.css';

const TableComponent = ({data}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState('');

  const modalClose = () => {
     console.log("DSD")
     setIsOpen(false)
  } 

  const editUser = (index, item) => {
      console.log('index', index, item);
      setIsOpen(true);
      setEditData({index, item})
  }

  const handleSave = (dataItem) => {
      console.log('console', dataItem);
  }

  return (
   <div>
    <Table dark bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>      
          <th>skill Name 1</th>
          <th>skill Name 2</th>
          <th>skill Name 3</th>
          <th>Action</th>
        </tr> 
      </thead>   
      <tbody>
          {data && !data.length} 
          {data.map((item,index) => (
               <tr key={index}>
               <th scope="row">{index}</th>
                <td>{item.firstName}</td>
                <td>{item.skills1}</td>
                <td>{item.skills2}</td>
                <td>{item.skills3}</td>
                <td><Button color="primary" onClick={() => editUser(index, item)}>Edit</Button></td>
             </tr>
          ))} 
      </tbody>
    </Table>
      {isOpen && (  
       <ModalComponent isOpen={isOpen} data={editData} handleClose={modalClose} handleSave={handleSave} />
      )}
   </div>
  )
};

export default TableComponent;
