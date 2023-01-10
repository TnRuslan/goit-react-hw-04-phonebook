import { Contact } from './Contact'
import css from './ContactsList.module.css'
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeletContact}) => {
    return (
            <ul className={css.contacts__list}>
                {contacts.map(contact => {
                    return (<Contact 
                        name={contact.name}
                        number={contact.number}
                        key={contact.id}
                        id={contact.id}
                        onDeletContact={onDeletContact} />)
                })}
            </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeletContact: PropTypes.func.isRequired
}