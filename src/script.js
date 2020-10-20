
function showSubmited (){
    let fromFields = document.getElementById("form").elements;
    let obj ={};
    for(let i = 0 ; i < fromFields.length ; i++){
        let item = fromFields.item(i);
        obj[item.name] = item.value;
    }
    updateResultTable(obj);
    updateLuggageTable(obj.options);
}

function updateResultTable(formData){
    document.getElementById("name-result").innerHTML= formData.name;
    document.getElementById("zip-result").innerHTML= formData.zip;
    document.getElementById("city-result").innerHTML= formData.city;
    document.getElementById("address-result").innerHTML= formData.address;
    document.getElementById("phone-result").innerHTML= formData.phone;
    document.getElementById("email-result").innerHTML= formData.email;
    document.getElementById("option-result").innerHTML= formData.options;
}

function updateLuggageTable(option){
    let luggageOption = Array.from(document.getElementById(option).children);

    document.getElementById("balesetbiztositasi-limit").innerHTML = luggageOption[1].innerHTML;
    document.getElementById("keszpenz").innerHTML = luggageOption[2].innerHTML;
    document.getElementById("poggyasz").innerHTML = luggageOption[3].innerHTML;
    document.getElementById("poggyasz-limit").innerHTML = luggageOption[4].innerHTML;
}

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener("click", ()=> showSubmited());
console.log(form);



