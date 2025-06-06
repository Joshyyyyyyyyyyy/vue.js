function runScript(){

    let input = document.getElementById("inputData").value;
    let cleanedInput = input.trim();
    

        if(!isNaN(Number(cleanedInput))){
        document.getElementById("output").innerHTML = "This is is an number";
    } else {
        document.getElementById("output").innerHTML = "This is not number";
    }


}