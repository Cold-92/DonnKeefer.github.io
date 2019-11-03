const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Polly Jean",
        artist: 'Celenia Ann',
        url: 'D://PictureAndMusic//Music//Polly Jean.mp3',
        cover: 'D://PictureAndMusic//Picture//Polly Jean.jpg',
      }
    ]
});