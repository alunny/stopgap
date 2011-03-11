function bindOnce(target, name, fun, captures) {
    var newFun = function () {
        fun();
        target.removeEventListener(name, newFun, captures);
    }

    target.addEventListener(name, newFun, captures);
}

(function(undef) {

    // mousedown

    module('deviceready');

    test('should fire a devicereadyevent', 1, function() {
        bindOnce(document, 'deviceready', function () {
            start();
            ok(true);
        }, false);

        stop();
        StopGap();
    });

    test('at which point PhoneGap should be defined', 1, function () {
        bindOnce(document, 'deviceready', function () {
            start();
            ok(window['PhoneGap']);
        }, false);

        stop();
        StopGap();
    });

})();
