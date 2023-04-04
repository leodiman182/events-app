import React from 'react';
import styles from '@component/styles/components/innerHeader.module.css';

const InnerHeader = ({ title }) => {
  return (
    <div className={ styles.header }>
      <h2>{ title }</h2>
    </div>
  )
}

export default InnerHeader;