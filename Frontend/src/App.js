// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LayoutBuilder from './components/LayoutBuilder';
import SearchBar from './components/SearchBar';
import VendorList from './components/VendorList';
import './styles.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Router>
            <div className="app">
                <SearchBar onSearch={handleSearch} />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                        <VendorList searchQuery={searchQuery} />
                    </Route>
                    <Route path="/about" component={AboutPage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/layout-builder" component={LayoutBuilder} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
