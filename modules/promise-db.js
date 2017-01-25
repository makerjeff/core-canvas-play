/**
 * Created by jeffersonwu on 1/24/17.
 */
const chalk = require('chalk');

//DUMMY promise module that delays a few seconds before returning information.
//use this to simulate an async operation


module.exports.getFakeAsyncDataObject = getFakeAsyncDataObject;


function getFakeAsyncDataObject(delay, state) {

    // and randomize resolve or reject states
    return new Promise(function(resolve, reject){
        setTimeout(function(){

            if(state == 'resolve') {
                resolve({status: 'completed', payload: {message: 'you have data! '}});
                console.log(chalk.yellow('promise-db::coerce-resolved!'));

            }

            else if (state == 'reject') {
                reject({status: 'rejected', payload: {message: 'you were rejected. '}});
                console.log(chalk.yellow('promise-db::coerce-rejected!'));

            } else {
                switch (Math.floor(Math.random() * 2)) {
                    case 0:
                        resolve({status: 'completed', payload: {message: 'you have data! '}});
                        console.log(chalk.yellow('promise-db::random-resolved!'));
                        break;
                    case 1:
                        reject({status: 'rejected', payload: {message: 'you were rejected. '}});
                        console.log(chalk.yellow('promise-db::random-rejected!'));
                        break;
                    default:
                        return;
                }
            }
        }, delay);
    });

}