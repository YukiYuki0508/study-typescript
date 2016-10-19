import { ScrollTop } from "./scrollTop";

$(function() {
    new ScrollTop('.to-top'); // <= 引数にボタンのエレメントを指定。
});

import { ToggleMenu } from "./toggleMenu";

var options = {
    nav: ".nav",
    btnOpen: ".open-menu",
    btnClose: ".close-menu",
};

$(function() {
    new ToggleMenu(options);
});

import { Tab } from "./tab";

$(function() {
    new Tab({
        tabs: ".tab-menu li",
        contents: ".tab-contents",
    });
});
