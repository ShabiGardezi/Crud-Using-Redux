import React, { useState } from "react";
import "./../src/forms.css"; // Import your custom styles
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Delete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  // Destructure the properties from existingUser
  const { name, email } = existingUser || { name: "", email: "" };
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div className="box">
      <div className="stylish-form-container">
        <h2 style={{ textAlign: "center" }}>Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delete;
