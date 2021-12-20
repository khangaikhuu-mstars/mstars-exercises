import React from 'react';

const Student = ({match}) => {

  const name = match.params.name;

  return (
    <div className="main-content">
      <h1>Anar</h1>
      <p>Random words</p>
    </div>
  );
}

export default Student;