import fs from 'fs'
import path from 'path';

export class FileManager {
    #targetPath = undefined;
    constructor(path) {
        //fs.existsSync return true if there is file or directory at the specified path:
        if (!fs.existsSync(path)) {
            fs.mkdir(path, (err) => {
                if (err) {
                    throw new Error(err)
                }
            })
        }
        this.#targetPath = path;
        return;
    }
    getTargetPath() {
        return this.#targetPath;
    }
    getDirectoryContents() {
        if (this.#targetPath == undefined) {
            console.log("Error target path is not set!!!");
            return [];
        }

        return new Promise((resolve, reject) => {
            fs.readdir(this.#targetPath, (err, files) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(files);
                }
            })
        })
    }
    getFileStats(fileName) {
        if (this.#targetPath == undefined) {
            console.log("Error target path is not set!!!");
            return {};
        }
        return new Promise((resolve, reject) => {
            let filePath = path.join(this.#targetPath, fileName);
            if (!fs.existsSync(filePath)) {
                let error = "File: " + filePath + " does not exist";
                reject(error);
            }
            fs.stat(filePath, (error, stats) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(stats);
                }
            })
        })
    }
    getFileStatsInDirectory() {
        let statObject = {};
        if (this.#targetPath == undefined) {
            console.log("Error target path is not set!!!");
            return {};
        }
        return new Promise((resolve, reject) => {
            this.getDirectoryContents().then((files) => {
                const fileStatsPromises = files.map(file => {
                    let filePath = path.join(this.#targetPath, file);
                    if (!fs.existsSync(filePath)) {
                        let error = "File: " + filePath + " does not exist";
                        reject(error);
                    }
                    return new Promise((resolve, reject) => {
                        //fs.stat() method takes the filepath and returns stats of the file or directory present at that path or location:
                        fs.stat(filePath, (error, stats) => {
                            if (error) {
                                reject(error);
                            }
                            else {
                                statObject[file] = stats;
                                resolve();
                            }
                        })
                    });
                });
                Promise.all(fileStatsPromises).then(() => {
                    resolve(statObject);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }
    //This method returns true when there is directory at the specified path or else it returns false:
    isDirectory(fileName) {
        if (this.#targetPath == undefined) {
            console.log("Error target path is not set!!!");
            return {};
        }
        let filePath = path.join(this.#targetPath, fileName);
        if (fs.existsSync(filePath)) {
            return fs.statSync(filePath).isDirectory();
        }
    }
    //This method returns true when file is present at the  specified path or else it returns false:
    isFile(fileName) {
        if (this.#targetPath == undefined) {
            console.log("Error target path is not set!!!");
            return {};
        }
        let filePath = path.join(this.#targetPath, fileName);
        if (fs.existsSync(filePath)) {
            return fs.statSync(filePath).isFile();
        }
    }
}
