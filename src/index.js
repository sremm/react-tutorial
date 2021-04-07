import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { billionaires } from './billionaires.js'
import { Contact } from "./Contact.js"


function ContactList(props) {
  let elements = props.billionaires.map(function (contact, index) { return <Contact contact={contact} key={index}></Contact> })
  return <div className='ContactList'>{elements}</div>
}


ReactDOM.render(
  <ContactList billionaires={billionaires}></ContactList>,
  document.getElementById('root')
)