const React = require('react');
const { useState } = require('react');

const SearchBar = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

module.exports = SearchBar;
