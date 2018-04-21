//https://medium.com/@barvysta/warning-react-depends-on-requestanimationframe-f498edd404b3
const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0);
};

export default raf;
