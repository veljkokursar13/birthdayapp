import React from 'react';
import Person from './Person';

const List = ({ people, handleDelete }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} handleDelete={handleDelete} />;
      })}
    </section>
  );
};

export default List;
