                            function runScript(){
                                let input = document.getElementById("inputData").value;
                                
                                let output = typeof input;
                                
                                if ( typeof input === "string"){
                                    document.getElementById("output").innerHTML = "THis is String";
                                } else if (!isNaN(Number(input))){
                                    document.getElementById("output").innerHTML =  "this is a number";
                                }else{
                                    document.getElementById("output").innerHTML = output;
                                }

                                
                            }