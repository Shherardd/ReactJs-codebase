/**     i know about anti-patters //  se de antipatrones
 * All dead code is useful for me 
 *  Todo el codigo muerto es util para mi
 */

/*const element = document.createElement('h1')
element.innerText = 'Hello World'
const container = document.getElementById('app')
container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './components/styles/global.css'
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/badges'


/*const jsx = <h1>Hello World!</h1>*/
/*const element = React.createElement('h1', {}, 'children')
const container = document.getElementById('app')*/
const container = document.getElementById('app')

// ReactDOM.render(__que__, __donde__)
/*const jsx = (
    <div>
        <h1>Title</h1>
        <p>Paragraph</p>
    </div>
)*/

/*const el = React.createElement('div', {},
    React.createElement('h1', {}, 'Title'),
    React.createElement('p', {}, 'paragraph')
)*/
// jsx y el, representan lo mismo, donde Jsx es mas legible y expresivo.

ReactDOM.render(<Badges/>, container)