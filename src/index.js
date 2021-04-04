import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { billionaires } from './billionaires.js'


function getInitials(name) {
  var firstNameInitial = name.split(" ")[0][0]
  var lastNameInitial = name.split(" ")[1][0]
  var result = firstNameInitial + lastNameInitial
  return result
}

function createContactElement(contact, index, array) {
  let result = <div className='Contact' key={index}>
    <div className='Contact-avatar'>
      {getInitials(contact.name)}
      {contact.photoURL && <img alt="" src={contact.photoURL}></img>}
    </div>
    <span className='Contact-name'>{contact.name}</span>
    <a href={'mailto:' + contact.email}>
      {contact.email}
    </a>
  </div>



  return result
}
let elements = billionaires.map(createContactElement)

// Use a for loop or array.map to build the elements array

ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)