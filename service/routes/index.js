const {Router} = require ("express")
const fs  =  require("fs")

const router = Router();

const PATH_ROUTES = __dirname

const remoteExtension = (fileName) => {
    return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = remoteExtension(file)
    if(name !== "index"){
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports= router