/* planttype : this will have value of select id value "selectType" (<select id="selectType" name="selecttype" onchange="populateplant(this.id,'SelectPlant')">)
   plantname : this will have value of select id value "selectPlant" <select id="selectPlant" name="SelectPlant">
*/
function populateplant() {
    var planttype = document.getElementById("selectType");
    var plantname = document.getElementById("selectPlant");
    plantname.innerHTML = ' ';

    if(planttype.value == "Flowering plants") {
      var arrayPlant = ["select plant|Select Plant","rose|Rose","lily|Lily","jasmine|Jasmine","lotus|Lotus"]; /* ["rose|Rose"] value and label , equal to HTML tag values <option value="Lily">Lily</option> */
    } else if(planttype.value == "Vegetable plants") {
        arrayPlant = ["select plant|Select Plant","brinjal|Brinjal","tomato|Tomato","ladies finger|Ladies Finger"];
    } else if(planttype.value == "Fruit plants") {
        arrayPlant = ["select|Select","mango|Mango","papaya|Papaya","pomegranate|Pomegranate","chikoo|Chikoo"];
    }
        for(plantList in arrayPlant) {
            var pair = arrayPlant[plantList].split("|");
            var optionTag = document.createElement("option");
            optionTag.value = pair[0];
            optionTag.label = pair[1];
            var select = document.getElementById("selectPlant");
            select.appendChild(optionTag);
        }   
}

/* validate singup for */

function loginvalidate() {
    var usrName = document.getElementById("defaultForm-email").value;
    var pswd = document.getElementById("defaultForm-pass").value;
    var char = "@";
    var count = 0;
    console.log("mailid: " + usrName);
    console.log("pswd: " + pswd);
    for (var i = 0; i < usrName.length; i++) {
        if(usrName[i]== char){
        count++;
        }
    }
    console.log("count: " + count);
  }
