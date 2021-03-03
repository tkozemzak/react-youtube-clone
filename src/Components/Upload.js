import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState({ photos: [] });

  const uploadHandler = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    axios.post("http://localhost:5000/upload", data).then((res) => {
      setUploadedPhoto({ photos: [res.data, ...uploadedPhoto.photos] });
    });
  };
  return (
    <div>
      <form>
        <input type="file" name="file" onChange={uploadHandler} />
      </form>

      {uploadedPhoto.photos &&
        uploadedPhoto.photos.map((photo, idx) => (
          <div key={idx}>
            {photo.filename}{" "}
            <img
              src={`http://localhost:5000/images/${photo.filename}`}
              alt=""
            />
          </div>
        ))}
    </div>
  );
};

export default Upload;
