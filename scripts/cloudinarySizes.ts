/*

yarn tsn ./scripts/cloudinarySizes.ts

*/

const cloudinary = require('cloudinary')
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
}).then((r: any) => {
  const resources = r.resources as any[]
  const images = r.resources.map((_r: any) => `${_r.public_id}.${_r.format}`)
  console.log(images)

  const sizes = resources.reduce((_sizes, _r) => {
    const id = `${_r.public_id}.${_r.format}`
    _sizes[id] = `${_r.width}x${_r.height}`

    return _sizes
  }, {})
  console.log(sizes)
})
