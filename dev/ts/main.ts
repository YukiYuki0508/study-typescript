import { ScrollTop } from "./scrollTop";

$(function() {
    new ScrollTop('.to-top'); // <= 引数にボタンのエレメントを指定。
});

import { ToggleMenu } from "./toggleMenu";

$(function() {
    let options = {
        nav: ".nav",
        btnOpen: ".open-menu",
        btnClose: ".close-menu",
    };

    new ToggleMenu(options);
});

import { Tab } from "./tab";

$(function() {
    let options = {
        tabs: ".tab-menu li",
        contents: ".tab-contents",
    };
    new Tab(options);
});

import { HumanName } from "./getset";

$(function() {
    var yuki = new HumanName();
    yuki.Name= "yuki";
    console.log(yuki.Name);
});
