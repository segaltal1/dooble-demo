function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        const context = this, args = arguments,
            later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export const utilService = {
    debounce
}