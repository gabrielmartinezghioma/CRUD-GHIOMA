import React from 'react';
import modeTheme from '../../custoomHooks/modeTheme';
import loading from './styles/loading.module.css'

const Load = () => {
  const {isMode}=modeTheme();
  return (
    <div className={`${loading.div} ${isMode!=true && loading.divDark}`} >
      <h4 className={loading.divH2}>Loading...</h4>
      <i  className='bx bx-loader-alt bx-spin bx-flip-horizontal' ></i>
    </div>
  );
};

export default Load;