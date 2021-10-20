import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchBar(props) {
  const [stateSearchQuery, setStateSearchQuery] = useState('');

  const handleQueryChange = event => {
    setStateSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (stateSearchQuery.trim() === '') {
      toast.error('Enter the name of your picture theme');
      return;
    }
    props.onSubmit(stateSearchQuery, 1);
    setStateSearchQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          value={stateSearchQuery}
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
}
