/*const element = document.createElement('h1')
element.innerText = 'Hello World'

const container = document.getElementById('app')

container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello World in react</h1>

const container = document.getElementById('app')

// ReactDOM.render(__que__, __donde__)
ReactDOM.render(element, container)