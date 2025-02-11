import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

AlbumItem.propTypes = {
  album: PropTypes.object,
};
AlbumItem.defaultProps = {
  album: {
    id: 1,
    title: "title Default",
    image: null,
  },
};

function AlbumItem({ album }) {
  return (
    <div className="album">
      <img src={album.image} alt={album.title} />
      <h3 className="title">{album.title}</h3>
    </div>
  );
}

export default AlbumItem;
