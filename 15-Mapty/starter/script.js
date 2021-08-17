/*
 * @Author: your name
 * @Date: 2021-08-16 09:58:21
 * @LastEditTime: 2021-08-17 10:02:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /15-Mapty/starter/script.js
 */
'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent

class App {
  #map
  #mapEvent

  constructor() {
    this._getPosition()
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
        alert("can't get your current location")
      })
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords
    const { longitude } = position.coords
    console.log(`https://www.google.com.tw/maps/@${latitude},${longitude}`)

    const coords = [latitude, longitude]

    this.#map = L.map('map').setView(coords, 13);
    const self = this

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    this.#map.on('click', function (e) {
      self.#mapEvent = e

      form.classList.remove('hidden')
      inputDistance.focus()
    })
  }


  _showHoem() { }

  _toggleElevationField() { }

  _newWorkout() { }
}

const app = new App()

form.addEventListener('submit', function (e) {
  e.preventDefault()

  // Clear input fields
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

  const { lat, lng } = mapEvent.latlng

  L.marker([lat, lng]).addTo(map)
    .bindPopup(L.popup({
      maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
      className: 'running-popup'
    }))
    .setPopupContent('Workout')
    .openPopup();
})

inputType.addEventListener('change', function () {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
})
