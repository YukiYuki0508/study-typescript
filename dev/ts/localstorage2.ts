interface Options {
    value: string;
    save: string;
    result: string;
    remove: string;
    clear: string;
}

export class LocalStorage2 {
    setDataList: string; //localStorageのキー
    obj: {
        data: string;
    };
    key: string;
    $valueArea: JQuery;
    $saveBtn:JQuery;
    $resultArea: JQuery;
    $removeBtn: JQuery;
    $clearBtn: JQuery;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
        this.initialSet();
        this.showData();
    }

    setContents() {
        this.setDataList = "name";
        this.key = "data";
        this.obj = {
            "data": "名無し",
        };
        this.$valueArea = $(this.option.value);
        this.$saveBtn = $(this.option.save);
        this.$resultArea = $(this.option.result);
        this.$removeBtn = $(this.option.remove);
        this.$clearBtn = $(this.option.clear);
    }

    handleEvents() {
        this.$saveBtn.on("click", () => {
            this.setData();
            this.showData();
        });
        this.$removeBtn.on("click", () => {
            this.removeData();
            this.showData();
        });
        this.$clearBtn.on("click", () => {
            this.removeAllData();
            this.showData();
        });

    }

    setObject(obj) {
        //2. JSONデータに保存して登録する
        let str = JSON.stringify(obj);
        localStorage.setItem(this.setDataList, str);
    }

    setData() {
        let val = this.$valueArea.val();
        let obj = this.getData();
        if(!val) {
            obj = this.obj;
        } else {
            obj[this.key] = val;
        }
        // 1. データをオブジェクト保存する
        this.setObject(obj);
    }

    getData() {
        // JSONデータに戻してから取得する
        let str = localStorage.getItem(this.setDataList);
        return JSON.parse(str);
    }

    showData() {
        this.$resultArea.empty(); //子要素をすべて削除
        let obj = this.getData();
        if(!obj) {
            obj = this.obj;
        }

        for(let key in obj) {
            this.$resultArea.append(obj[key] + key);
        }
    }

    removeData() {
        let obj = this.getData();
        if(obj) {
            delete obj[this.key];
            this.setObject(obj);
        }
        if(!obj[this.key]) {
            this.setObject(this.obj);
            this.$valueArea.val("");
        }
    }

    removeAllData() {
        localStorage.clear();
        this.setObject(this.obj);
        this.$valueArea.val("");
    }

    initialSet() {
        let data = this.getData();
        if(!data) {
            this.setObject(this.obj);
        }
    }
}
