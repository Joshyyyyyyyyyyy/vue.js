const contact = [];

function addContact(){
    

    let text = document.getElementById("nameInput").value;
    let number = document.getElementById("ageInput").value;

    const user = {
    name: text,
    age: number
    };

 contact.push(user);

 let output = "";
  for (let i = 0; i < contact.length; i++) {
    output += `Name: ${contact[i].name} <br> Age: ${contact[i].age} <br><br>`;
  }

   
    document.getElementById("output").innerHTML = output;
}