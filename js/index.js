import {mueblesOficina } from '../db/db.js'; 
import { Footer } from './footer.js';
import { NavBar } from './navBar.js';

console.log(mueblesOficina);

window.onload= function(){
    NavBar(); 
    Footer(); 
}