import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { billionaires } from './billionaires.js'
import { Contact } from "./Contact.js"


function ContactList(props) {
  return <div className='ContactList'>{props.children}</div>
}

function App(props) {
  return <ContactList>
    {props.contacts.map((contact, i) =>
      <Contact contact={contact} key={i}></Contact>
    )}
    <button onClick={update}>
      Add
    </button>
  </ContactList>
}

function update() {
  let updatedContacts = billionaires.concat({
    name: 'Masayoshi Son',
    email: 'mson@softbank.co.jp'
  })

  ReactDOM.render(
    <App contacts={updatedContacts}></App>,
    document.getElementById('root')
  )
}

ReactDOM.render(
  <App contacts={billionaires}></App>,
  document.getElementById('root')
)