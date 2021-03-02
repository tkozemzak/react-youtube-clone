import React from "react";
import "../Styles/ChannelRow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  console.log("length of description:", description.length);
  return (
    <div className="channelrow">
      <Avatar className="channelrow_logo" alt={channel} src={image} />
      <div className="channelrow_text">
        <h2>
          {channel} {verified && <VerifiedIcon />}
        </h2>
        <p>
          {subs} {subs !== 1 ? "subscribers" : "subscriber"} • {noOfVideos}{" "}
          videos
        </p>
        <p>
          {description.length > 100
            ? `${description.slice(0, 100)} ...`
            : description}
        </p>
      </div>
      <div className="channelrow_subbutton">
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default ChannelRow;
