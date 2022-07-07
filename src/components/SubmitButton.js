import axios from "axios";
import FormData from "form-data";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useState } from "react";

const SubmitButton = ({ stp }) => {
  return (
    <div>
      <body>
        <button onClick={() => stp()}>store post</button>
      </body>
    </div>
  );
};

export default SubmitButton;
