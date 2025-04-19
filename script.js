var names = document.getElementById("name");
var age = document.getElementById("age");
var course = document.getElementById("course");
var email = document.getElementById("email");
// var save = document.getElementById("save_btn");
var form = document.querySelector("form");
var output = document.getElementById("output_table");
var del =  document.getElementById("delete")

form.addEventListener("submit", function (e) {
    e.preventDefault()
var selectedGenderElement = document.querySelector('input[name="gender"]:checked');
  var selectedGender = selectedGenderElement ? selectedGenderElement.id : 'Not Specified';


  var row = document.createElement("tr");
  row.innerHTML = `
        <td>${names.value}</td>
        <td>${age.value}</td>
        <td>${selectedGender}</td>
        <td>${course.value}</td>
        <td>${email.value}</td>
        <td><button onclick="deleted(event)">Delete</button></td>

    `;
    output.append(row)

      
       names.value = '';
       age.value = '';
       course.value = '';
       email.value = '';
       document.querySelector('input[name="gender"]:checked').checked = false;

});


function deleted(event){
    event.target.closest("tr").remove();


}

//   if (!names || !age || !email || !course || !selectedGenderElement) {
//     alert("Please fill in all the fields before saving.");
//     return;
//   } 
