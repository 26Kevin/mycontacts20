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
// function displayContacts() {
//   contactsEl.innerHTML = "";
//   for (let i = 0; i < contacts.length; i++) {
//     contactsEl.appendChild(getTaskHTML(contacts[i], i));
//   }
// }

function displayContacts() {
  let contact = [
    "John Doe",
    "Jannie Doe",
    "Jennie Doe",
    "Sam Smith",
    "Sue Smith",
    "Sally Smith",
  ];
  let email = [
    "jdoe@gmail.com",
    "janedoe@gmail.com",
    "jenniedoe@gmail.com",
    "samsmith@gmail.com",
    "suesmith@gmail.com",
    "sallysmith@gmail.com",
  ];
  let phone = [555 - 5555, 444 - 4444];

  contactsEl.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    outputEl.innerHTML += `<p>${i}: ${contact} ${email} ${phone} (${country})`;
  }
}

function addContact() {
  let name = prompt("Enter contact Name:");
  let email = prompt("Enter Contact Email:");
  let phone = prompt("Enter Contact Phone:");
  let country = prompt("Enter Contact COuntry:");
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
