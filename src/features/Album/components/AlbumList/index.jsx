import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../Album";
import "./style.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array,
};
AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </ul>
  );
}

export default AlbumList;
