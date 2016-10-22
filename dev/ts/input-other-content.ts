"use strict";
interface Options {
    commonName: string;
    textName: string;
    otherNum: number;
}
export class AdditionalText {
    $commonName: JQuery;
    $textName: JQuery;
    order: number;


    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents(): any {
        this.$commonName = $(this.option.commonName);
        this.$textName = $(this.option.textName);
        this.order = this.option.otherNum;
    }

    handleEvents() {
        this.$commonName.on("click", (e: any) => {
            this.toggleText(e);
        });
    }

    toggleText(event) {
        let num = this.$commonName.index(event.currentTarget);

        if(num == this.order){
            this.$textName.removeAttr("disabled");
        } else {
            this.$textName.attr("disabled","disabled");
        }
    }
}
