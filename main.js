var employeeListHolder=document.querySelector(".employees-list");
var interviewListHolder = document.querySelector(".interviews");
var addEmployeemodal = document.querySelector("#employeemodal");
var addInterviewmodal = document.querySelector("#interviewmodal");

addEmployeemodal.style.display="none";
addInterviewmodal.style.display="none";

function addEmployee(){
  var name = document.querySelector("#name").value;
  var surname = document.querySelector("#surname").value;
  var position = document.querySelector("#position").value;
  var department = document.querySelector("#department").value;
  var email = document.querySelector("#email").value;
  var salary = document.querySelector("#salary").value;

  var newItem = `
  <li>
    <div class="employee-card" id="employee-1">
      <img src="default.jpg" class="user-img" alt="">
      <span>
        <div class="employement-details" id="employee1-details">
          <span class="name-format">`+name+`</span>
          <span class="name-format">`+surname+`</span>
          <br>
          <span>`+position+`</span>
          <br>
          <span>`+department+`</span>
          <br>
          <span>`+email+`</span>
          <br>
          <span>₹`+salary+`</span>

        </div>
      </span>

    </div>
  </li>
  `;
  employeeListHolder.insertAdjacentHTML('beforeend',newItem);
  addEmployeemodal.style.display="none";

}
function showAddEmpmodal(){
  addEmployeemodal.style.display="block";
}
function addInterview(){
  var departmentInterview=document.querySelector("#int-department").value;
  var positionInterview=document.querySelector("#int-position").value;
 var newInterview= `
 <li>
   <div class="list-item">
     <h3>`+positionInterview+`</h3>
     <p>Advanced `+departmentInterview+` </p>
     <button class="accept-btn"type="button" name="button">Accept</button>
     <button class="reject-btn"type="button" name="button">Reject</button>
   </div>
 </li>
 `;
 interviewListHolder.insertAdjacentHTML('beforeend',newInterview);
 addInterviewmodal.style.display="none";
}
function showAddIntmodal(){
  addInterviewmodal.style.display="block";
}
function cancelEmployee(){
  addEmployeemodal.style.display="none";
}
function cancelInterview(){
  addInterviewmodal.style.display="none";
}
