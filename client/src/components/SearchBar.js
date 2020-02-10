import React, { useState } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(value);
    };

    return (
        <div className={styles.SearchBar}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
