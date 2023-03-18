import React from "react";
import { useDropzone } from "react-dropzone";

export interface FileInputInterface {
  onDropEvent: (data: any) => void;
  maxFiles?: number;
}

export default function DragDropFile({ onDropEvent = () => {}, maxFiles = 1 }: FileInputInterface) {
  // drag state
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/png": [".png", ".jpg", ".jpeg"],
    },
    onDrop: onDropEvent,
    maxFiles: maxFiles,
  });

  return (
    <div className="col-lg-12 mb-3" {...getRootProps()}>
      <div className="card mt-3 border-0">
        <div className="card-body d-flex justify-content-between align-items-end p-0">
          <div className="form-group mb-0 w-100">
            <input {...getInputProps()} className="input-file" />
            <label
              htmlFor="file"
              className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
            >
              <i className="ti-cloud-down large-icon me-3 d-block"></i>
              <span className="js-fileName">Arroja tu foto aquí</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
