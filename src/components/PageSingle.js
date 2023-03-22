import { useState } from 'react';
import './PageSingle.css';

import ButtonChoose from './ButtonChoose';
// import Bookmark from './Bookmark';

function Placeholder(props) {
    return (
        <div className="placeholder">
            <div className="placeholder-icon">
                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                <path d="M83.6117 117.084H96.9896C100.538 117.084 103.94 115.675 106.449 113.165C108.958 110.656 110.367 107.252 110.367 103.703V50.179L83.6117 23.4169H43.4781C39.9301 23.4169 36.5273 24.8267 34.0185 27.3361C31.5097 29.8455 30.1002 33.2491 30.1002 36.7979V103.703C30.1002 107.252 31.5097 110.656 34.0185 113.165C36.5273 115.675 39.9301 117.084 43.4781 117.084H56.856" stroke="#0f5a4a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50.167 70.2506L70.2338 50.179M70.2338 50.179L90.3006 70.2506M70.2338 50.179V123.775" stroke="#0f5a4a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="placeholder-hint" >Przeglądaj ten komputer w poszukiwaniu zdjęcia, które chcesz umieścić w raporcie</div>
            <ButtonChoose onClick={props.onClick} name="Wybierz zdjęcie"/>
        </div>
    )
}

export default function PageSingle() {

    const [image, setImage] = useState(null);

    function chooseImage() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file && file.type.substr(0, 5) === 'image') {
                setImage(URL.createObjectURL(file));
            }
        }
        input.click();
    }

    return (
        <div className="page-single">
        {
            image === null ?
            <Placeholder onClick={chooseImage}/> :
            <div className="image-container">
                <img className="image" src={image} alt=""/>
                {/* <div className="bookmark-group">
                    <Bookmark/>
                    <Bookmark/>
                    <Bookmark/>
                </div> */}
            </div>
        }
        </div>
    )
}