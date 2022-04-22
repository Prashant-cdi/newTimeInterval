function start() {

    if(document.getElementById("btnstart").innerHTML == "Start"){
        
        document.getElementById("btnstart").innerHTML = "Stop";
        
        var i=1;

        function boxcolor(id){

            setTimeout(function(){

                console.log("setTimeout is run "+ id);
  
                setTimeout(() => {
                    console.log("setTimeout2 is run "+ id);
                    document.getElementById(id).innerHTML = i;
                    i++;
                }, 1000);

                return "done";

            },5000);


    }

        async function begin(){

            console.log("begin is run");

                    let result1  = await new Promise(

                        function(resolve) {

                            setTimeout( 
                            function(){
                               resolve(boxcolor("yellow"));
                            },0);
                            

                        }); 

                    console.log(result1);
                    let result2  = await new Promise(function(resolve){
                        if(boxcolor("green")=="done");
                        resolve(true);
                    });
                    console.log(result2);
                    let result3  = await new Promise(function(resolve){
                        if(boxcolor("red")=="done");
                        resolve(true);
                    });
                    console.log(result3);
        }
                        



        // async function begin2(){

        // }


        begin();
  

       

    }

    else if(document.getElementById("btnstart").innerHTML == "Start"){

        document.getElementById("btnstart").innerHTML = "Stop";
    }

    


    
}