
/* für den Taschenrechner*/
function insert (num){
    document.form.textview.value = document.form.textview.value + num;
}

function clean (){
    document.form.textview.value ="";
}

function back (){
   let exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0, exp.length-1);
}

function equal (){
    let exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}

    /* Für das Burger-menü*/
    document.querySelector(".burger").addEventListener("click", function(){
        this.classList.toggle("active");
    document.querySelector(".menu-bar").classList.toggle("open"); })

    