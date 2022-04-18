const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/imgs')
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.slice(file.originalname.lastIndexOf('.'))
    const uniqueSuffix = Date.now() +  ext
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

module.exports = upload;
