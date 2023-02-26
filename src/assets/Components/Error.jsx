import modeTheme from '../../custoomHooks/modeTheme';
import error from './styles/error.module.css'

const Error = () => {
  const {isMode}=modeTheme();
  return (
    <div className={`${error.div} ${isMode!=true && error.divDark}`} >
      <h2 className={error.divH2}>Oops... An error has occurred. Please try again!</h2>
      <img className={error.divImg} src="/computadora.png" alt="error" />
    </div>
  );
};

export default Error;