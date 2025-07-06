import { useState } from 'react';
import placeholderImage from '../assets/placeholder.svg';

function AddPerson({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    birthDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing people from localStorage
    const existingPeople = JSON.parse(localStorage.getItem('birthdayPeople') || '[]');
    
    // Calculate age from birth date
    const calculateAge = (birthDate) => {
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      
      return age;
    };

    // Create new person object
    const newPerson = {
      id: Date.now(), // Generate unique ID
      name: formData.name,
      age: calculateAge(formData.birthDate),
      image: formData.image || placeholderImage, // Use placeholder if no image provided
      birthDate: formData.birthDate
    };
    
    // Add to existing people
    const updatedPeople = [...existingPeople, newPerson];
    
    // Save to localStorage
    localStorage.setItem('birthdayPeople', JSON.stringify(updatedPeople));
    
    // Reset form
    setFormData({ name: '', image: '', birthDate: '' });
    
    alert('Person added successfully!');
    setCurrentPage('home'); // Navigate back to home
  };

  return (
    <main>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Add New Person</h3>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-input'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-row'>
            <label htmlFor='image' className='form-label'>
              Image URL (Optional)
            </label>
            <input
              type='url'
              name='image'
              id='image'
              className='form-input'
              value={formData.image}
              onChange={handleChange}
              placeholder='https://example.com/image.jpg (or leave empty for placeholder)'
            />
          </div>
          <div className='form-row'>
            <label htmlFor='birthDate' className='form-label'>
              Birth Date
            </label>
            <input
              type='date'
              name='birthDate'
              id='birthDate'
              className='form-input'
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit' className='btn btn-block'>
            Add Person
          </button>
        </form>
    </main>
  );
}

export default AddPerson; 