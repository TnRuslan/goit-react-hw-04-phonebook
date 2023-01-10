import css from './ContactsList.module.css'

export const Contact = ({ name, number, id, onDeletContact }) => {
    return (
        <li className={css.contact__item}>
            <p>{name}: {number}</p>
            <button className={css.contact__btn} type="button" onClick={() => onDeletContact(id)}>Delet</button>
        </li>
    )
}
