import React from "react";
import { useTimeout } from '../hooks/useTimeout'
import '../style.css';

export const Toast = props => {
    useTimeout(props.close, 5000)

    return (
        <div className="toast">
            <div className="toast_text">{props.children}</div>
            <div>
                <button onClick={props.close} className='toast__close-btn'>
                x
                </button>
            </div>
        </div>
    )
}