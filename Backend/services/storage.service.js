const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file) {
    if (!process.env.IMAGEKIT_PRIVATE_KEY) {
        throw new Error("IMAGEKIT_PRIVATE_KEY is missing in Backend/.env");
    }

    const result = await imagekit.files.upload({
        file: file.buffer.toString("base64"),
        fileName: file.originalname || "image.jpg",
        folder: "/posts",
        useUniqueFileName: true,
    })
    return result;
}

module.exports = uploadFile;
