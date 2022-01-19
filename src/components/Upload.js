import React from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import "../styles/Upload.scss";
import axios from "axios";

function Upload(props) {
  const [files, setFiles] = useState([]);
  const [data, setdata] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            picture: file,
          })
        )
      );
      setdata(acceptedFiles[0]);
      console.log(acceptedFiles[0]);
      // setFiles({
      //   preview: URL.createObjectURL(acceptedFiles[0]),
      //   /* this contains the file we want to send */
      //   pictureAsFile: acceptedFiles[0],
      // });
      // console.log(acceptedFiles[0]);
    },
  });

  const uploadFile = () => {
    const formData = new FormData();
    formData.append("files", files);
    formData.append("data", data);
    console.log(formData); // appending file
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    // let request = new XMLHttpRequest();
    // request.open("POST", "http://127.0.0.1:5000/hello");
    // request.send(formData);
    axios
      .post("" + process.env.REACT_APP_API_ENDPOINT, formData)
      .then((res) => {
        console.log(res.data["prob"]);
        props.setprob(res.data["prob"]);
      })
      .catch((err) => console.log(err));
    // const Upload = async () => {
    //   await fetch("http://127.0.0.1:5000/hello", {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((res) => {
    //       console.log(res.json()["prob"]);
    //     })
    //     .catch((err) => console.log(err));
    // };
    // Upload();
  };

  return (
    <div className="upload">
      <div className="dragndrop" {...getRootProps()}>
        {!files.length ? (
          <div>
            <input {...getInputProps()} />
            <p className="dragndroptext">
              Drag and Drop files or Click to select Image
            </p>
          </div>
        ) : null}

        <div className="imagediv">
          {files.length ? (
            <img src={files[0].preview} className="previewimg" alt="preview" />
          ) : null}
        </div>
      </div>

      <div className="buttonClass">
        <button
          className="deletebutton button"
          onClick={() => {
            setFiles([]);
          }}
        >
          DELETE
        </button>
        <button className="deletebutton button" onClick={uploadFile}>
          UPLOAD
        </button>
      </div>
    </div>
  );
}

export default Upload;
