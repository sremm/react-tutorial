import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

let billionaires = [
  { name: 'Bill Gates', email: 'billg@microsoft.com' },
  { name: 'Jeff Bezos', email: 'jeff@amazon.com' },
  { name: 'Mark Zuckerberg', email: 'zuck@fb.com' },
]

function getInitials(name) {
  var firstNameInitial = name.split(" ")[0][0]
  var lastNameInitial = name.split(" ")[1][0]
  var result = firstNameInitial + lastNameInitial
  return result
}
var billionairesList = []
for (const billionare of billionaires) {
  billionairesList.push(
    <div className='Contact'>
      <div className='Contact-avatar'>{getInitials(billionare.name)}</div>
      <span className='Contact-name'>{billionare.name}</span>
      <a href={'mailto:' + billionare.email}>
        {billionare.email}
      </a>
    </div>
  )

}

// Your React elements will go here.
let elements = billionairesList

// Use a for loop or array.map to build the elements array

ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)