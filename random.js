function showRandomNumber(){
    var time = 1;
    var myNumber = 1;
    var rand = 1;

    var interval = setInterval(function() { 
        if (time <= 3) { 
           rand = Math.floor(Math.random() * (6 * 6 - 1 * 6) + 1 * 6) / (1*10) + 25.0;
           if (rand % 1 == 0){
            
           }
           else {
            document.getElementById("myNumber").innerHTML = rand;
           }
        }
        else { 
           clearInterval(interval);
        }
     }, 4000);
}