import React from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import button from "reactive-button";
import "../styles/Upload.scss";
import axios from "axios";

function Upload() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");
  const [data, setdata] = useState(null);
  const [progress, setProgess] = useState(0);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      setdata(acceptedFiles[0]);
    },
  });

  const upload = () => {
    // if (files.length) {
    //   axios
    //     .post(
    //       "https://25d174a9-2b6c-44d4-97a6-fd427b1f3352.mock.pstmn.io/tumor",
    //       {
    //         data: data,
    //         hello: "hello",
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //     });
    // } else {
    //   alert("Upload image");
    // }
    // console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.open(
      "post",
      "https://25d174a9-2b6c-44d4-97a6-fd427b1f3352.mock.pstmn.io/tumor",
      true
    );
    xhr.send(data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append("file", file); // appending file
    axios
      .post(
        "https://25d174a9-2b6c-44d4-97a6-fd427b1f3352.mock.pstmn.io/tumor",
        formData,
        {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%";
            setProgess(progress);
          },
        }
      )
      .then((res) => {
        console.log(res);
        setdata({
          name: res.data.name,
          path:
            "https://25d174a9-2b6c-44d4-97a6-fd427b1f3352.mock.pstmn.io" +
            res.data.path,
        });
      })
      .catch((err) => console.log(err));
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
