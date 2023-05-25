// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

//  Global Variables
let contacts = initContacts();
displayContacts();

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  let index = 0;
  let name = "";
  let email = "";
  let phone = 0;
  let country = "";

  contactsEl.innerHTML = "";
  contactsEl.innerHTML = `<div>${i}: $ `
  }
}

function addContact() {
  console.log("Add Contact");
}

function removeContact() {
  console.log("Remove Contact");
}

function displayByName() {
  console.log("Display by Name");
}

function displayByCountry() {
  console.log("Display by Country");
}

// Helpers
function initContacts() {
  let jsonContacts = localStorage.getItem("contacts");
  return JSON.parse(jsonContacts) ?? [];
}
