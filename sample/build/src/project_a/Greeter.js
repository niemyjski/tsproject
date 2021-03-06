define(["require", "exports", "./bar"], function (require, exports, bar_1) {
    var Greeter = (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
            this.bar = new bar_1.bar();
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    })();
    exports.Greeter = Greeter;
    window.onload = function () {
        var el = document.getElementById('content');
        var greeter = new Greeter(el);
        greeter.start();
    };
});
