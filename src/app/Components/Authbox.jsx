"use client";
import { AuthContext } from "@/Context/authContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import GoogleButton from "react-google-button";

const AuthBox = ({}) => {
  const [isSignup, setIsSignup] = useState(false);
  const [sform, setSform] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [lform, setLform] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {
    GoogleSignIn,
    handleSigninWithEmailAndPass,
    createUser,
    handleSignout,
    data,
  } = useContext(AuthContext);

  const toggleAuthMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSChange = (e) => {
    setSform({ ...sform, [e.target.name]: e.target.value });
  };
  const handleLChange = (e) => {
    setLform({ ...lform, [e.target.name]: e.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    if (isSignup) {
      createUser(sform);
    } else {
      handleSigninWithEmailAndPass(lform);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-[400px] p-6 my-36 mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl text-center">
        {data?"Profile":isSignup ? "Sign Up" : "Log In"}
      </h2>
      {data ? (
        <div className="flex flex-col justify-center text-center">
          <div className="flex items-center justify-around py-8">
            <Image
              src={
                data?.photoURL
                ? data.photoURL
                : 
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAS1BMVEX9//7///8Zt9IAtNAAss8AsM7r+Pr0+/zh9Pe/5+9Sw9nX8PW35O2u4evE6fB4zuCj3enP7fOH0+Nqyt0yvNWV2Oae2OZFv9dfx9uviu+VAAAFIUlEQVR4nO3a65ajKhAGUAqI16jxNvH9n/SQdJJOOkB9hWR6zVqnfirKthRQUNGvh/ptwH6CcvE7BOWNv0bwV5/OEB4Srz6NISmO1S9WwGUl9csUaEG5ADZA5VLqxxVAoXQAhuCL7BMABq7EXgCAYPbnEHCG6O48AA4R25lPEDWE9+UERBHBPbkFYUNoR35B0BDY/glByODf/BlBwODdKj/hHoNvI3gu1dbdOk3Tn66vYAZGgE5UnTZtHqGXoS5gO0sAzqL62dWvn8OYZapA/m4C0Xi2r/XfFUOBXABLYM9QNQdP/V+Iw6p4BEdgD++0LwP3sE0rNsgIpCYbAVwSoXvgVsYInGBmBC4OR6FBiQRN7CY8bsZJZlC4QNHA5+B6M9g8pBLohAlcVBID3tFTDwv0wrbNFAKVCyzQdkojMMdMyKN4D8N2D3ICFRKBNlsKIWcSnIHtoaQEYRJEaVBgEvAGeQvLjppCgmqEAm3YPlJGoFZ4H1xsjOCNwJTupPfBRQmmASTM8iwcRhmBK3yWJ4F/GJSEUMoF2gw5CVSkEGYRgSvaJhA02zndDBhhTCE0rOAfI3z+RrAlP/Q4CghK8sb0ILBvTjcDRkjpmmyXlzAkdNDAp52EUAc/ZcNR8oIHAShZiQHI0/hlwAiKNinB8p+WQoL4hcGyrwtCgnisBMZJKYFWYRqQ9iAkyNKAJkFCcK/xoq6B/bZOICiC5je+AuoZEwh438B/SqURBF3kgjVIOQFvFWBrSCCgn9fsB8QOgssDazCSHCQQ+I7aLGhzTCW418glhjgMwCT0ToKrYQ3OQttllC4qwa8srwcVg/Zlwp5PeGP8FiQQrmsyq7EvayLG2PNRDEgnXI8c103brzjYZejAdaFshK+DVdHWXXfs20L8RGUh3E+AfI0BhI8tjSKCf4+AfH+KOnwpgag8rdz0YDX0Ch//vwnYEmc7GGub2Kwq0VGbw/KnlKzcogTXETTXBVJjTqFhwPWb27XbNBZbuZUQXAbmR29olt53lQ7wPXpYvQJ9pYBA5fQyNNnGjQbPB11OUU0vI4ddauDKngixwkT927Bk7XYay0fXVPTr+fBz/LQbMxlPKIFK79rg9ZeBZpjWaT7rn+v49yJH5tpeCMGiVJ3D7yi3vxfC+6fIE0EggcboMjkXtgkbQAKdEqZXXvIQ/rR7I3gLAm/MrGEJvFETRJCvSAkMHoKns+l23oU7wtc4CSEkrQb5w2PwEn4US5v79obZ3toFAQThtEo87NukS4DwUoy23Y3h2fBjCpBChOeBJ0djeDa8PA4EEBKmW+Nh5lASQn/0pCxMxsPW5BcE/muiPrdA63PpFwR+MEtZf+Di8a/RW40+AvV5usXXWEqQcDWI592RuE1Gvlf4tsVtGj+RBJcG8gn8/74mLAMhYUf/f66ebUXCehwSZvBdrz8LmQbp9yhgAtV5e+dbuIECJ7hPww+EXxD8J77OL6gDVYUI1O56eX+Ly7ywlEBlk/GBuHxPyAmkhL+1RcJMsXrCu9xDGftYEwBM4EEECFRuGW6G3cI3gSe4REQn3hHAEk0BQKBi2HM3rv/J7yVcJpmS++tDM/LnBwiPmS5pBiwCAAmkxk16O4zZevDkUCm6TDr6Z3MC9esh2BsmE1wL7RqL3JDL/GgXb4epBBdFNy822kqtXeaObQQ7CBfFuG6L9qTDXbxetnWU1Z9CuDLa+jSfzXPoZT7Vrbj6ZMKDUlXtOLZVlVR1FkKe+J9wif8AIdpPVnxEjtMAAAAASUVORK5CYII="
              }
              width={50}
              height={50}
              ></Image>
              <div className="flex flex-col items-center justify-around">

              <h1>Name: {data?.displayName}</h1>
              <h1>Email: {data?.email}</h1>
              </div>
          </div>

          <button
            className="p-3 bg-blue-500 text-white rounded"
            onClick={handleSignout}
          >
            {" "}
            Logout{" "}
          </button>
        </div>
      ) : (
        <form className="flex flex-col" onSubmit={submit}>
          {isSignup ? (
            <>
              <input
                className="mb-4 p-2 border rounded"
                type="text"
                name="name"
                onChange={(e) => handleSChange(e)}
                value={sform.name}
                placeholder="Full Name"
              />
              <input
                className="mb-4 p-2 border rounded"
                type="email"
                name="email"
                onChange={(e) => handleSChange(e)}
                value={sform.email}
                placeholder="Email"
              />
              <input
                className="mb-4 p-2 border rounded"
                type="password"
                name="password"
                onChange={(e) => handleSChange(e)}
                value={sform.password}
                placeholder="Password"
              />
              <input
                className="mb-4 p-2 border rounded"
                type="password"
                name="cpassword"
                onChange={(e) => handleSChange(e)}
                value={sform.cpassword}
                placeholder="Confirm Password"
              />
            </>
          ) : (
            <>
              <input
                className="mb-4 p-2 border rounded"
                type="text"
                name="email"
                onChange={(e) => handleLChange(e)}
                value={lform.email}
                placeholder="Email"
              />
              <input
                className="mb-4 p-2 border rounded"
                type="password"
                name="password"
                onChange={(e) => handleLChange(e)}
                value={lform.password}
                placeholder="Password"
              />
            </>
          )}
          <button className="p-3 bg-blue-500 text-white rounded" type="submit">
            {isSignup ? "Sign Up" : "Log In"}{" "}
          </button>
          {!isSignup && (
            <div style={{ width: "100%", margin: "auto" }} className="pt-3">
              <GoogleButton style={{ width: "350px" }} onClick={GoogleSignIn} />
            </div>
          )}
        </form>
      )}
      <p
        className="text-center text-blue-500 cursor-pointer py-4"
        onClick={toggleAuthMode}

      >
        {isSignup
          ? "Already have an account? Log In"
          : "Don't have an account? Sign Up"}
      </p>
      <div className="flex justify-center mt-4">
        {/* <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google client ID
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
      </div>
    </div>
  );
};

export default AuthBox;
