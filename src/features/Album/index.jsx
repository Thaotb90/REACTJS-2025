import React from "react";
import AlbumList from "./components/AlbumList";
const albumList = [
  {
    id: 1,
    title: "Chút tâm tình này xin phép được lâu phai",
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/1/e/e61e02571410b153d445067f22f39d36.jpg",
  },
  {
    id: 2,
    title: "Chất indie nguyên sơ trong từng tiếng đàn",
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/8/4/6/e846340f251284ecf7fccb1fc87b4153.jpg",
  },
  {
    id: 3,
    title: "Dừng lại đây, thả trôi cùng những bài hát bồng bềnh...",
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/3/c/2/43c26ef02ac1dce456a4e7477155981b.jpg",
  },
];
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  return (
    <div>
      <h1>Album page</h1>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
