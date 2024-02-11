import { log } from 'console'
import fs from 'fs'
fs.readFile('Requirement_2/poem.txt', 'utf8', (err, data) => {
    if(err){
        console.log('An Error occured while reading file: ',err)
        return
    }

    console.log(data);
})
