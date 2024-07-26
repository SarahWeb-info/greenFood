import React from 'react';

const Heading = ({ subheading1 = "", subheading2 = "" }) => {
  return (
    <div className='flexCenter'>
      <p className='sectionHeading'>
        {subheading1} <span className='highlight'>{subheading2}</span>
      </p>
    </div>
  );
};

export default Heading;
