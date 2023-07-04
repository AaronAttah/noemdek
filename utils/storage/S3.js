const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client } = require ("@aws-sdk/client-s3");
require('dotenv').config()



const s3 = new S3Client({
    // apiVersion: '2006-03-01',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_BUCKET_REGION,
});

const fileFilter = (req, file, cb) => {

    // console.log(file.mimetype, file)
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/webp'|| file.mimetype === 'application/pdf' || file.mimetype === 'application/octet-stream') {
        cb(null, true);
    } else {
        cb(new Error('File is not valid'), false);
    }
}

exports.upload = (path) => multer({
    storage: multerS3({
        s3,
        bucket: process.env.S3_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
            // console.log(s3.config)
            
        },
        key: function (req, file, cb) {
            //get the file extension
            const original_file = file.originalname.split('.');
            const extension = original_file[original_file.length - 1];

            cb(null, `${path}/${Math.floor(Math.random() * 10000)}-${Date.now()}.${extension}`);
        },
    }),
    limits: {
        fieldSize: 1024 * 1024 * 5 //5mb
    },
    fileFilter: fileFilter
});

exports.deleteFileFromS3 = async (key) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    };

    await s3.deleteObject(params).promise();
}
