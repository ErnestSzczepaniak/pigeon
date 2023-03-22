import { useState } from "react";

import './Bookmark.css'

export default function Bookmark(props) {

    const [text, setText] = useState("");

    return (
        <div className="bookmark">
            <div className="bookmark-icon">
                s
            </div>
            <div className="bookmark-content">
                <input className="bookmark-input" 
                    type="text" 
                    placeholder="" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </div>
    )
}