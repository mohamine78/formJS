
function deactivateToolTips() {
    const spans = document.getElementsByTagName("span");
    const spansLength = spans.length;

    for(let i = 0; i< spansLength; i++){
        if (spans[i].className == "tooltip"){
            spans[i].style.display = "none";
        }
    }

};

function getToolTip(elemHTML){
    while(elemHTML = elemHTML.nextSibling){
        if(elemHTML.className == "tooltip"){
            return elemHTML;
        }
    }

}

let check = {

};

//sexe

check["sexe"] = function(){

    let sexe = document.getElementsByName("sexe"),
    tooltip = getToolTip(sexe[1].parentNode);

   if (sexe[0].checked || sexe[1].checked){
    tooltip.style.display = "none";
    return true;
   }
   else{
    tooltip.style.display = "inline-block";
    return false;


   }
};

//lastName

check["lastName"] = function(id){
    console.log("check de lastName");
    
    let name = document.getElementById(id),
    tooltip = getToolTip(name);

    if(name.value.length >= 2){
        name.className = "correct";
        tooltip.style.display = "none";
        return true;

    }
    else{
        name.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;

    }
};
//firstName

check["firstName"] = check["lastName"];
    
//age

check["age"] = function(){
    let age = document.getElementById("age"),
    tooltip = getToolTip(age),
    ageValue = parseInt(age.value);

    if (ageValue > 0 && ageValue <= 99){
        age.className = "correct";
        tooltip.style.display = "none";
        return true;


    }
    else{
        age.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;

    }
};

//login

check["login"] = function(){
    let login = document.getElementById("login"),
    tooltip = getToolTip(login);
    if(login.value.length >= 4){
        login.className = "correct";
        tooltip.style.display = "none";
        return true;

    }
    else{
        login.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;

    }
};
//country

check["country"] = function(){
    let country = document.getElementById("country"),
    tooltip = getToolTip(country);
    if(country.value != "none"){
        tooltip.style.display = "none";
        return true;

    }
    else{
        tooltip.style.display = "inline-block";
        return false;

    }


};

//pwd1

check["pwd1"] = function(){
    let pwd1 = document.getElementById("pwd1"),
    tooltip = getToolTip(pwd1);
    if(pwd1.value.length >= 6){
        pwd1.className = "correct";
        tooltip.style.display = "none";
        return true;


    }
    else{
        pwd1.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;

    }

};
//pwd2

check["pwd2"] = function(){
    let pwd1 = document.getElementById("pwd1"),
    pwd2 = document.getElementById("pwd2"), 
    tooltip = getToolTip(pwd2);

    if (pwd1.value == pwd2.value && pwd2.value != ""){
        pwd2.className = "correct";
        tooltip.style.display = "none";
        return true;

    }
    else{
        pwd2.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }

   

};

//IIFE

// ->permet d'encapsuler le code afin de créer une portée locale et eviter ainsi le conflits  de noms global

(function(){

//form

const myForm = document.getElementById("myForm");
const listInputs = document.getElementsByTagName("input");
const listInputsLength = listInputs.length;

//onKeyup -> j'appuie sur une touche et je leve le doigt

for(let i=0; i < listInputsLength; i++){
    if(listInputs[i].type == "text" || listInputs[i].type == "password" ){
        listInputs[i].onkeyup = function(){
            check[this.id](this.id);// = check.country("country")
        }
    }
}

//Submit

myForm.onsubmit = function(e){

    e.preventDefault();

    let result = true;

    for( let i in check){
        result = check[i](i) && result;
    }

    if(result){
        alert("data ok")
    }
    else{
        alert('wrong data')
    }

     
    
}
//reset

myForm.onreset = function(e){

        for  (let i = 0; i < listInputs.length; i++){
            listInputs[i].className = "";
        }
        deactivateToolTips();

}

deactivateToolTips();
})();