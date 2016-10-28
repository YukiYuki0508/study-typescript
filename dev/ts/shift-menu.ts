"use strict";

interface Options {
    header: string;
    nav: string;
    navBtn: string;
}

export class ShiftMenu {
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
            this.switchNav();
        });

        this.$navBtn.on('click', () => {
            this.toggleNav();
        });
    }

    getWindowWidth() {
        this.windowWidth = $(window).width();
        return;
    }

    getWindowHeight() {
        this.windowHeight = $(window).height();
        return;
    }

    switchNav() {
        if(this.windowWidth < 768) {
            this.$nav.css({
                display: "none",
                position: "fixed",
                top: "0",
                left: "0",
                "z-index": "100000",
                height: this.windowHeight + "px",
            });

        } else {
            this.$nav.css({
                position: "relative",
                display: "inline-block",
                height: (this.headerHeight / 2 ) + "px",
            });
        }
    }

    toggleNav() {
        if(this.windowWidth < 768) {
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
}
