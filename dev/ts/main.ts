import { ScrollTop } from "./scrollTop";

$(function() {
    new ScrollTop('.to-top'); // <= 引数にボタンのエレメントを指定。
});

import { ToggleMenu } from "./toggleMenu";

var options = {
    nav: ".nav",
    btnOpen: ".open-menu",
    btnClose: ".close-menu ",
};

$(function() {
    var menu = new ToggleMenu(options);
});
