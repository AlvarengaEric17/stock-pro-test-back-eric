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

import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: (req, file, callback) => {
          const destinationPath = process.env.NODE_ENV === 'production'
            ? '/tmp' // Em produção, use a pasta temporária
            : resolve(__dirname, '..', '..', folder); // Localmente, use a pasta configurada

          callback(null, destinationPath);
        },
        filename: (req, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString('hex');
          const filename = `${fileHash}-${file.originalname}`;

          callback(null, filename);
        },
      }),
    };
  },
};
