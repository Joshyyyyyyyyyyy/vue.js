function runScript(){
    let input = document.getElementById("inputData").value;
    const value = input.split(",");

    let output = "";
    let numCount = 0;
    let boolCount = 0;
    let stringCount = 0;
    let nullCount = 0;
    let undefinedCount = 0;

    for (let i = 0; i < value.length; i++ ){
        let cleaned = value[i].trim();


        if(!isNaN(Number(cleaned))){
            numCount++;
            output += "Value " + cleaned + "Type: Number " + numCount + "<br>";
        } else if (cleaned === "true" || cleaned === "false"){
             boolCount ++;
            output += "Value " + cleaned + "Type: Boolean" + boolCount + "<br>"; 
        } else if (cleaned === "null"){
             nullCount ++;    
            output += "Value " + cleaned + "Type: Null" + nullCount + "<br>" ;
        }else if (cleaned === "undefined"){                                                  
        undefinedCount ++;
            output += "Value " + cleaned + "Type: Undefined" + undefinedCount + "<br>"; 
        } else {
                   stringCount ++;
            output += "Value " + cleaned + "Type: String" + stringCount + "<br>";
            
        }
        output += "<br>Summary:<br>";
        output += "Numbers: " + numCount + "<br>";
        output += "Booleans: " + boolCount + "<br>";
        output += "Nulls: " + nullCount + "<br>";
        output += "Undefineds: " + undefinedCount + "<br>";
        output += "Strings: " + stringCount + "<br>";


        document.getElementById("output").innerHTML = output;
    }
}
