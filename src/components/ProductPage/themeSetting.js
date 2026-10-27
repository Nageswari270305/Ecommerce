import { useRef, useEffect, useContext } from 'react';
import './css/Productpage.css'
import Theme from './appTheme'

function ThemeSetting(props){

const {themeClicked, setThemeClicked} = props;
const themeRef = useRef(null);
const {theme, setTheme} = useContext(Theme)
useEffect(() =>{

    if(!themeClicked) return;

    const handleThemeClosing = (event) =>{
        if(!themeRef.current.contains(event.target)){
            setThemeClicked(false);
        }
    }

    document.addEventListener("mousedown",handleThemeClosing );

    return ()=>{
        document.removeEventListener("mousedown",handleThemeClosing);
    }


},[themeClicked]);

const handleThemeChange = (selectedtheme) =>{
    if(selectedtheme === 'light'){
    setTheme('light');
    setThemeClicked(false);
    }
    else{
    setTheme('dark');
    setThemeClicked(false);
    }
}
    return (
        <>
        <div className="Themesetting" ref={themeRef}>
            <button onClick={()=>handleThemeChange('light')}>light {theme === 'light' && '✓'}</button>
            <button onClick={()=>handleThemeChange('dark')}>dark {theme === 'dark' && '✓'}</button>
        </div>
        </>
    )
}

export default ThemeSetting;