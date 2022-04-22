i=1;
check = 0;
var myInterval;

function start() {

    let val = document.getElementById("btnstart").innerHTML;

    if(val=="Start"){

        document.getElementById("btnstart").innerHTML="Stop";

        function boxColor(id){

             myInterval = setInterval(() => {
                console.log("setInterval is run "+id);
                document.getElementById(id).innerHTML = i;
                i++
            }, 1000);

            myTimer = setTimeout(() => {
                console.log("setTimeout is run " +id);
                clearInterval(myInterval);
                check = 1;
            }, 5000);

            clearTimeout(myTimer);

            return check;

        }

        async function interval1(){
            await new Promise((resolve, reject) => {
                if(boxColor("yellow") == 1)
                {
                    resolve(true);  
                }
            }
            );
            
        }
       
        async function interval2(){
            await new Promise((resolve, reject) => resolve(boxColor("green")));
        }

        async function interval3(){
            await new Promise((resolve, reject) => resolve(boxColor("red")));
        }

        interval1().then(
            interval2().then(
                interval3().then(
                    val="Start"
                )
            )
        );

    }

    else{
        if(document.getElementById("btnstart").innerHTML == "Stop"){

            document.getElementById("btnstart").innerHTML = "Start";
            stopTime();
            
        }

    }

    function stopTime(){

        clearInterval(myInterval);

        document.getElementById("yellow").innerHTML = "1";

        document.getElementById("green").innerHTML = "1";

        document.getElementById("red").innerHTML = "1";

    }
}