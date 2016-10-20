"use strict";

interface Options {
    checkbox: string;
    form: string;
}

export class ToggleDisable {
    private $checkbox;
    private $form;
    private elements: string[] = [];

    constructor(private option: Options) {
        this.setContents();
        this.setDisabled();
        this.handleEvents();
    }

    setContents(): any {
        this.elements = [
            "input:not([name='agree'])",
            "textarea",
            "select"
        ];
        this.$checkbox = $(this.option.checkbox);
        this.$form = $(this.option.form);
    }

    handleEvents() {
        this.$checkbox.on("click", () => {
            var isAgreed = this.$checkbox.prop("checked");
            if(isAgreed) {
                this.removeDisabled();
            } else {
                this.setDisabled();
            }
        });
    }

    removeDisabled() {
        this.elements.forEach(element => {
            this.$form.find(element).removeAttr("disabled");
        });
    }

    setDisabled() {
        this.elements.forEach(element => {
            this.$form.find(element).attr("disabled","disabled");
        })
    }
}
