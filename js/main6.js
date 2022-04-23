var i=1;

var process = 0;

var myInterval1, myInterval2, myInterval3;

function five(){

    let promise5 = new Promise(function ( resolve, reject){
        
        i=1;
        
        
        console.log("inside five function ");    

        if( myInterval1 != false )
        {
            clearInterval(myInterval1);
        }

        if( myInterval2 != false )
        {
            clearInterval( myInterval2 );
        }

        if( myInterval3 != false )
        {
            clearInterval( myInterval3 );
        }

        
        document.getElementById("red").innerHTML = "1";
        document.getElementById("green").innerHTML = "1";
        document.getElementById("yellow").innerHTML = "1";
        document.getElementById("btnstart").innerHTML = "Start";

        check = 0;
 
        resolve(true);  

    });

    return promise5;

}



function start() {

    if( document.getElementById("btnstart").innerHTML == "Stop" && process == 1 ){
        
        console.log("stop button clicked");

        process = 0;
        
        document.getElementById("btnstart").innerHTML = "Start";

        console.log(" this is started that is the button is changed to Start ");

        five();

     }

    else if( document.getElementById("btnstart").innerHTML == 'Start' && process == 0) {

        console.log("start button clicked");

        process = 1;

        console.log(" this is started that is the button is changed to stop ");

        document.getElementById("btnstart").innerHTML="Stop";
            
        // console.log("this is started");
        
        function two(){

            let promise1 = new Promise( function ( resolve, reject ) {

                myInterval1 = setInterval(() => {
                    console.log("myInterval 1 run");
                    document.getElementById("yellow").innerHTML = i;
                    i++;
                }, 1000);

                myInterval1 = true;  

                setTimeout(() => {
                    console.log("settimeout1 is run, so clearInteval1 is run");
                    clearInterval(myInterval1);
                    myInterval1 = false;
                    resolve(true);
                    i=6;
                }, 5000);

                
            });
            
            return promise1;
        }

        function three(){

            let promise2 = new Promise( function ( resolve, reject ) {

                 myInterval2 = setInterval(() => {
                    console.log("myInterval 2 run");
                    document.getElementById("green").innerHTML = i;
                    i++;
                }, 1000);

                myInterval2 = true;  

                setTimeout(() => {
                    console.log("settimeout2 is run, so clearInteval2 is run");
                    clearInterval(myInterval2);
                    myInterval2 = false;
                    resolve(true);
                    i=11;
                }, 5000); 

            });
            
            return promise2;
        }

        function four(){

            let promise3 = new Promise( function ( resolve, reject ) {

                 myInterval3 = setInterval(() => {

                    console.log("myInterval 3 run"); 
                    document.getElementById("red").innerHTML = i;
                    i++;
                }, 1000);

                myInterval3 = true;  

                setTimeout(() => {
                    console.log("settimeout3 is run, so clearInteval3 is run");
                    clearInterval(myInterval3);
                    myInterval3 = false;  
                    resolve(true);
                    i=1;
                }, 5200); 
            });

            return promise3;

        }

        async function one(){

            let result1 = await two();

            console.log(result1);

            console.log("two is running");

            let result2 = await three();

            console.log(result2);

            let result3 = await four();

            console.log(result3);

            if(result1 == true && result2 == true && result3 == true ){
                await five();
            }
        }

        one();
    }

  
}


