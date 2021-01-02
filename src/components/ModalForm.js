import React from "react";
import {Form, Button} from 'react-bootstrap'

function ModalForm() {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control type="url" placeholder="www.example.com" />
                <Form.Text className="text-muted">
                Please include www.
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text" placeholder="description" />
                <Form.Text className="text-muted">
                Enter a brief description of your link.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ModalForm;