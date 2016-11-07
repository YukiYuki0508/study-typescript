interface Options {
    value: string;
    save: string;
    result: string;
    remove: string;
    clear: string;
}

export class LocalStorage2 {
    setdata: string; //localStorageのキー
    obj: {
        data: string;
    };
    key: string;
    $value: JQuery;
    $save:JQuery;
    $result: JQuery;
    $remove: JQuery;
    $clear: JQuery;

    constructor(private option: Options) {
        this.setContents();
        this.handleEvents();
        this.initialSet();
        this.showData();
    }

    setContents() {
        this.setdata = "name";
        this.key = "data";
        this.obj = {
            "data": "名無し",
        };
        this.$value = $(this.option.value);
        this.$save = $(this.option.save);
        this.$result = $(this.option.result);
        this.$remove = $(this.option.remove);
        this.$clear = $(this.option.clear);
    }

    handleEvents() {
        this.$save.on("click", () => {
            this.setData();
        });

        this.$remove.on("click", () => {
            this.removeData();
        });
        this.$clear.on("click", () => {
            this.removeAllData();
        });

    }

    setObject(obj) {
        //2. JSONデータに保存して登録する
        let str = JSON.stringify(obj);
        localStorage.setItem(this.setdata, str);
    }

    setData() {
        let val = this.$value.val();
        let obj = this.getData();

        if(!obj || !val) {
            obj = {};
        }
        // 1. データをオブジェクト保存する
        obj[this.key] = val;
        this.setObject(obj);
        this.showData();

    }

    getData() {
        // JSONデータに戻してから取得する
        let str = localStorage.getItem(this.setdata);
        return JSON.parse(str);
    }

    showData() {
        this.$result.empty(); //子要素をすべて削除
        let obj = this.getData();
        if(!obj) {
            obj = this.obj;
        }

        for(let key in obj) {
            this.$result.append(obj[key] + key);
        }
    }

    removeData() {
        let obj = this.getData();
        if(obj) {
            delete obj[this.key];
            this.setObject(obj);
            this.showData();
        }
    }

    removeAllData() {
        localStorage.clear();
        this.showData();
    }

    initialSet() {
        let data = this.getData();
        if(!data) {
            this.setObject(this.obj);
        }
    }
}
