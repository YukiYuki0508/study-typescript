"use strict";

interface Options {
    imgContainer: string;
    beforeImg: string;
    afterImg: string;
}

export class ToggleImg {
    $imgContainer: JQuery;
    $beforeImg: JQuery;
    $afterImg: JQuery;

    constructor(private option:Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents(): any {
        this.$imgContainer = $(this.option.imgContainer);
        this.$beforeImg = $(this.option.beforeImg);
        this.$afterImg = $(this.option.afterImg);
    }

    handleEvents() {
        this.$imgContainer.on("click", (e: any) => {
            this.toggleImg(e);
        });
    }

    toggleImg(event) {
        if ($(event.currentTarget).find(".clickCount").length > 0) {
            $(event.currentTarget).find($(this.option.beforeImg)).css("display", "block");
            $(event.currentTarget).find($(this.option.afterImg)).css("display", "none");
            $(event.currentTarget).find($(this.option.beforeImg)).removeClass("clickCount");
        }
        else {
            $(event.currentTarget).find($(this.option.afterImg)).css("display", "block");
            $(event.currentTarget).find($(this.option.beforeImg)).css("display", "none");
            $(event.currentTarget).find($(this.option.beforeImg)).addClass("clickCount");
        }
    }
}

