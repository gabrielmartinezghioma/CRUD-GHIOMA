import { useDispatch,useSelector } from 'react-redux';
import { setMode } from "../store/slices/mode.slices";


function modeTheme() {
  const isMode = useSelector(state => state.mode);

  const dispatch = useDispatch();

  const buttonFunction = () => {
    dispatch(setMode(!isMode))
    localStorage.setItem('theme', !isMode)
  }

  return {
    isMode,
    buttonFunction
  }
}

export default modeTheme