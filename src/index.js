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

function Contact(props) {
  const contact = props.contact;
  return <div className='Contact' key={props.index}>
    <div className='Contact-avatar'>
      {getInitials(contact.name)}
      {contact.photoURL && <img alt="" src={contact.photoURL}></img>}
    </div>
    <span className='Contact-name'>{contact.name}</span>
    <a href={'mailto:' + contact.email}>
      {contact.email}
    </a>
  </div>
}

function ContactList(props) {
  let elements = props.billionaires.map(function (contact, index) { return <Contact contact={contact} key={index}></Contact> })
  return <div className='ContactList'>{elements}</div>
}


ReactDOM.render(
  <ContactList billionaires={billionaires}></ContactList>,
  document.getElementById('root')
)