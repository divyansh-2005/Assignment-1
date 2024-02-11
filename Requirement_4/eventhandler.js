import fs from 'fs'


// 1] Attaching Events to the Process Object:
process.on('exit', () => {
    console.log('Exit event called');
});

process.on('unhandledRejection', () => {
    console.log('unhandledRejection event called');
});

// 2] Promisified Version of fs.readFile:
const readFileAsync = async (filename) => {
    try{
        return await fs.promises.readFile(filename, 'utf8')
    } catch (error){

        // 4] Testing the UnhandledRejection Event:
        throw new Error('Error from catch handler')
    }
}

// 3] Using incorrect file name to cause an error
readFileAsync('example.txt')
    .then(data => console.log(data))
    .catch(error => {
        console.log('Error:',error.message);

        // displaying error message
        throw new Error('Error:',error.message)
    })


