const axios = require('axios')

module.exports = class ImageUtils {
    getImageBase64(url) {
        return new Promise(async (resolve, reject) => {
            try {
                let image = await axios.get(url, {
                    responseType: 'arraybuffer'
                });
                let returnedB64 = Buffer.from(image.data, 'binary').toString('base64');
                resolve(returnedB64)
            } catch (err) {
                reject(err)
            }
        })
    }
}