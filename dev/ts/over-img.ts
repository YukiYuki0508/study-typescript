"use strict";
interface Options {
    imgContainer: string;
}

export class OverImg {
    $imgContainer: JQuery;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents() {
        this.$imgContainer = $(this.option.imgContainer);
    }

    handleEvents() {
        this.$imgContainer.on("click", (e: any) => {
            this.overImg(e);
        });
    }

    overImg(event) {
        if ($(event.currentTarget).find(".imgTransition").hasClass("fadeOut")) {
            $(event.currentTarget).find(".imgTransition").removeClass("fadeOut");
            $(event.currentTarget).find(".imgTransition").addClass("fadeIn");
        }
        else {
            $(event.currentTarget).find(".imgTransition").addClass("fadeOut");
            $(event.currentTarget).find(".imgTransition").removeClass("fadeIn");
        }
    }
}
