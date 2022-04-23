// this is 90% right please dont edit it

var i=1
function start(){


    function stopProcess(){

        let promise = new Promise(function(resolve, reject){
            console.log("stop Process function is run");
            document.getElementById("btnstart").innerHTML = "Start";
            document.getElementById("yellow").innerHTML = "0";
            document.getElementById("red").innerHTML = "0";
            document.getElementById("green").innerHTML = "0";
            i=1;
            resolve("stopProcess over");
        });

        return promise;
      
    }

    function boxColor(id) {
        let promise = new Promise(function(resolve,reject){

            interval = setInterval(() => {
                document.getElementById(id).innerHTML = i;
                console.log("interval is running with i = "+i+" and color "+id);
                i++;            
            }, 1000);
            
            setTimeout(() => {
                console.log("setTimeout is running with color " + id);
                clearInterval(interval);  
                resolve("done "+id);
            }, 5000);
        })
        return promise;
    }

    async function one(color) {


            let string = "done "+color;
            let result = await boxColor(color);
            if( result == string){
                return true;
            }
        

    }

    async function startProcess() {

        document.getElementById("btnstart").innerHTML = "Stop";
        let result1 = await one("yellow");
        let result2 = await one("green");
        let result3 = await one("red");

        if(result1 == true && result2 == true && result3 == true)
        {
            await stopProcess();
        }

    }

    startProcess();
}