"use strict";

interface Options {
    header: string;
    nav: string;
    navBtn: string;
}

export class ChangeMenu {
    $header: JQuery;
    $nav: JQuery;
    $navBtn: JQuery;
    headerHeight: number;
    windowWidth: number;
    windowHeight: number;

    constructor(private option: Options) {
        this.setContents();
        this.reset();
        this.handleEvents();
    }

    reset() {
        if(this.windowWidth < 768) {
            this.$nav.addClass("openMenu");
        }
    }

    setContents() {
        this.$header = $(this.option.header);
        this.$nav = $(this.option.nav);
        this.$navBtn = $(this.option.navBtn);
        this.headerHeight = $(this.option.header).height();
    }

    handleEvents() {
        $(window).on("orientationchange resize load", () => {  // orientation:横向きにした時、縦向きにした時を検出して、イベントを取得する
            this.getWindowWidth();
            this.getWindowHeight();
            this.reset();
            this.changeNav();
        });

        this.$navBtn.on('click', () => {
            this.toggleNav();
        });
    }

    getWindowWidth() {
        this.windowWidth = $(window).width();
    }

    getWindowHeight() {
        this.windowHeight = $(window).height();
    }

    changeNav() {
        let smpStyle = {
            display: "none",
            position: "fixed",
            top: "0",
            left: "0",
            "z-index": "39",
            height: this.windowHeight + "px",
        };
        let pcStyle = {
            position: "relative",
            display: "inline-block",
            height: (this.headerHeight / 2 ) + "px",
        };

        this.$nav.css(this.windowWidth < 768 ? smpStyle : pcStyle)
    }

    toggleNav() {
        if(this.windowWidth >= 768) { // pcの部分は除去する
            return;
        }

        if(this.$nav.hasClass("openMenu")) {
            this.$nav.css({display: "block"});
            this.$nav.removeClass("openMenu");
        } else {
            this.$nav.css({display: "none"});
            this.$nav.removeClass("openMenu");
            this.$nav.addClass("openMenu");
        }
    }

}
