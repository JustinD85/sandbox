"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
var HelloApp = function (divName, name) {
    var element = document.getElementById(divName);
    element.innerText = greet_1.hello(name);
};
HelloApp('greeting', "Justin Duncan");
