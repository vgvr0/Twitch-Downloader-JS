# Twitch Video Downloader

This is a Node.js script that allows you to download videos from Twitch using the twitch-dl library.

## Features
- Download Twitch videos by providing the video ID
- Specify the output directory where the downloaded video will be saved
- Customize the output file name format
- Retrieve video information such as title and description

## Prerequisites
- Node.js installed on your system
- twitch-dl library installed (npm install twitch-dl)

## Usage
1. Clone the repository or create a new file with the provided code.
2. Install the required dependencies by running the following command:
```bash
npm install twitch-dl
```

3. Replace the following variables in the code:
`videoId`: Set it to the ID of the Twitch video you want to download.
`outputDir`: Set it to the directory where you want to save the downloaded video.

4. Customize the options object if needed:
- `output`: Specify the output directory and file name format. You can use the following placeholders:
  - `%(title)s`: Video title
  - `%(ext)s`: Video file extension
5. Run the script using the following command:
```
node script.js
```
6. The script will download the specified Twitch video and save it to the specified output directory. It will also display the video title and description in the console.

## Example
```javascript
const TwitchDownloader = require('twitch-dl');

const videoId = '123456789';
const outputDir = '/path/to/directory';

const options = {
  output: `${outputDir}/%(title)s.%(ext)s`,
};

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
```
## Error Handling
The script includes error handling to catch any errors that may occur during the video download process. If an error occurs, an error message will be logged to the console.

## Dependencies
`twitch-dl`: A library for downloading videos from Twitch.

## License
This project is licensed under the MIT License.

## Acknowledgements
This script utilizes the twitch-dl library developed by the open-source community.

## Disclaimer
Please note that downloading videos from Twitch may be subject to their terms of service and copyright policies. Make sure you have the necessary permissions and comply with Twitch's guidelines when using this script.
