// Variabel global untuk menyimpan status konfirmasi
let isConfirmed = false;

document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('form');
  let isValid = false;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = form.querySelectorAll('input, textarea, select');

    let isValid = true;

    // Product Name
    const productNameInput = document.getElementById('productName');
    const productName = productNameInput.value;

    const regex = /[!@#$%^&*(),.?":{}|<>]/;

    if (productName.length === 0) {
      isValid = false;
      document.getElementById('errorAlertProductName0').style.display = 'block';
      setTimeout(function () {
        document.getElementById('errorAlertProductName0').style.display = 'none';
      }, 4000);
    } else if (productName.length > 25) {
      isValid = false;
      document.getElementById('errorAlertProductName25').style.display = 'block';
      setTimeout(function () {
        document.getElementById('errorAlertProductName25').style.display = 'none';
      }, 4000);
    } else if (regex.test(productName)) {
      isValid = false;
      document.getElementById('errorAlertProductNameRegex').style.display = 'block';
      setTimeout(function () {
        document.getElementById('errorAlertProductNameRegex').style.display = 'none';
      }, 4000);
    } else {
      document.getElementById('errorAlertProductName0').style.display = 'none';
      document.getElementById('errorAlertProductName25').style.display = 'none';
    }

    const productPriceInput = document.getElementById('productPrice');
    const productPrice = productPriceInput.value;

    if (productPrice.length === 0) {
      isValid = false;
      document.getElementById('errorAlertProductPrice0').style.display = 'block';
      setTimeout(function () {
        document.getElementById('errorAlertProductPrice0').style.display = 'none';
      }, 3000);
    } else {
      document.getElementById('errorAlertProductPrice0').style.display = 'none';
    }

    const productImageInput = document.getElementById('productImage');
    const productImage = productImageInput.files[0];

    if (!productImage) {
      isValid = false;
      document.getElementById('errorAlertProductImage0').style.display = 'block';
      setTimeout(function () {
        document.getElementById('errorAlertProductImage0').style.display = 'none';
      }, 2000);
    } else {
      document.getElementById('errorAlertProductImage0').style.display = 'none';
    }

    const additionalDescriptionInput = document.getElementById('additionalDescription');
    const additionalDescription = additionalDescriptionInput.value;

    if (additionalDescription.length === 0) {
      isValid = false;
      document.getElementById('errorAlertAdditionalDescription0').style.display = 'block';
      setTimeout(function () {
        document.getElementById('errorAlertAdditionalDescription0').style.display = 'none';
      }, 1000);
    } else {
      document.getElementById('errorAlertAdditionalDescription0').style.display = 'none';
    }

    inputs.forEach(function (input) {
      if (input.hasAttribute('required') && !input.value && input.type !== 'file') {
        isValid = false;
      }
      if (input.type === 'file' && !input.files.length) {
        isValid = false;
      }
      if (input.tagName.toLowerCase() === 'textarea' && !input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      document.getElementById('errorAlert').style.display = 'block';
      document.getElementById('successAlert').style.display = 'none';
      console.log(isValid);
      setTimeout(function () {
        document.getElementById('errorAlert').style.display = 'none';
      }, 1000);
    } else {
      document.getElementById('errorAlert').style.display = 'none';
      document.getElementById('successAlert').style.display = 'block';
      console.log(isValid);
      setTimeout(function () {
        document.getElementById('successAlert').style.display = 'none';
        setTimeout(function () {
          window.location.reload();
        }, 500);
      }, 500);
    }
  });

  document.getElementById('submitModal').addEventListener('click', function () {
    isConfirmed = true;

    if (isConfirmed && isValid) {
      form.submit();
    }
  });
});
function changeText(text) {
  document.querySelector('.dropdown-toggle').innerText = text;
}
