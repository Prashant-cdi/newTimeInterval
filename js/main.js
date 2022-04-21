var i;

function start() {
    
    i=1;

    if( document.getElementById("btnstart").innerHTML == 'Start' ){
      
        document.getElementById("btnstart").innerHTML = 'Stop';

             starttime = setInterval( 
                function(){

                if(i>=1 && i<=5){
                document.getElementById("yellow").innerHTML = i;
                }
                
                if(i>=6 && i<=10){
                    document.getElementById("green").innerHTML = i;
                }

                if(i>=11 && i<=15){
                    document.getElementById("red").innerHTML = i;
                }

                if(i==16){

                    i=-200;

                    document.getElementById("btnstart").innerHTML = 'Start';

                    stopTime(starttime);
                    
                }

                i++;
            },

            1000);
        
    }

    else if( document.getElementById("btnstart").innerHTML == 'Stop' ) {

        stopTime();

        document.getElementById("btnstart").innerHTML = 'Start';
    }

    function stopTime(data){

        if(data == undefined){
            data = starttime;
        }

        clearInterval(data);    

        document.getElementById("yellow").innerHTML = "1";

        document.getElementById("green").innerHTML = "1";

        document.getElementById("red").innerHTML = "1";

    }

}
    


 
    
    