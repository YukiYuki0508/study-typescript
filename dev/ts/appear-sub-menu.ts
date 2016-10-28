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
        this.setListHeight();
        this.handleEvents();
        this.toggleMenu();
    }

    setListHeight() {
        this.$mainMenu.children("li").css({ // liとnavの高さを合わせる
            height: this.navHeight +"px",
            "line-height": this.navHeight +"px",
        });
    }

    setContents() {
        this.$mainMenu = $(this.option.mainMenu);
        this.navHeight = ($(this.option.header).height()) / 2;
    }

    handleEvents() {
        $(window).on("orientationchange resize load", () => {  // orientation:横向きにした時、縦向きにした時を検出して、イベントを取得する
            this.getWindowWidth();
        });
    }

    getWindowWidth() {
        this.windowWidth = $(window).width();
        console.log(this.windowWidth);
    }

    toggleMenu() {
        console.log(this.windowWidth);
        if(this.windowWidth > 768) { // pcの部分は除去する
            this.$mainMenu.children("li").hover((e: any) => {
                this.$mainMenu.find("ul").css({
                    width: e.currentTarget.offsetWidth + "px",
                    top: this.$mainMenu.innerHeight() + "px",
                });
                $(e.currentTarget).children('ul').show();
            }, (e: any) => {
                $(e.currentTarget).children('ul').hide();
            });
        }
    }
}
