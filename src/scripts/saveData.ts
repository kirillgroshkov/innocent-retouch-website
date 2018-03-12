/*

ts-node -P src/scripts/tsconfig.json -r tsconfig-paths/register src/scripts/saveData.ts

*/

import * as fs from 'fs-extra'
import { dataDir } from '../cnst/paths.cnst'
import { env } from '../environment/environment'
import { apiService } from '../srv/api.service'
import { gotService } from '../srv/got.service'

doWork()
  .then(() => console.log('done'))
  .catch(err => console.error(err))

async function doWork () {
  const _r = await gotService.get(`${env().apiUrl}/innocent/allData`)
  const r = 'export const D = ' + JSON.stringify(_r, undefined, 2)
  await fs.writeFile(dataDir + '/data.ts', r)
}
