/**
 * Created by jeffersonwu on 1/8/17.
 */

// ========================================
// DEBUG MODE MODULE ======================
var Debug = {
    debugModeOn: true,
    log: function(message){
        if(Debug.debugModeOn === true) {
            console.log(message);
        }
    }
};
// DEBUG MODE MODULE ======================
// ========================================
