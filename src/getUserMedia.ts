export default navigator.getUserMedia ? navigator.getUserMedia : navigator.mediaDevices ?
  navigator.mediaDevices.getUserMedia :
  (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia
  );
