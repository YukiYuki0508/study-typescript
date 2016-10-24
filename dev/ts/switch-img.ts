"use strict";
interface Options {
    switchWidth: number;
}

export class SwitchImg {
    switchWidth: number;
    windowWidth: number;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
        this.switchImg();
    }

    setContents(): any {
        this.switchWidth = this.option.switchWidth;
    }

    handleEvents() {
        $(window).on("load resize", () => {
            this.windowWidth = $(window).width();
            this.switchImg();
        });
    }

    switchImg() {
        if (this.windowWidth < this.switchWidth) {
            $(".imgChange").each(function () {
                    $(this).attr("src", $(this).attr("src").replace("-pc", "-sp"));
                }
            );
        } else {
            $(".imgChange").each(function () {
                    $(this).attr("src", $(this).attr("src").replace("-sp", "-pc"));
                }
            );
        }
    }
}
