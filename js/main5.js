function start() {
    document.getElementById('btnstart').innerHTML = "Stop";


    function two(){

        let promise1 = new Promise( function ( resolve,reject ) {


            setTimeout(() => {
                resolve("success");
            }, 1000);

        });

        return promise1;
    }


    async function one(){

        console.log("one is running");
        let result1 = await two();
        console.log(result1);
        console.log("two is running");

    }
    
    one();

}