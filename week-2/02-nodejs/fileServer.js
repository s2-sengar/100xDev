/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
    
**/
const express = require('express');
const fs = require('fs');
const app = express();

const router=express.Router();

const getFileList=(path)=>{
  return new Promise((resolve,reject)=>{
    fs.readdir(path,(err,res)=>{
      if(err){
        reject(err)
      }
      resolve(res);
    })
  })
}

const getFileContent=(path)=>{
  return new Promise((resolve, reject) => {
    fs.readFile(path,'utf-8',(err,res)=>{
      if(err) reject(err);
      resolve(res)
    })
  })
}

router.route('/files')
  .get(async(req,res)=>{
    try {
      const fileList=await getFileList('./files')
      res.status(200).json(fileList)
    } catch (error) {
      res.status(500).json(error)
    }
  
  })

router.route('/file/:fileName').get(async(req,res)=>{
  try {
    const result=await getFileContent(`./files/${req.params?.fileName}`)
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("File not found")
  }
})

router.route('**').get(async(req,res)=>{
  res.status(404).send('Route not found')
})

app.use(router)
module.exports = app;