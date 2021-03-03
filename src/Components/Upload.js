import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState({ photos: [] });

  const uploadHandler = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    console.log("files", e.target.files);
    axios.post("http://localhost:5000/upload", data).then((res) => {
      setUploadedPhoto({ photos: [res.data, ...uploadedPhoto.photos] });
      console.log("uploadedPhoto", uploadedPhoto);
    });
  };
  return (
    <div>
      <form>
        <input type="file" name="file" onChange={uploadHandler} />
        <button name="Upload" type="submit">
          Upload File
        </button>
      </form>

      {uploadedPhoto.photos &&
        uploadedPhoto.photos.map((photo) => (
          <div>
            <img src={`http://localhost:5000/${photo.path}`} alt="" />
            {photo.filename}
          </div>
        ))}
    </div>
  );
};

export default Upload;
