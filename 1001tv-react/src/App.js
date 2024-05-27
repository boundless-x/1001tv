import './App.css';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import yaml from 'js-yaml';

import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';


function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };


const [movies, setMovies] = useState([]);

useEffect(() => {
    // TODO: use CDN
    console.log(process.env.NODE_ENV)
    const movie_url =  process.env.NODE_ENV == "development" ? 'movies.yaml' : '/1001tv/movies.yaml';
    console.log(movie_url)
    fetch(movie_url)
        .then(response => response.text())
        .then(text => {
            const movieData = yaml.load(text);
            setMovies(movieData);
        });
}, []);

  return (
    <div className="App">
      <header className="App-header">

        <SearchBar onSearch={handleSearch} />
        
        <Row gutter={[16, 16]}>
                {movies.map((movie, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>

      </header>

      
    </div>

  );
}

export default App;
