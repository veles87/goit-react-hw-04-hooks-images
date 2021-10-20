import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

export default function App() {
  const [stateSearchQuery, setStateSearchQuery] = useState('');
  const [statePage, setStatePage] = useState(1);

  const handleFormSubmit = (searchQuery, page) => {
    setStateSearchQuery(searchQuery);
    setStatePage(page);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={3000} />
      <ImageGallery
        searchQuery={stateSearchQuery}
        page={statePage}
        setPage={setStatePage}
      />
    </div>
  );
}
