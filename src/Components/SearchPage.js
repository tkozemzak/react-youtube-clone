import React from "react";
import "../Styles/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://avatars.githubusercontent.com/u/37643202?s=460&u=fe6687e49e5b3cbfebd985ab52c2167744ec1a85&v=4"
        channel="Tim Kozemzak"
        verified={true}
        subs={334}
        noOfVideos={3453}
        description="Description of channel here"
      />
      <VideoRow />
    </div>
  );
};

export default SearchPage;
