import React from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import button from "reactive-button";
import "../styles/Upload.scss";

function Upload() {
  const [files, setFiles] = useState([]);
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
    },
  });

  return (
    <div className="upload">
      <div className="dragndrop" {...getRootProps()}>
        <div className={files.length ? "invisible" : "visible"}>
          <input {...getInputProps()} />
          <p>Drag and Drop files or Click to select Image</p>
        </div>
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
        <button className="deletebutton button">UPLOAD</button>
      </div>
    </div>
  );
}

export default Upload;
