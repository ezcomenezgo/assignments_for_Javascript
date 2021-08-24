/*
 * @Author: your name
 * @Date: 2021-08-16 09:58:21
 * @LastEditTime: 2021-08-24 14:43:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /15-Mapty/starter/script.js
 */
'use strict';

class Workout {
  date = new Date()
  id = (Date.now() + '').slice(-10)
  clicks = 0

  constructor(coords, distance, duration) {
    this.distance = distance // in km
    this.duration = duration // in min
    this.coords = coords // [lat, lng]
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Running on April 14
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }

  click() {
    this.clicks++
  }
}

class Running extends Workout {
  type = 'running'

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration)
    this.cadence = cadence
    this.clacPace()
    this._setDescription()
  }

  clacPace() {
    // min/km
    this.pace = this.duration / this.distance
    return this.pace
  }
}

class Cycling extends Workout {
  type = 'cycling'

  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration)
    this.elevation = elevation
    this.calcSpeed()
    this._setDescription()
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60)
    return this.speed
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178)
// const cyc1 = new Cycling([39, -12], 27, 99, 523)
// console.log(run1, cyc1)

///////////////////////////////////////
// APPLICATION ARCHITECTURE 
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map
  #mapEvent
  #zoomLevel = 13
  #workout = []

  constructor() {
    // get user's position
    this._getPosition()

    // get data from local storage
    this._getLocalStorage()

    // attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this))
    inputType.addEventListener('change', this._toggleElevationField)
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))
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

    this.#map = L.map('map').setView(coords, this.#zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this))

    this.#workout.forEach(work => {
      this._renderWorkoutMarker(work)
    })
  }


  _showForm(e) {
    this.#mapEvent = e

    form.classList.remove('hidden')
    inputDistance.focus()
  }

  _hideForm () {
    // clear input
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

    form.style.display = 'none'
    form.classList.add('hidden')
    setTimeout(() => form.style.display = 'grid', 1000)
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
  }

  _newWorkout(e) {
    e.preventDefault()
    const isValid = (...inputs) => inputs.every(inp => Number.isFinite(inp))
    const isPositive = (...inputs) => inputs.every(inp => inp > 0)

    // Get data from form
    const type = inputType.value
    const distance = +inputDistance.value
    const duration = +inputDuration.value
    const { lat, lng } = this.#mapEvent.latlng

    let workout

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value

      // Check if data is valid
      if (!isValid(distance, duration, cadence) || !isPositive(distance, duration, cadence)) alert('Plz enter a positive number')

      workout = new Running([lat, lng], distance, duration, cadence)
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value

      // Check if data is valid
      if (!isValid(distance, duration, elevation) || !isPositive(distance, duration)) alert('Plz enter a positive number')

      workout = new Cycling([lat, lng], distance, duration, elevation)
    }

    // Add new object to workout array
    this.#workout.push(workout)

    // Render workout on map as marker
    this._renderWorkoutMarker(workout)

    // Render workout on list
    this._renderWorkoutForm(workout)

    // Hide form + Clear input fields
    this._hideForm()

    // Set to the local storage
    this._setToLocalStorage()
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
      .openPopup();
  }


  _renderWorkoutForm(workout) {
    let html = ''

    html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `

    if (workout.type === 'running') {
      html += `
          <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${workout.pace}</span>
              <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">🦶🏼</span>
              <span class="workout__value">${workout.cadence}</span>
              <span class="workout__unit">spm</span>
            </div>
        </li>
      `
    }

    if (workout.type === 'cycling') {
      html += `
          <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${workout.speed}</span>
              <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⛰</span>
              <span class="workout__value">${workout.elevation}</span>
              <span class="workout__unit">m</span>
            </div>
        </li>
      `
    }

    form.insertAdjacentHTML('afterend', html)
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout')

    if(!workoutEl) return

    const workout = this.#workout.find(work => work.id === workoutEl.dataset.id)

    this.#map.setView(workout.coords, this.#zoomLevel, {
      animate: true,
      pan: {
        duration: 0.25
      }
    })

    // use public interface
    // workout.click()
  }

  _setToLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workout))
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'))

    if(!data) return

    this.#workout = data

    this.#workout.forEach(work => {
      this._renderWorkoutForm(work)
    })
  }

  reset() {
    localStorage.removeItem('workouts')
    location.reload()
  }
}

const app = new App()


