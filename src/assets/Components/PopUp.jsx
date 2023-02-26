import React from 'react';
import popUp from './styles/popUp.module.css'
import modeTheme from '../../custoomHooks/modeTheme';

const PopUp = ({text,imagen}) => {
  const {isMode}=modeTheme();
  return (
    <div className={`${popUp.div} ${isMode!=true && popUp.divDark}`} >
      <div className={`${popUp.divBox} ${isMode!=true && popUp.divBoxDark}`} >
        <h2 className={popUp.divH2}>{text}</h2>
        <img className={popUp.divImg} src={`${imagen}`} alt="cheque" />
      </div>

    </div>
  );
}

export default PopUp;