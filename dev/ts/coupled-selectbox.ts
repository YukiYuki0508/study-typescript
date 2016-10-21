"use strict";

interface Options {
    firstSelectName: string;
    secondSelectName: string;
    titleSelectClass: string;
}
export class CoupledSelectBox {
    private firstSelect: string;
    private secondSelect: string;
    private message: string;
    private firstSelectClass: string;
    private count: number;


    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
    }

    setContents(): any {
        this.firstSelect = this.option.firstSelectName;
        this.secondSelect = this.option.secondSelectName;
        this.message = this.option.titleSelectClass;
    }

    setParameters(): any {
        // 選択されているoptionのクラス名を取得
        this.firstSelectClass = $(this.firstSelect + "  option:selected").attr("class"); // .attr(): 属性に値を設定、または設定されている値を取得。
        // 次のselectの要素数を取得
        this.count = $(this.secondSelect).children().length; // .children(): 現在マッチしている要素の子要素を取得。

    }

    handleEvents() {
        $(window).on("load", () => {
            this.fixDefaultSelectBox();
        });

        $(this.firstSelect).on("change",() => {
            this.coupleSelectBox();
        });
    }

    fixDefaultSelectBox() {
        this.setParameters();

        if(this.firstSelectClass === this.message) {
            // 要素数分、for文で回す
            for (var i = 0; i < this.count; i++) {
                let secondSelectClass = $(this.secondSelect + "  option:eq(" + i + ")"); // :eq(): 指定したインデックス番号の要素を選択。

                if(secondSelectClass.attr("class") === this.firstSelectClass) {
                    secondSelectClass.show(); // .show():非表示になっている要素を表示。
                } else {
                    secondSelectClass.hide();
                }
            }
        }
    }

    coupleSelectBox() {
        this.setParameters();

        for (var i = 0; i < this.count; i++) {
            let secondSelectClass = $(this.secondSelect + "  option:eq(" + i + ")"); // :eq(): 指定したインデックス番号の要素を選択。

            if(secondSelectClass.attr("class") === this.firstSelectClass) {
                secondSelectClass.show(); // .show():非表示になっている要素を表示。
            }else {
                if(secondSelectClass.attr("class") === this.message) {
                    secondSelectClass.show();  //「選択して下さい」を表示させる
                    secondSelectClass.prop("selected",true);  // .prop(): 属性プロパティに値を設定、または設定されている値を取得。
                } else {
                    secondSelectClass.hide();
                }
            }

            let firstSelectClass2 = $(this.firstSelect + "  option:selected").attr("class");

            if(this.firstSelectClass !== firstSelectClass2) {
                secondSelectClass.show();  //「選択して下さい」を表示させる
                secondSelectClass.prop("selected",true);  //「選択して下さい」を強制的に選択されている状態にする
            }
        }
    }

}
