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
        noOfVideos={34}
        description="Description of channel here"
      />

      <hr />
      <VideoRow
        views={12345623}
        subs={5643}
        description="Video description"
        timestamp="1 minute ago"
        channel="Tim Kozemzak"
        title="Let's build something"
        image="https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/05/IMG_1330-1.jpg?fit=1600%2C1066&ssl=1"
      />
    </div>
  );
};

export default SearchPage;
