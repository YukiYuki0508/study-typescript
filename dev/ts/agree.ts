"use strict";

export class ToggleDisable {
    private $element;

    constructor(element) {
        this.$element = $(element);
        this.addDisable();
        this.handleEvents();
    }

    handleEvents() {
        this.$element.on("click", () => {
            var isAgreed = this.$element.prop("checked");
            if(isAgreed) {
                this.removeDisable();
            } else {
                this.addDisable();
            }
        });
    }

    removeDisable() {
        $("input:not([name='agree']), textarea, select").removeAttr("disabled");
    }
    addDisable() {
        $("input:not([name='agree']), textarea, select").attr("disabled","disabled");
    }
}
