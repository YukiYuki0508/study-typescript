"use strict";

interface Options {
    clickContent: string;
    hoverContent: string;
}

export class AppearBlowing {
    $clickContent: JQuery;
    hoverContent: string;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents(): any {
        this.$clickContent = $(this.option.clickContent);
        this.hoverContent = this.option.hoverContent;
    }

    handleEvents() {
        this.$clickContent.hover((e: any) => {
            $(e.currentTarget).next(this.hoverContent).fadeIn(1000);
        }, (e: any) => {
            $(e.currentTarget).next(this.hoverContent).fadeOut(1000);
        });
    }
}
