import React from 'react';

const Featured = ({match}) => {

  return (
    <div className="main-content">
      <h2>Featured: {match.params.name} </h2>
      <p>Introducing <strong>{match.params.topic}</strong>, a teacher who loves teaching courses about <strong></strong>!</p>
    </div>
  );
}

export default Featured;
