/**
 * 函数节流方法
 */
export const throttle = function (fn, delay) {
    var timer = null;

    return function () {

        clearTimeout(timer);
        timer = setTimeout(function() {
            fn();
        }, delay);
    }
};