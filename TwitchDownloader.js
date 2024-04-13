// Twitter Video Downloader
const TwitchDownloader = require('twitch-dl');

// Twitch video ID to download
const videoId = '123456789';

// Output directory where the downloaded video will be saved
const outputDir = '/path/to/directory';

// Download options
const options = {
  output: `${outputDir}/%(title)s.%(ext)s`, // Output directory and file name format
};

// Download the video
const downloader = new TwitchDownloader(videoId, options);
downloader.getInfo((err, info) => {
  if (err) {
    console.error('Error downloading video:', err);
  } else {
    console.log('Title:', info.title);
    console.log('Description:', info.description);
    downloader.download((err, info) => {
      if (err) {
        console.error('Error downloading video:', err);
      } else {
        console.log('Video downloaded:', info.file);
      }
    });
  }
});
