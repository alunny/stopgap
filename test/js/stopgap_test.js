(function() {

    // mousedown

    module('deviceready');

    test('should fire a devicereadyevent', 1, function() {
        document.addEventListener('deviceready', function () {
            start();
            ok(true);
        });

        stop();
        StopGap();
    });

})();
