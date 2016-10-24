"use strict";
interface  Options {
    lead: string;
    leadNumber: number;
    startSpeed: number;
    delaySpeed: number;
    fadeSpeed: number;
}

export class FadeInLead {
    $lead: JQuery;
    startSpeed: number;
    delaySpeed: number;
    fadeSpeed: number;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents(): any {
        this.$lead = $(this.option.lead);
        this.startSpeed = this.option.startSpeed;
        this.delaySpeed = this.option.delaySpeed;
        this.fadeSpeed = this.option.fadeSpeed;
    }
    handleEvents() {
        $(window).on("load", () => {
            this.fadeinLead();
        });
    }

    fadeinLead() {
        for(var i = 0; i < this.option.leadNumber; i++) {
            this.$lead.eq(i)
                .delay(this.startSpeed + (i * this.delaySpeed))
                .animate({opacity: "1"},this.fadeSpeed);
        }
    }
}
