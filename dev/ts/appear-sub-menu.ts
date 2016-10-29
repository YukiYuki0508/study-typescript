"use strict";

interface Options {
    header: string;
    mainMenu: string;
}

export class AppearSubMenu {
    $mainMenu: JQuery;
    navHeight: number;
    windowWidth: number;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents() {
        this.$mainMenu = $(this.option.mainMenu);
        this.navHeight = ($(this.option.header).height()) / 2;
    }

    handleEvents() {
        $(window).on("orientationchange resize load", () => {  // orientation:横向きにした時、縦向きにした時を検出して、イベントを取得する
            this.getWindowWidth();
            this.setListHeight();
        });

        this.$mainMenu.children("li").on({
            "mouseenter": (e: any) => {
                this.mouseOver(e);
            },
            "mouseleave": (e: any) => {
                this.mouseOut(e);
            }
        });
    }

    getWindowWidth() {
        this.windowWidth = $(window).width();
    }

    setListHeight() {
        let smpStyle = { // liとnavの高さを合わせる
            height: "auto",
            "line-height": "2",
        };
        let pcStyle = { // liとnavの高さを合わせる
            height: this.navHeight +"px",
            "line-height": this.navHeight +"px",
        };

        this.$mainMenu.children("li").css(this.windowWidth < 768 ? smpStyle : pcStyle)
    }

    mouseOver(event) {
        if(this.windowWidth < 768) { // spの部分は除去する
            return;
        }

        this.$mainMenu.find("ul").css({
            width: event.currentTarget.offsetWidth + "px",
            top: this.$mainMenu.innerHeight() + "px",
        });
        $(event.currentTarget).children('ul').show();
    }

    mouseOut(event) {
        if(this.windowWidth < 768) { // spの部分は除去する
            return;
        }

        $(event.currentTarget).children('ul').hide();
    }
}
