(function(){
    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            display.value +=value;
        })
    });

    equal.addEventListener('click', function(e){
        if(display.value ===''){
            display.value = "";
        } 
        else{
            if(isNaN(display.value.charAt(display.value.length-1))){
                display.value = display.value.slice(0,-1);
            }
            let answer = eval(display.value);
            display.value = answer;;
        }
    })

    clear.addEventListener('click', function(e){
        display.value = "";
    })



})();