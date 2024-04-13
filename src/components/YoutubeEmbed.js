import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe width="420" height="315" src="https://www.youtube.com/embed/Tn3lZE0rRBs?si=BiG_UtadozamRBSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
);
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
  export default YoutubeEmbed;