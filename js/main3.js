i=1000;

function start() {

    if(document.getElementById("btnstart").innerHTML=="Start")
    {
        document.getElementById("btnstart").innerHTML = "Stop";


        // function boxColor(id){
        //     console.log("this is run"); 
        //     document.getElementById(id).innerHTML = i;
        //     i++;
        //     return "done";
        // }

        async function interval1(){

            let promise1 = new Promise((resolve, reject) => {
                setTimeout(() => 
                setInterval(() => {
                    console.log("this is run"); 
                    document.getElementById("yellow").innerHTML = i;
                   
                }, 1000)
                , 0)
                resolve("done");
                });
            
              let result = await promise1; 
              console.log(result);

              let promise2 = new Promise((resolve, reject) => {
                setTimeout(() => 
                setInterval(() => {
                    console.log("this is run"); 
                    document.getElementById("green").innerHTML = i;
                 
                }, 1000)
                , 5000)
                resolve("done");
                });
            
              let result2 = await promise2; 
              console.log(result2);


              let promise3 = new Promise((resolve, reject) => {
                setTimeout(() => 
                setInterval(() => {
                    console.log("this is run"); 
                    document.getElementById("red").innerHTML = i;
                   
                }, 1000)
                , 5000)
                resolve("done");
                });
            
              let result3 = await promise3; 
              console.log(result3);
        }

       
        interval1();






    }
    else{
        document.getElementById("btnstart").innerHTML = "Start";
    }
}