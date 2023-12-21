let myLeads = [];
let leadsFromLocakStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocakStorage) {
    myLeads = leadsFromLocakStorage;
    liChildCreation(myLeads);
}

const saveBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputText = document.getElementById("input-el");
const ul = document.getElementById("ul-el");

saveBtn.addEventListener("click", (e) => {
    myLeads.push(inputText.value);
    inputText.value = "";
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    liChildCreation(myLeads);
})

function liChildCreation(array) {
    let listItems = "";
    for (let i = 0; i < array.length; i++) {
        listItems += `
        <li>
        <a target='_blank' href="${array[i]}">
        ${array[i]}
        </a>
        </li>
        `
    }
    ul.innerHTML = listItems;
}

deleteBtn.addEventListener("click", (e) => {
    localStorage.clear();
    myLeads = [];
    liChildCreation(myLeads);
})

const tabs = [];

tabBtn.addEventListener("click", (e) => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        let activeTab = tabs[0];
        let activeTabId = activeTab.id;
    });
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
})