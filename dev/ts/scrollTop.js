"use strict";
var ScrollTop = (function () {
    function ScrollTop(element) {
        this.switchWindowWidth = 768;
        this.$element = $(element);
        this.handleEvents();
    }
    ScrollTop.prototype.handleEvents = function () {
        var _this = this;
        (window).on("load resize", function () {
            windowWidth = _this.getWindowWidth();
            _this.toggleBtn();
        });
        this.$element.on("click", function () {
            _this.scroll();
        });
    };
    // TOPにもどる
    ScrollTop.prototype.scroll = function () {
        $("body, html").animate({ scrollTop: 0 }, 500);
    };
    // ブラウザの横幅を取得　
    ScrollTop.prototype.getWindowWidth = function () {
        return $(window).width();
    };
    // ボタンが現れる高さを設定
    ScrollTop.prototype.getAppearBtnHeight = function () {
        if (this.windowWidth < this.switchWindowWidth) {
            return 400;
        }
        else {
            return 600;
        }
    };
    // スクロールしたらボタンを表示
    ScrollTop.prototype.toggleBtn = function () {
        $element.addClass(".hide-btn");
        appearBtnHeight = this.getAppearBtnHeight();
        if ($(window).scrollTop() >= this.appearBtnHeight) {
            $element.addClass(".hide-btn");
        }
        else {
            $element.removeClass(".hide-btn");
        }
    };
    return ScrollTop;
}());
exports.ScrollTop = ScrollTop;
