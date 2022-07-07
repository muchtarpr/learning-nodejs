import logo from "./logo.svg";
import "./App.css";
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
import SubmitButton from "./components/SubmitButton";
import { consumeAPI } from "./helper/Network";

const App = () => {
  const [user, setUser] = useState("");
  const [chat, setChat] = useState("");

  const submit = async () => {
    const data = new FormData();
    data.append("name", "John Doe");
    data.append("occupation", "gardener");
    axios({
      method: "post",
      url: "http://httpbin.org/post",
      data: data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getGender = () => {
    let gender = "male";
    return gender;
  };

  const callbackExample = (params) => {
    alert(params);
  };

  const storePost = async (e) => {
    let resPut = putPost();

    // let gender = getGender();

    // let gender = await getPostWithPromise(); <<-- kalo janjinya cuma 1
    let [gender, gender2] = await Promise.all([
      getPostWithPromise(),
      getPostWithPromise(),
    ]); //<<<-- ini kalo janjinya lebih dari 1

    // let genderWithcallback = getPostCallback(callbackExample);

    const data = new FormData();
    data.append("name", user);
    data.append("occupation", chat);
    data.append("gender", gender[0]);
    axios({
      method: "post",
      url: "http://httpbin.org/post",
      data: data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const putPost = () => {
    let res = consumeAPI("put", "put", { name: "john", age: "19" });
  };

  const getPostWithPromise = async () => {
    return new Promise(async (resolve, reject) => {
      await axios({
        method: "get",
        url: "http://httpbin.org/get",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((res) => {
          console.log("res", res);
          let gender = "male";
          // return gender;
          resolve(gender);
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };

  const getPostCallback = async (callback) => {
    axios({
      method: "get",
      url: "http://httpbin.org/gasdasdet",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log("res", res);
        let gender = "male";
        callback("sudah dapat nih: " + gender);
      })
      .catch((e) => {
        console.log(e);
        callback("error nih: " + e);
      });
  };

  return (
    <div>
      <body>
        {/* <button onClick={submit}>submit</button>
        <button onClick={storePost}>store post</button> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>TITLE</Form.Label>
          <Form.Control
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Masukkan Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>CONTENT</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            placeholder="Masukkan Content"
          />
        </Form.Group>

        <SubmitButton stp={() => storePost()} />
      </body>
    </div>
  );
};

export default App;
