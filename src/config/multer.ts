// import crypto from 'crypto'
// import multer from 'multer'
// import { extname, resolve } from 'path'

// export default {
//     upload(folder: string) {
//         return {
//             storage: multer.diskStorage({
//                 destination: resolve(__dirname, '..', '..', folder),
//                 filename: (request, file, callback) => {
//                     const fileHash = crypto.randomBytes(16).toString('hex')
//                     const filename = `${fileHash}-${file.originalname}`

//                     return callback(null, filename)
//                 }
//             })
//         }
//     }
// }

import crypto from 'crypto'
import multer from 'multer'
import { resolve } from 'path'

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                // Alterando para o diretório temporário '/tmp'
                destination: resolve('/tmp', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString('hex')
                    const filename = `${fileHash}-${file.originalname}`
                    callback(null, filename)
                }
            })
        }
    }
}
