import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function ModalForm({ setModalShow }) {
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");

  async function postLinks(body) {
    const BASE_URL = "/api";

    const url = `${BASE_URL}/links`;

    const { data } = await axios.post(url, body);

    console.log(data);
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="url"
          placeholder="www.example.com"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <Form.Text className="text-muted">Please include www.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Form.Text className="text-muted">
          Enter a brief description of your link.
        </Form.Text>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          postLinks({ link, comment });
          setLink("");
          setComment("");
          setModalShow(false);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default ModalForm;
