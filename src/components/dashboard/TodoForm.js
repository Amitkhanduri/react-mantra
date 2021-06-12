import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import TableComponent from './Table';

const TodoForm = () => {
  const [state, setState] = useState({
      firstName: ""
  });

  const [ showError, setShowError] = useState(false);
  const userForm = useRef();
  const [ inputLength, setInputLength ] = useState([1]);
  const [ userArray, setUserArray ] = useState([]);

  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setShowError(true);
      userArray.push(state);
      setUserArray([...userArray])
      setState({
        firstName: "",
        skills1: ""
      });
      setShowError(false)
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

  console.log('form', userArray)
  return (
   <div> 
    <Form ref={userForm} name={'userForm'} onSubmit={handleSubmit}> 
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
    <TableComponent data={userArray} />
    </div>
  )
};

export default TodoForm;
