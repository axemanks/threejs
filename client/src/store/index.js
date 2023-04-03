import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;
// into = are we on the homepage?
// color = the color of the logo #EFBD48
// isLogoTexture = are we currently displaying the image on the shirt?
// isFullTexture = display the pattern on the shirt
// logoDecal = image
// fullDecal = pattern