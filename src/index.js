import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { billionaires } from './billionaires.js'
import { Contact } from "./Contact.js"


function ContactList(props) {
  return <div className='ContactList'>{props.children}</div>
}

let contactElements = billionaires.map(function (contact, index) { return <Contact contact={contact} key={index}></Contact> })
ReactDOM.render(
  <ContactList >{contactElements}</ContactList>,
  document.getElementById('root')
)