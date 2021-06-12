import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './index.css';

const ModalComponent = ({isOpen, handleClose, data, handleSave}) => {

  const [state, setState] = useState({
    firstName: ""
  });  
  const [ showError, setShowError] = useState(false);
  const [ inputLength, setInputLength ] = useState([1]);
  const [ userArray, setUserArray ] = useState([]);

  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.value})
  }

  const addInput = () => {
     setInputLength([...inputLength, inputLength.length + 1])
  }

  const removeInput = (i) => {
    const removeItem = [...inputLength];
    removeItem.splice(i, 1);
    setState({...state, [`skills${i+1}`]: ''})
    setInputLength(removeItem);
  }



  return (
   <div>
    <Modal isOpen={isOpen} onClosed={handleClose} modalClassName="modal-dialog" fade={false}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
        <Form> 
    <div className="form-margin">
    <FormGroup>
        <Label className="label-align" for="firstName">FirstName</Label>
        <Input invalid={showError && !state.firstName} type="text" name="firstName" id="firstName" value={state.firstName} onChange={handleChange}  placeholder="Enter your firstname" />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
      </FormGroup>
    </div>
    <div className="form-margin">
    {inputLength.map((key, index) => (
          <FormGroup key={`${key}input`}>
          <Label className="label-align" for="skills">skills{key}</Label>
          <Input invalid={showError && !state['skills'+key]} type="text" name={`skills${key}`} id={`skills${key}`} value={state['skills'+key]} onChange={handleChange}  placeholder="Enter your skills" />
           {key > 1 && (
              <Button color="danger" style={{float:'right'}} onClick={() => removeInput(index)}>X</Button>
           )} 
          <FormFeedback>{key} Oh noes! that skills is already taken</FormFeedback>
        </FormGroup>
      ))}
    </div>
    <div className="form-margin">
    { inputLength.length !== 3 && (
        <div className="add-btn-align">
          <Button color="success" onClick={addInput}>Add +</Button>
        </div>
      )}    
    </div>
     <div className="submit-btn">
     <Button color="primary">Submit</Button>
      </div>  
    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleSave(data)}>Save</Button>{' '}
          <Button color="secondary" onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
   </div>
  )
};

export default ModalComponent;
