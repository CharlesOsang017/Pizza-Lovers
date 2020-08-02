$(document).ready(function () {
  $("#here").click(function () {
    $(".about-section").show(3000);
    $(".text").hide();
  });
});
function pizzaPricess(quantity, size, crusttype,toppings){
this.quantity=q;
this.size=s;
this.crusttype=ct;
this.toppings=t;
}
function getTotal(q, s, ct,t){
  var pizzaPrice = ( parseFloat(q.value)*(parseFloat(s.value)+parseFloat(ct.value)+parseFloat(t.value)));
  alert(' Your grand Total is ksh ' +  (pizzaPrice));
  confirm('Do you want your pizza to be delivered to you?')
  prompt('Provide a location you want it delivered')
  alert('your order will be delivered to your location in a moment')
}

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

