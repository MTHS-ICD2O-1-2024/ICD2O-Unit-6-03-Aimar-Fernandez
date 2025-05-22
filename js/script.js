// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

async function updateWeather() {
  try {
    const infoJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const JSONdata = await infoJSON.json()
    const kelvinTemp = await JSONdata.main.temp
    const celsiusTemp = (kelvinTemp - 273.15).toFixed(0)
    document.getElementById("answer").innerHTML = 
      "<p>" + celsiusTemp + "°C</p>"
  }
  catch (error) {
    document.getElementById("answer").innerHTML = "<p>Error</p>"
  }
}
