
function getInitials(name) {
    var firstNameInitial = name.split(" ")[0][0]
    var lastNameInitial = name.split(" ")[1][0]
    var result = firstNameInitial + lastNameInitial
    return result
}

export function Contact(props) {
    let { contact, ...other } = props;
    return <div className='Contact' {...other}>
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