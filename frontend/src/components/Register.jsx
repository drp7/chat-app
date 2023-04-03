import React from "react";
import FormRow from "./FormRow";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
export default function Register({ account }) {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPass: "",
    show: true,
    pic: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const handleShow = (e) => {
    setLoginInfo({ ...loginInfo, show: !loginInfo.show });
  };
  const postDetails = (pic) => {
    setLoading(true);
    if (pic === undefined) {
      toast.warning("Please Select an Image!");
      return;
    }
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "duhd7aumj");
      fetch("https://api.cloudinary.com/v1_1/duhd7aumj/image/upload", {
        method: "post",
        body: data,
      })
        .then((data) => {
          setLoginInfo({ ...loginInfo, pic: data.url.toString() });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast.warning("Please Select an Image!");
      setLoading(false);
      return;
    }
  };
  let { name, email, password, show, confirmedPass, pic } = loginInfo;
  return (
    <form autoComplete="" className="w-11/12 mx-auto flex flex-col gap-2 ">
      {!account && (
        <FormRow
          labelText="Name"
          name="name"
          type="text"
          placeholder="Enter Your Name"
          handleChange={handleChange}
          value={name}
        />
      )}
      <FormRow
        labelText="Email"
        name="email"
        type="email"
        placeholder="Enter Your Email"
        handleChange={handleChange}
        value={email}
      />
      <FormRow
        labelText="Password"
        name="password"
        type={show ? "password" : "text"}
        value={password}
        handleShow={handleShow}
        placeholder="Enter Your Password"
        icon={show ? <BiShow size={30} /> : <BiHide size={30} />}
        handleChange={handleChange}
        Required
      />
      {!account && (
        <>
          <FormRow
            labelText="Confirm Password"
            name="confirmedPass"
            type={show ? "password" : "text"}
            value={confirmedPass}
            placeholder="Enter Confirmed Password"
            handleChange={handleChange}
            Required
          />
          <FormRow
            labelText="Upload Your Picture"
            name="pic"
            type="file"
            value={pic}
            handleChange={(e) => postDetails(e.target.files[0])}
            accept="image/*"
            Required
          />
        </>
      )}

      <button className="bg-gradient-to-r p-2 rounded-full mt-3 " type="submit">
        {loading ? "Loading" : account ? "Login" : "Signup"}
      </button>
      {account && (
        <button
          className="bg-rose-600 p-2 rounded-full "
          type="button"
          onClick={() =>
            setLoginInfo({ email: "guest@example.com", password: "123456" })
          }
        >
          Demo User Login
        </button>
      )}
    </form>
  );
}
