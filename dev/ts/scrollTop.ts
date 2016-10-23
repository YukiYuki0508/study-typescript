"use strict";

class ScrollTop {
    private switchWindowWidth: number = 768;
    private $element;
    private btnPosition;

    constructor(element) {
        this.$element = $(element);
        this.handleEvents();
    }

    handleEvents() {
        $(window).on("load resize", () => {
            this.setBtnPosition();
        });

        $(window).on("scroll", () => {
            this.toggleBtn();
        });

        this.$element.on("click", () => {
            this.scroll();
        });
    }

    // TOPにもどる
    scroll() {
        $("body, html").animate({ scrollTop: 0 }, 500);
    }

    // ブラウザの横幅を取得　
    getWindowWidth(): number {
        return $(window).width();
    }

    // ボタンが現れる高さを設定
    getBtnPosition(): number {
        let windowWidth = this.getWindowWidth();

        if( windowWidth < this.switchWindowWidth ) {
            return 50;
        } else {
            return 100;
        }
    }

    // スクロールしたらボタンを表示
    toggleBtn() {
        if( $(window).scrollTop() < this.btnPosition ) {
            this.$element.addClass("hide-btn");
        } else {
            this.$element.removeClass("hide-btn");
        }
    }

    // ボタンの現れる位置をセットする
    setBtnPosition() {
        this.btnPosition = this.getBtnPosition();
    }
}

export { ScrollTop }

