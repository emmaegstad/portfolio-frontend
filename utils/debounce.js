export const debounce = (func, currTime) => {
    let time = currTime || 100; // 100 by default if no param
    let timer;
    return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
};

export const resizeCallback = () => {
    const resizeEvent = new CustomEvent('windowResized');
    dispatchEvent(resizeEvent);
};
