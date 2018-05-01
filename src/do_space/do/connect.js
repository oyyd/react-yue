const http = require('http')
const https = require('https')
const AWS = require('aws-sdk')

// NOTE: object structure
// const params = {
//   Body: 'The contents of the file',
//   Bucket: 'test_bucket',
//   Key: 'file.ext',
// }

// eslint-disable-next-line
function mySSLAgent() {
  const httpAgent = new http.Agent()
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // changed to false, different from the default one
  })

  return [httpAgent, httpsAgent]
}

class DoSpace {
  constructor(opt) {
    const { endpoint, accessKeyId, secretAccessKey } = opt
    this.spacesEndpoint = new AWS.Endpoint(
      // 'sgspace.sgp1.digitaloceanspaces.com',
      endpoint
    )

    this.s3 = new AWS.S3({
      // httpOptions: {
      //   agent: new https.Agent({
      //     rejectUnauthorized: false, // changed to false, different from the default one
      //   }),
      // },
      endpoint: this.spacesEndpoint,
      accessKeyId,
      secretAccessKey,
    })
  }

  async putObject(params) {
    // console.log('params', params)
    return new Promise((resolve, reject) => {
      this.s3.putObject(params, (err, data) => {
        if (err) {
          reject(err)
          return
        }

        resolve(data)
      })
    })
  }

  async getObject(params) {
    return new Promise((resolve, reject) => {
      this.s3.getObject(params, (err, data) => {
        if (err) {
          reject(err)
          return
        }

        resolve(data)
      })
    })
  }

  getObjectStreamByKey(key) {
    return this.s3.getObject({
      Bucket: SPACE_BUCKET,
      Key: key,
    }).createReadStream()
  }
}

module.exports = {
  DoSpace,
}

// if (module === require.main) {
//   const doSpace = new DoSpace()
//   const path = require('path')
//   const fs = require('fs')
//
//   const DEFAULT_FILE_P = path.resolve(__dirname, '../../test_assets/img.jpg')
//
//   async function readFileBuffer() {
//     return new Promise(resolve => {
//       fs.readFile(DEFAULT_FILE_P, (err, data) => {
//         resolve(data)
//       })
//     })
//   }
//
//   readFileBuffer()
//     .then(data => {
//       console.log('data', data)
//       return doSpace.putObject({
//         Body: data,
//         Bucket: 'test_bucket',
//         Key: 'path/img.jpg',
//       })
//     })
//     .catch(err => {
//       console.log('err', err)
//     })
// }
