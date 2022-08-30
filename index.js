


function validate() {
    let firstNameInput = document.getElementById("first-name").value;
    let lastNameInput = document.getElementById("last-name").value;
    let emailInput = document.getElementById("email").value;
    let numberInput = document.getElementById("phone-number").value;
    let batchInput = document.getElementById("batch").value;
    let moduleInput = document.getElementById("module").value;
    let tnCInput = document.getElementById("tnC").checked;
    
  
    let error = false;
  
    if (firstNameInput.length>=3 && firstNameInput.match(/^[A-Za-z]+$/)) {
        document.getElementById("first-name-valid").style.display = "block";
        document.getElementById("first-name-invalid").style.display = "none";
      } else {
        document.getElementById("first-name-invalid").style.display = "block";
        document.getElementById("first-name-valid").style.display = "none";
        error=true;
      }
  
    if (lastNameInput.length>=3 && lastNameInput.match(/^[A-Za-z]+$/)) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
      error = true;
    }
  
    if (
      emailInput &&
      emailInput.includes("@") &&
      emailInput.includes(".") &&
      emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
      emailInput.indexOf("@") !== 0 &&
      emailInput.indexOf("-") !== 0 &&
      !emailInput.match(/\ /)
    ) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
    } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      error = true;
    }
  
    if (numberInput && numberInput.length == 10 && numberInput.match(/^[0-9]+$/)) {
        document.getElementById("phone-number-valid").style.display = "block";
        document.getElementById("phone-number-invalid").style.display = "none";
      } else {
        document.getElementById("phone-number-invalid").style.display = "block";
        document.getElementById("phone-number-valid").style.display = "none";
        error = true;
      }
      let check = $("#batches").find("option[value='" + batchInput + "']");
  
      if (batchInput &&
        check != null &&
        check.length > 0 &&
        batchInput.match(/^[1-3\s]+$/)
        ){
        document.getElementById("batch-valid").style.display = "block";
        document.getElementById("batch-invalid").style.display = "none";
      } else {
        document.getElementById("batch-invalid").style.display = "block";
        document.getElementById("batch-valid").style.display = "none";
        error = true;
      }
  
    let check2 = $("#modules").find("option[value='" + moduleInput + "']");
  
    if (moduleInput &&
      check2 != null &&
      check2.length > 0 &&
      moduleInput.match(/^[5-7\s]+$/)
      ){
      document.getElementById("module-valid").style.display = "block";
      document.getElementById("module-invalid").style.display = "none";
    } else {
      document.getElementById("module-invalid").style.display = "block";
      document.getElementById("module-valid").style.display = "none";
      error=true;
    }
    if (tnCInput) {
      document.getElementById("tnC-invalid").style.display = "none";
    } else {
      document.getElementById("tnC-invalid").style.display = "block";
      error = true;
    }
  
    if (!error) {
      alert("Your details have been saved successfully!");
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone-number").value = "";
      document.getElementById("batch").value = "None";
      document.getElementById("module").value = "";
      document.getElementById("tnC").checked = false;
  
      document.getElementById("first-name-valid").style.display = "none";
      document.getElementById("last-name-valid").style.display = "none";
      document.getElementById("email-valid").style.display = "none";
      document.getElementById("phone-number-valid").style.display = "none";
      document.getElementById("batch-valid").style.display = "none";
      document.getElementById("module-valid").style.display = "none";
    }
  }
  
  function firstNameValidation() {
    let firstNameInput = document.getElementById("first-name").value;
  
    if (firstNameInput.length>=3 && firstNameInput.match(/^[A-Za-z]+$/)) {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
    }
  }
  function lastNameValidation() {
    let lastNameInput = document.getElementById("last-name").value;
  
    if (lastNameInput.length>=3 && lastNameInput.match(/^[A-Za-z]+$/)) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
    }
  }
  function emailValidation() {
    let emailInput = document.getElementById("email").value;
    if (
      emailInput &&
      emailInput.includes("@") &&
      emailInput.includes(".") &&
      emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
      emailInput.indexOf("-") !== 0 &&
      emailInput.indexOf("@") !== 0 &&
      !emailInput.match(/\ /)
    ) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
    } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
    }
  }
  
  function numberValidation() {
    let numberInput = document.getElementById("phone-number").value;
    if (numberInput && numberInput.length == 10 && numberInput.match(/^[0-9]+$/)) {
      document.getElementById("phone-number-valid").style.display = "block";
      document.getElementById("phone-number-invalid").style.display = "none";
    } else {
      document.getElementById("phone-number-invalid").style.display = "block";
      document.getElementById("phone-number-valid").style.display = "none";
    }
  }
  function batchValidation() {
    let batchInput = document.getElementById("batch").value;
  
    let check = $("#batches").find("option[value='" + batchInput + "']");
  
    if (batchInput &&
      check != null &&
      check.length > 0 &&
      batchInput.match(/^[1-3\s]+$/)
      ){
      document.getElementById("batch-valid").style.display = "block";
      document.getElementById("batch-invalid").style.display = "none";
    } else {
      document.getElementById("batch-invalid").style.display = "block";
      document.getElementById("batch-valid").style.display = "none";
    }
  }
  function moduleValidation() {
    let moduleInput = document.getElementById("module").value;
  
    let check2 = $("#modules").find("option[value='" + moduleInput + "']");
  
    if (moduleInput &&
      check2 != null &&
      check2.length > 0 &&
      moduleInput.match(/^[5-7\s]+$/)
      ){
      document.getElementById("module-valid").style.display = "block";
      document.getElementById("module-invalid").style.display = "none";
    } else {
      document.getElementById("module-invalid").style.display = "block";
      document.getElementById("module-valid").style.display = "none";
    }
  }
  
  function tnCValidation() {
    let tnCInput = document.getElementById("tnC").checked;
    if (!tnCInput) {
      document.getElementById("tnC-invalid").style.display = "block";
    } else {
      document.getElementById("tnC-invalid").style.display = "none";
    }
  }
  