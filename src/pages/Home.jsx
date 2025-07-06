import { useState, useEffect } from 'react';
import data from '../data';
import List from '../List';

function Home({ setCurrentPage }) {
  const [people, setPeople] = useState(() => {
    const savedPeople = localStorage.getItem('birthdayPeople');
    return savedPeople ? JSON.parse(savedPeople) : data;
  });
  
  useEffect(() => {
    localStorage.setItem('birthdayPeople', JSON.stringify(people));
  }, [people]);
  
  const handleDelete = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  const handleRefresh = () => {
    // Get current people from localStorage
    const currentPeople = JSON.parse(localStorage.getItem('birthdayPeople') || '[]');
    
    // Get original data IDs
    const originalIds = data.map(person => person.id);
    
    // Filter out original people that might have been deleted
    const addedPeople = currentPeople.filter(person => !originalIds.includes(person.id));
    
    // Combine original data with added people
    const refreshedPeople = [...data, ...addedPeople];
    
    // Update state and localStorage
    setPeople(refreshedPeople);
    localStorage.setItem('birthdayPeople', JSON.stringify(refreshedPeople));
  };
  
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} handleDelete={handleDelete} />
        <div className='btn-container'>
          <button
            type='button'
            className='btn btn-block'
            onClick={() => {
              setPeople([]);
              localStorage.removeItem('birthdayPeople');
            }}
          >
            clear all
          </button>
          <button 
            type='button' 
            className='btn btn-block' 
            onClick={handleRefresh}
          >
            refresh
          </button>
          <button 
            type='button' 
            className='btn btn-block' 
            onClick={() => setCurrentPage('add')}
          >
            Add New Person
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home; 