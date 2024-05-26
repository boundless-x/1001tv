import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };

  const sampleMovie = {
    picture: 'https://static.iyf.tv/upload/video/202103071312571204073.gif?w=238&h=340&format=jpg&mode=stretch', // Replace with an actual image URL
    name: 'Sample Movie',
    rating: '8.5',
    category: 'Drama',
    country: 'USA',
    language: 'English',
    year: '2023'
};


  return (
    <div className="App">
      <header className="App-header">

        <SearchBar onSearch={handleSearch} />
        
        
        <MovieCard movie={sampleMovie} />

      </header>

      
    </div>

  );
}

export default App;
