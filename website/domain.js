/**
 * Created by caozheng on 2016/12/22.
 */

(function () {
    var _domain='';

    window.load_page = function (path) {
        var script = document.createElement('script');
        script.src = _domain+path+'.js';
        document.body.appendChild(script);
    }
})();