// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

async function updateWeather() {
  try {
    const infoJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const kelvinTemp = await infoJSON.main.temp
    const weatherImage = await infoJSON.weather.icon
    const celsiusTemp = kelvinTemp + 273.15
    document.getElementById("answer").innerHTML = 
      "<p>" + celsiusTemp + "°C</p>" + "<img src=" + weatherImage + "/>"
  }
  catch (error) {
    document.getElementById("answer").innerHTML = "<p>Error</p>"
  }
}
