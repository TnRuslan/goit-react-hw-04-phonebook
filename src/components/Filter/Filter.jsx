import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
        <label>
            find contacts by name <input type="text" value={value} onChange={onChange} />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}