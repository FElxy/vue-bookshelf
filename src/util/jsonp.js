export const jsonp = (url, params, fn) => {

    if (typeof params == 'function') {
        fn = params
        params = {}
    }

    let target = document.getElementsByTagName('script')[0] || document.head;

    let cbName = 'jsonp' + (Math.random() * Math.random()).toString().substr(2) + new Date().getTime();

    let timer, script, qstring='', scriptObj,
        timeout = 60000;

    function cleanup() {

        if (timer) { clearTimeout(timer) }
        	
        // if (script.parentNode) { script.parentNode.removeChild(script) }

        window[cbName] = function() {}


    }
    if (timeout) {
        timer = setTimeout(function() {
            cleanup();
            if (fn) fn(new Error('Timeout'));
        }, timeout);

        window[cbName] = function(data) {

            fn(null, data);

        }
    }

    for (let key in params) {
        qstring += key + '=' + params[key] + '&';
    }
    qstring += 'callback=' + cbName;
    url += '?' + qstring;

    scriptObj = document.createElement('script');
    scriptObj.src = url;
    target.appendChild(scriptObj);
}

