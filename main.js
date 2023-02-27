let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
  menu.classList.toggle("move")
};

// Email JS
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(name.value === "" || email.value === "" || msg.value === ""){
      emptyError();
    } else {
      sendmail (name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name,email,msg){

  emailjs.send("service_zuztacj","contact_form",{
  from_name: email,
  name: name,
  message: msg,
  });

}

function emptyError() {

  swal({
    title:"Error",
    text: "Fields cannot be empty!",
    icon: "error",
  });

}

function success() {

  swal({
    title: "Email Sent Successfully",
    text: "Thank you",
    icon: "success",
  });
  formReset();

}

function formReset() {
  document.getElementById("contact-form").reset();
}