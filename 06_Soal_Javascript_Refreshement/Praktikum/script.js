(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
      form.addEventListener(
          "submit",
          (event) => {
              let name = document.querySelector("#product-name").value;
              let category = document.querySelector("#product-category").value;
              let image = document.querySelector("#product-image").value;
              let freshnesss = document.querySelectorAll(
                  'input[name="freshness"]'
              );
              let selectFreshness = "";
              let description = document.querySelector(
                  "#product-description"
              ).value;
              let price = document.querySelector("#product-price").value;

              freshnesss.forEach((freshness) => {
                  freshness.addEventListener("change", () => {
                      selectFreshness = document.querySelector(
                          'input[name="freshness"]:checked'
                      ).value;
                      console.log(selectGender);
                  });
              });
              // Bila Field Product Name lebih dari 10 karakter
              if (name.length > 10) {
                  alert("Last Name must not exceed 25 characters.");
              }

              // Bila Field Product Name kosong
              if (name.length == 0) {
                  alert("Please enter a valid Product name.");
              }

              // Bila Field Product Price kosong
              if (price.length == 0) {
                  alert("Please enter a valid Product price.");
              }

              // Bila Field Product Name mengandung symbol @#{}
              if (
                  name.includes("@") ||
                  name.includes("#") ||
                  name.includes("{") ||
                  name.includes("}")
              ) {
                  alert("Name must not contain symbols.");
              }

              // Bila Field Kosong
              if (category == "") {
                  alert("The Category field must be filled in");
              }
              if (freshnesss == "") {
                  alert("The Freshness field must be filled in");
              }
              if (image == "") {
                  alert("The Image field must be filled in");
              }
              if (description == "") {
                  alert("The description field must be filled in");
              }

              // UI Validasi Bootstrap
              if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
              }

              form.classList.add("was-validated");
          },
          false
      );
  });
})();