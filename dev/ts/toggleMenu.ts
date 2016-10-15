"use strict";

interface Menu {
    $nav: JQuery;
    $btnOpen: JQuery;
    $btnClose: JQuery;
    overlay: string;

    handleEvents(): void;
    open(): void;
    close(): void;
}

// optionsの型を決める
interface Options {
    nav: string;
    btnOpen: string;
    btnClose: string;
    overlay?: string;
}

class ToggleMenu implements Menu{ //インターフェースのメンバー全てがpublicとなる為、アクセス修飾子がprivateの場合もコンパイルエラーとなる。
    public $nav: JQuery;
    public $btnOpen: JQuery;
    public $btnClose: JQuery;
    public overlay: string;

    constructor(private options: Options) {
        this.setOptions();
        this.handleEvents();
    }

    // $navのセット
    setOptions(): any {
        this.$nav = $(this.options.nav);
        this.$btnOpen = $(this.options.btnOpen);
        this.$btnClose = $(this.options.btnClose);
        this.overlay = this.options.overlay || '.nav-overlay';
    }

    handleEvents() {
        $(window).on("load", () => {
            this.close();
        });

        this.$btnClose.on("click",() => {
           this.close();
        });

        this.$btnOpen.on("click",() => {
            this.open();
        });

        $(document).on("click", this.overlay, () => {
            this.close();
        });
    }

    open() {
        this.$nav.addClass("open-nav");
        this.$nav.after("<div class='nav-overlay'></div>");
    }

    close() {
        this.$nav.removeClass("open-nav");
        $(this.overlay).remove();
    }
}

export { ToggleMenu }

