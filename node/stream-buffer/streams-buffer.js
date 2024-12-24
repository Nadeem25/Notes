// ---------------------- Streams ----------------------------------------
// 1. A stream is sequence of data that is being moved from one point to another point over time.
// Eg: A stream of data being transferred from one file to another file within the same computer

// 2. Process streams of data in chunks as they arrived instead of waiting entire data to be available before processing.
// Eg: Watching video on YouTube.
// The data arrives in chunks and you watch in chunks while the rest of the data arrives over time.

// ------------------------ Buffer ----------------------------------
// Take example of roller coaster

// 30 people rides capacity

/* Scenario 1: 
100- People arrive
30- People acoomodated
70 - People in queue (Waiting) */

/* Scenario 2: 
1- Person arrive  (Waiting)
But the guideline is wait for atleast 10 people
*/

/* Area where people wait is nothing but buffer*/

/* 
1. NodeJs cannot control the pace at which data arrives in the stream.
2. It can only decide when is the right time to send the data for processing.
3. If there already data processed or too little data to process, NodeJs puts the arriving data in Buffer.
4. It is an intentionally small area that NodeJs maintain in the runtime to process stream of data.

Eg: Streaming a video online
1. If your internet connection is fast, the speed of the stream will be fast enough to fill up the buffer and send it for processing.
That will repeat till the stream is finished.

2. If your connection is slow, after processing chunks of data that arrived, 
video player will display loading spinner which indicates it is waiting for more data to arrive.

Once the buffer is filled up and data is processed, the video player will show the video.
While the video is playing, more data will continue to arrive and wait in Buffer.

*/

const fs = require('node:fs')

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    highWaterMark: 2
})

const writableStream = fs.createWriteStream('./file1.txt', {
    flag: 'a'
})

readableStream.on('data', (chunk) => {
    console.log(`Data in chunk:`, chunk);
    writableStream.write(chunk)
})
