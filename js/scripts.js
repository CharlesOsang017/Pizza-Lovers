$(document).ready(function () {
  $("#here").click(function () {
    $(".about-section").show(3000);
    $(".text").hide();
  });
});

function theForms() {
  var name = document.forms["forms"].elements[0].value;
  var email = document.forms["forms"].elements[1].value;
  var message = document.forms["forms"].elements[2].value;

  if (name == "" && email == "") {
    alert("Fill in all the fields to continue");
  } else {
    if (name == "") {
      alert("Provide your name to continue");
    } else if (email == "") {
      alert("Provide a valid email to proceed");
    }
  }
  if (
    (name !== "" && email != "" && text == "") ||
    (name != "" && email != "" && text != "")
  ) {
    alert("Dear " + name + " your message was received successfully.");
  }
}

var form1 = document.getElementById('form-1')
console.log(form1);

function getTotal(q, s, ct,t){
    alert(parseFloat(q.value)*(parseFloat(s.value)+parseFloat(ct.value)+parseFloat(t.value)));
}
