// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

//  Global Variables
let contacts = initContacts();

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
  outputEl.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    let cc = contacts[i];
    outputEl.innerHTML += `<p>${i}: ${cc.name} ${cc.email} ${cc.phone} (${cc.country}) `;
  }
}

function addContact() {
  let nameIn = prompt("Enter Contact Name:");

  contacts.push({
    name: nameIn,
    email: prompt("Enter Contact Email:"),
    phone: prompt("Enter Contact Phone:"),
    country: prompt("Enter Contact Country:"),
  });

  // outputEl.innerHTML = `<p>New Contact Added (${cc.name})`;
  outputEl.innerHTML = `<p>New Contact Added (${nameIn})`;
}

function removeContact() {
  let index = +prompt("Enter a index:");
  if (index >= 0 && index < contacts.length) {
    let contact = contacts.splice(index, 1)[0];
    outputEl.innerHTML = `<p>Contact Removed (${contact.name})`;
  }
}

function displayByName() {
  let displayName = prompt("Enter contact name:");

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === displayName) {
      let cc = contacts[i];
      outputEl.innerHTML = `<p>${i}: ${displayName} ${cc.email} ${cc.phone} (${cc.country}) `;
    }
  }
}

function displayByCountry() {
  let displayCountry = prompt("Enter country:");

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].country === displayCountry) {
      let cc = contacts[i];
      outputEl.innerHTML = `<p>${i}: ${cc.name} ${cc.email} ${cc.phone} (${displayCountry}) `;
    }
  }
}

// Helpers
// function initContacts() {
//   let jsonContacts = localStorage.getItem("contacts");
//   return JSON.parse(jsonContacts) ?? [];
// }

function initContacts() {
  let temp = [];

  temp.push({
    name: `John Doe`,
    email: `jdoe@gmail.com`,
    phone: `555-5555`,
    country: `Canada`,
  });
  temp.push({
    name: `Jane Doe`,
    email: `janedoe@gmail.com`,
    phone: `444-4444`,
    country: `Canada`,
  });
  temp.push({
    name: `Jennie Doe`,
    email: `jenniedoe@gmail.com`,
    phone: `333-3333`,
    country: `USA`,
  });
  temp.push({
    name: `Sam Smith`,
    email: `samesmithgmail.com`,
    phone: `222-2222`,
    country: "Australia",
  });
  temp.push({
    name: `Sue Smith`,
    email: `suesmith@gmail.com`,
    phone: `777-7777`,
    country: `Australia`,
  });

  return temp;
}
