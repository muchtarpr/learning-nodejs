import axios from "axios";

export const consumeAPI = async (url, method, params) => {
  await axios({
    method: method,
    url: "http://httpbin.org/" + url,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: params,
  })
    .then((res) => {
      console.log("res", res);
    })
    .catch((e) => {
      console.log(e);
    });
};
