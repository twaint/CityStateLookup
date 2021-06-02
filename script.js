"use strict";

let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego"]
 },
 {
    state: "Colorado",
    stateAbbr: "CO",
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
 },
 {
    state: "Texas",
    stateAbbr: "TX",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"]
 },
 {
    state: "Washington",
    stateAbbr: "",
    cities: ["Seattle", "Dallas", "Houston", "San Antonio"]
 }

];


/*
The window.onload event handler will need to:

load all of the states in the states dropdown
programmatically select the first state in the options list
load all of the cities for that state in the cities dropdown
You will need to connect an event handler to the states dropdown for the onchange event handler.  In that event handler function, you will need to:

clear the cities dropdown
figure out which state was the new selected state
load all of the cities for that state in the cities dropdown
*/

//onload thingy
window.onload = function(){ //windows is for the browswer, onload is for the function (wheb called on or used)
    loadStatesDropdown()
    let statesList = document.getElementById("statesList")
    statesList.onchange = citiesAppear;

    let citiesList = document.getElementById("citiesList")
    citiesList.onchange = messageAppear;


}

//this automatically loads state from array
function loadStatesDropdown(){
    let statesList = document.getElementById("statesList")
    let citiesList = document.getElementById("citiesList")

    let selectOneOption = document.createElement("option")
    selectOneOption.textContent = "Select one..."
    selectOneOption.value = ""

    statesList.appendChild(selectOneOption)

    addSelectOptionsToCity()

    for(let i=0; i < cityStates.length; i++){
       let createOption = document.createElement("option")
       createOption.textContent = cityStates[i].state
       createOption.value = cityStates[i].stateAbbr
       statesList.appendChild(createOption)
    }

}

function citiesAppear(){
   let statesList = document.getElementById("statesList")
   let citiesList = document.getElementById("citiesList")

   let messagePara = document.getElementById("messagePara")

   messagePara.innerHTML = ""

   citiesList.options.length = 0

   addSelectOptionsToCity("Select one...")

   let abbrState = statesList.value

   if(abbrState == ""){
      return;
   }

   let matchingCities = cityStates.find(element => element.stateAbbr == abbrState)

   for(let i = 0; i <matchingCities.cities.length; i++){
      let createOption = document.createElement("option")
      createOption.textContent = matchingCities.cities[i]
      citiesList.appendChild(createOption)
   }
}

function messageAppear(){
   let statesList = document.getElementById("statesList")
   let citiesList = document.getElementById("citiesList")

   const messagePara = document.getElementById("messagePara")

   messagePara.innerHTML = ""

   let selectedCity = citiesList.value

   if(selectedCity == ""){
      return;
   }

   let selectedStateIndex = statesList.selectedIndex
   let selectedState = statesList.options[selectedStateIndex].text

   let message = "City: " + selectedCity + "<br>" + "State: " + selectedState
   messagePara.innerHTML = message


}

function addSelectOptionsToCity(txtOption="Select State first..."){
   let citiesList = document.getElementById("citiesList")

   let selectOneOption = document.createElement("option")
   selectOneOption.textContent = txtOption
   selectOneOption.value = ""

   citiesList.appendChild(selectOneOption)


}