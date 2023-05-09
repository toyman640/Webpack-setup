import _ from 'lodash';
import './style.css';
import Logo from './my-logo-1-x.png'

function component() {
    const element = document.createElement('div');
  

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to div
    const logo = new Image();
    logo.src = Logo;
    element.appendChild(logo);
  
    return element;
}
  
document.body.appendChild(component());