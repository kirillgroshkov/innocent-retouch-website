/*

ts-node -P scripts ./scripts/cloudinarySizes.ts

*/

require('dotenv').config()
import * as P from 'bluebird'
import * as cloudinary from 'cloudinary'
import * as fs from 'fs-extra'
import * as klawSync from 'klaw-sync'
import * as path from 'path'
import * as util from 'util'

cloudinary.config({
  cloud_name: 'kirill',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

const list = util.promisify(cloudinary.v2.api.resources)

list({
  max_results: 500,
}).then(r => {
  const resources = r.resources
  const images = r.resources.map(_r => `${_r.public_id}.${_r.format}`)
  console.log(images)

  const sizes = resources.reduce((_sizes, _r) => {
    const id = `${_r.public_id}.${_r.format}`
    _sizes[id] = `${_r.width}x${_r.height}`

    return _sizes
  }, {})
  console.log(sizes)
})
