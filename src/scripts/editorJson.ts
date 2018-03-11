/*

ts-node -P src/scripts/tsconfig.json -r tsconfig-paths/register src/scripts/editorJson.ts

*/

/*
"images": [
    {
      "filename": "drink.jpg",
      "alt": "Pontus Lindström",
      "res": "1543x2160"
    }
  ]
 */

import { images, imagesAlt, imageSizes } from '../cnst/images'

doWork()
  .then(() => console.log('done'))
  .catch(err => console.error(err))

async function doWork () {
  const groups = Object.keys(images)
  const r: any = {}

  groups.forEach(group => {
    r[group] = []

    images[group].forEach(filename => {
      const i = {
        filename,
        res: imageSizes[filename],
        alt: imagesAlt[filename],
      }

      i.filename = i.filename.substr(i.filename.indexOf('/') + 1)

      r[group].push(i)
    })
  })

  console.log(JSON.stringify(r, undefined, 2))
}
