import React from "react";
import { useToast, usetoast } from './Toast'
import './Child.css';

export const Child = () => {
    const toast = useToast()
    const showToast = () => 
        toast.open(`Toast created from child component! ${Math.random() * 2332} `)
    
    return (
        <div className="child">
            <h3>Hello from child component!</h3>
            <button className="button" onClick={showToast}>Show me a toast</button>
        </div>
    )
}