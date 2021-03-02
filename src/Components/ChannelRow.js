import React from "react";
import "../Styles/ChannelRow.css";
import { Avatar } from "@material-ui/core";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelrow">
      <Avatar className="channelrow_logo" alt={channel} src={image} />
      <div className="channelrow_text">
        <h4>{channel}</h4>
        <p>
          {subs} {subs == 1 ? "subscriber" : "subscribers"}
        </p>
      </div>
    </div>
  );
};

export default ChannelRow;
