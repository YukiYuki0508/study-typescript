"use strict";

interface Options {
    toggleContent: string;
    contentNumber: number;
    fadeinSpeed: number;
    fadeoutSpeed: number;
    deltaSpeed: number;
}

export class FadeinFadeout {
    $toggleContent;
    contentNumber;
    fadeinSpeed;
    fadeoutSpeed;
    deltaSpeed;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents() {
        this.$toggleContent = $(this.option.toggleContent);
        this.contentNumber = this.option.contentNumber;
        this.fadeinSpeed = this.option.fadeinSpeed;
        this.fadeoutSpeed = this.option.fadeoutSpeed;
        this.deltaSpeed = this.option.deltaSpeed;

    }

    handleEvents() {
        $(window).on("load", () => {
            this.fadeinFadeout();
        });
    }

    fadeinFadeout() {
        if(this.$toggleContent) {
            // 要素数分、for文で回す
            for (var i = 0; i < ( this.contentNumber - 1 ); i++) {
                this.$toggleContent.find("img").eq(i)
                    .delay((i * (this.deltaSpeed ))  + this.fadeinSpeed).fadeIn("slow")
                    .delay(this.fadeoutSpeed).fadeOut("slow");
            }

            this.$toggleContent.find("img").eq(this.contentNumber - 1)
                .delay((( this.contentNumber - 1 ) * (this.deltaSpeed ))  + this.fadeinSpeed).fadeIn("slow")
        }
    }
}
