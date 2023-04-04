import React from 'react';

const InnerHeader = ({ title, className }) => {
  return (
    <div className={ className }>
      <h2>{ title }</h2>
    </div>
  )
}

export default InnerHeader;