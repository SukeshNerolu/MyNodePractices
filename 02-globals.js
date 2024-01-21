// GLOBALS -  NO WINDOW
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname, 'path')
setInterval(() => {
    console.log('Hello world')
}, 1000)