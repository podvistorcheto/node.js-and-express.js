const {readFile, writeFile} = require('fs');
// async works with a callback
// we run callback when we are done with whatever 
// functionality we are doing
console.log('start...')
readFile('./content/first.txt', 'utf8', function(error, result) {
    if(error) {
        console.log(error);
        return -1;
    } else {
        const first = result;
        readFile('./content/second.txt', 'utf8', function(error, result){
            if (error) {
                console.log(error);
                return -2;
            }  else {
                const second = result;
                writeFile('./content/result-async.txt', `New ASYNC file created: Here is the result: ${first}, ${second}`, function(error, result){
                    if (error) {
                        console.log(error);
                        return -3;
                    } else {
                        console.log(result);
                        console.log('done with this task');
                    }
                })
            }
        })
        // console.log(result);
        // return 1;
    }
})
console.log('starting next task...');

// Now JS reads the code asynchronically 
// hence here the logs show that the moment we start with this task 
// we immediatly offload this task and we continue with our code
// that way lets say user1 want to get the functionallity, then node.js //offloads this task and other users can use the app at the samer time
