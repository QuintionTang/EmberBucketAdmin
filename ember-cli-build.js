"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
        sassOptions: {
            extension: "scss",
        },
    });

    //脚本文件
    app.import("node_modules/parsleyjs/dist/parsley.js");
    //字体文件
    app.import("node_modules/font-awesome/fonts/fontawesome-webfont.eot", {
        destDir: "fonts",
    });
    app.import("node_modules/font-awesome/fonts/fontawesome-webfont.svg", {
        destDir: "fonts",
    });
    app.import("node_modules/font-awesome/fonts/fontawesome-webfont.ttf", {
        destDir: "fonts",
    });
    app.import("node_modules/font-awesome/fonts/fontawesome-webfont.woff", {
        destDir: "fonts",
    });
    app.import("node_modules/font-awesome/fonts/fontawesome-webfont.woff2", {
        destDir: "fonts",
    });
    //样式文件
    app.import("node_modules/font-awesome/css/font-awesome.css");
    app.import("node_modules/bootstrap/dist/css/bootstrap.css");

    return app.toTree();
};
