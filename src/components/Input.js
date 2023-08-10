import React, { useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const handleSend = async () => {};
  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Type Something..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="Send">
          <img src={Attach} alt="" />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
          <label htmlFor="file">
            <img src={Img} alt="" />
          </label>
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Input;
