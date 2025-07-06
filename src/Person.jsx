const Person = ({ id, image, name, age, birthDate, handleDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <article className='person'>
      <div className='img-container'>
        <img src={image} alt={name} className="img" />
      </div>
      <div>
        <h4>{name}</h4>
        <p className='age'>{age} years</p>
        <p className='birthDate'>
          {formatDate(birthDate)}
        </p>
      </div>
      <button className='btn btn-hipster' onClick={() => handleDelete(id)}>Remove person</button>
    </article>
  );
};

export default Person;
  