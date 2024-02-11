import fs from 'fs'
import util from 'util'
// import path from 'path'
// import { Aria2Helper } from './aria2Helper.mjs'
import { Throttle } from 'stream-throttle'
const statAsync = util.promisify(fs.stat)

//es6  class:
export class FileTransfer {
    constructor(targetDirectory, maxTransferSpeed) {
        this.targetDirectory = targetDirectory
        this.transferSpeed = maxTransferSpeed
    }
    async downloadFileClient(response, filePath, suggestedFileName) {
        let fileStats = undefined
        try {
            fileStats = await statAsync(filePath)
            console.log("File size in bytes: " + fileStats.size)
            const throttle = new Throttle({ rate: 8e+7 })
            const readableStream = fs.createReadStream(filePath, { 'highWaterMark': 4e+7 })
            // setting Content-Disposition: 'attachment' indicates that the content is an attachment for download, and the browser should not attempt to display it until it is fully downloaded and saved by the user:
            let headers =
            {
                'Content-Type': 'application/octet-stream', 'Content-Disposition': `attachment;filename="${suggestedFileName}"`, 'Content-Length': fileStats.size
            }
            //writeHead is method inside response object used for setting the status code and headers in response:
            response.writeHead(200, headers)
            // pipe method in Node.js is designed to connect the output of one stream to the input of another stream  - so it is essential to give response object inside pipe method.
            // When we pipe a readable stream to another stream data from the readable stream is automatically sent to the destination stream.

            //  readableStream.pipe(throttle).pipe(response), it establishes a pipeline for streaming data from the readableStream through the throttle instance and then to the response object. This pipeline is set up once and remains active until the stream ends or is explicitly closed.
            readableStream.pipe(throttle).pipe(response)
            readableStream.on('close', () => console.log(`File ${filePath} has been downloaded`))
            return
        }
        catch (err) {
            if (err) {
                response.status(404).send("Error, requested resource not found!!!")
                return
            }
        }
    }
}
