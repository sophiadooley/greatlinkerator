import React from "react";
import {Modal, Button} from 'react-bootstrap';
import ModalForm from './ModalForm';

function ModalButton() {
  const [modalShow, setModalShow] = React.useState(false);

function MyVerticallyCenteredModal(props) {
  
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a New Link!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm 
            setModalShow={setModalShow}/>
        </Modal.Body>
      </Modal>
    );
  }
  
  function App() {
    
  
    return (
      <>
        <Button variant="primary" 
          onClick={() => 
            setModalShow(true)}>
          Add a New Link!
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  return(<App />);
};

export default ModalButton;