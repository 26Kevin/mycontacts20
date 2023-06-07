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
  } else if (selection === "search-email") {
    searchEmail();
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
  // Get input from user (Name & Email)
  let nameIn = prompt("Enter Contact Name:");
  let emailIn = prompt("Enter Contact Email:");

  // Check if provided email is already used
  let existingContactIndex = findByEmail(emailIn);

  if (existingContactIndex !== -1) {
    outputEl.innerHTML = "Contact already used";
  } else {
    outputEl.innerHTML = `<p>New Contact Added (${nameIn}`;
    // Adding contact to contacts array
    contacts.push({
      name: nameIn,
      email: emailIn,
      phone: prompt("Enter Contact Phone:"),
      country: prompt("Enter Contact Country:"),
    });
  }
}

function removeContact() {
  let emailIn = prompt("Enter the email of the contact to remove:");
  let contactIndex = findByEmail(emailIn);

  if (contactIndex !== -1) {
    contacts.splice(contactIndex, 1);
    outputEl.innerHTML = `<p>Contact removed successfully)`;
  } else {
    outputEl.innerHTML = `<p>Contact not found.`;
  }
}

function displayByName() {
  let displayName = prompt("Enter contact name:");
  outputEl.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === displayName) {
      let cc = contacts[i];
      outputEl.innerHTML += `<p>${i}: ${displayName} ${cc.email} ${cc.phone} (${cc.country}) `;
    }
  }
}

function displayByCountry() {
  let displayCountry = prompt("Enter country:");
  outputEl.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].country === displayCountry) {
      let cc = contacts[i];
      outputEl.innerHTML += `<p>${i}: ${cc.name} ${cc.email} ${cc.phone} (${displayCountry}) `;
    }
  }
}

function searchEmail() {
  let emailIn = prompt("Enter Contact Email:");
  outputEl.innerHTML = "";
  let existingContact = findByEmail(emailIn);

  if (existingContact !== -1) {
    let cc = contacts[i];
    outputEl.innerHTML += `<p>${i}: ${cc.name} ${cc.email} ${cc.phone} (${cc.country}) `;
  }
}

function findByEmail(emailIn) {
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].email === emailIn) {
      return i;
    }
  }
  return -1;
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
