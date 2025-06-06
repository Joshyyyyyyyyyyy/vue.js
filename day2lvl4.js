    function runScript(){
    let input = document.getElementById("inputData").value;
    const value = input.split(",");

    let output = "";

    for (let i = 0; i < value.length; i++){
        let cleaned = value[i].trim();
        

        if (!isNaN(Number(cleaned))){
    output += "Value: " + cleaned + " — Type: Number<br>";
    } else if(cleaned === "true" || cleaned === "false") {
    output += "Value: " + cleaned + " — Type: Boolean<br>";
    } else if (cleaned === "String") {
    output += "Value: " + cleaned + " — Type: String<br>";
    }
    else if ( cleaned === "null"){
        output += "Value: " + cleaned + " — Type: Null<br>";
    } else {
    output += "Value: " + cleaned + " — Type: String<br>";
    }
    document.getElementById("output").innerHTML = output;
    }
    





    }