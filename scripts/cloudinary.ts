/*

yarn tsn ./scripts/cloudinary.ts

curl 'https://api.cloudinary.com/v1_1/kirill/resources/image'

 */

// tslint:disable:variable-name

import { pMap } from '@naturalcycles/js-lib'
const cloudinary = require('cloudinary')
import * as klawSync from 'klaw-sync'
import * as path from 'path'
import * as util from 'util'
import { rootDir } from '../src/cnst/paths.cnst'
const imgDir = rootDir + '/src/static/img'

const started = Date.now()

cloudinary.config({
  cloud_name: 'kirill',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

const upload = util.promisify(cloudinary.v2.uploader.upload)
const list = util.promisify(cloudinary.v2.api.resources)

const concurrency = 1

list({
  max_results: 500,
}).then((r: any) => {
  const images = r.resources.map((_r: any) => _r.secure_url)
  console.log(images)
})

async function _doUpload() {
  const files = klawSync(imgDir, {
    nodir: true,
  })
    .map(i => i.path)
    .filter(f => !path.parse(f).name.startsWith('.'))

  await pMap(files, async f => {
    const p = path.parse(f)
    // console.log(f, path.parse(f))
    const dir = p.dir.substring(imgDir.length + 1)
    const public_id = `${dir}/${p.name}`
    // console.log(public_id)

    const _r = await upload(f, {
      public_id,
      unique_filename: false,
    })
    console.log(`<< ${public_id}`)
  })

  // console.log(r)
  const sec = Math.round((Date.now() - started) / 1000)
  console.log(`done in ${sec} sec using ${concurrency} concurrency`)
}
