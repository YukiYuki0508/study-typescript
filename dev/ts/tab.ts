"use strict";
interface Options {
    tabs: string;
    contents: string;
}

export class Tab {
    $contents: JQuery;

    constructor(private option: Options) {
        this.setTabContents();
        this.handleEvents();
    }

    setTabContents(): any {
        this.$contents = $(this.option.contents);
    }

    handleEvents() {
        $(this.option.tabs).on("click", (e: any) => {
            this.changeTab(e); // e: イベントオブジェクト。イベントに関わるさまざまな情報を管理するためのもの
            console.log(e);
            return false;
        });
    }

    changeTab(event) {
        let $tabs = $(this.option.tabs);
        let index = $tabs.index(event.currentTarget); //.currentTarget: バブリング中のイベントが現在通過しているDOM要素を取得

        this.$contents.addClass("hide-tab");
        this.$contents.eq(index).removeClass("hide-tab");
        $tabs.removeClass("selected"); //
        $(event.currentTarget).addClass("selected");
    }
}
