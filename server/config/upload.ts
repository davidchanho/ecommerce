import multer from "multer";

/**
 * File upload storage
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/assets");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

/**
 * File uploader
 */
const upload = multer({ storage });

export default upload;
