import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from 'axios';
const AuthContext = createContext();
function AuthContextProvider(props) {
  // set default to undefined
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const url = "http://localhost:5000/api/loggedIn";
    // const url = "http://localhost:4000/users/loggedIn";

    const postdata =  await axios.post(url, { token: Cookies.get("token") })
    .then(res => {
      console.log(res.data);
      setLoggedIn(res.data);
    })
      .catch(error => console.log(error.message)) 

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    //   body: JSON.stringify({ token: Cookies.get("token") }),
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     // console.log("LoggedIn:", data);
    //     setLoggedIn(data);
    //   });

    // console.log("isLoggedIn", loggedIn);

    // fetch(url, { method: "GET", credentials: "include" })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     setLoggedIn(data);
    //   });
    // .then(() => history.push("/mentors"));
  }

  useEffect(() => {
    getLoggedIn();
    return () => {};
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
