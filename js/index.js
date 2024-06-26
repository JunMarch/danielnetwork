import {metadata} from './metadata.js';
window.addEventListener('DOMContentLoaded', (()=>{
    
    const shuffle = (arr)=>{
        for (let i = arr.length-1;i > 0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        return arr;
    }
    const menu_open = document.querySelector('.bi-list');
    const nav_content = document.querySelector('.nav-content');
    const menu_close = document.querySelector('.bi-x-lg');
    menu_open.addEventListener('click',()=>{
        nav_content.style.display = 'flex'
    })
    menu_close.addEventListener('click',()=>{
        nav_content.style.display = 'none'
    })
    
}))