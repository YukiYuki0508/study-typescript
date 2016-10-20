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
        this.handleEvents();
    }

    setContents(): any {
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


    addElement(element) {
        this.elements.push(element);
    }

    removeDisabled() {
        // $("textarea, select").removeAttr("disabled");
        // this.$form.find("input:not([name='agree']), textarea, select").removeAttr("disabled");
        this.elements.forEach(element => {
            this.$form.find(element).removeAttr("disabled");
        });
    }

    setDisabled() {
        // $("input:not([name='agree']), textarea, select").attr("disabled","disabled");
        this.elements.forEach(element => {
            this.$form.find(element).attr("disabled","disabled");
        })
    }
}
