// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener("submit", function(event) {
          // this will only execute if all required values are met; form.checkValidity() === true
          event.preventDefault();
          event.stopPropagation();
          console.log("Good data");
          var fName = document.getElementById("fname").value;
          var lName = document.getElementById("lname").value;
          var phoneNumber = document.getElementById("phone").value;
          var email = document.getElementById("email").value;
          var message = document.getElementById("message").value;

          var service_id = "default_service";
          var template_id = "template_ZL9gvutj";

          var template_params = {
            name: `${fName} ${lName}`,
            reply_email: email,
            message: message
          };

          emailjs.send(service_id, template_id, template_params);
          // clear input boxes on submit clicked
          document.querySelector("#fname").value = "";
          document.querySelector("#lname").value = "";
          document.querySelector("#phone").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#message").value = "";
        });
      });
    },
    false
  );
})();

// (function() {
//   document.querySelector("#submit").addEventListener("click", evt => {
//     evt.preventDefault();
// var fName = document.getElementById("fname").value;
// var lName = document.getElementById("lname").value;
// var phoneNumber = document.getElementById("phone").value;
// var email = document.getElementById("email");
// var message = document.getElementById("message").value;
//   });
// })();
