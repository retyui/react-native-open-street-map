const { watch, src, dest, task, parallel } = require("gulp");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const terser = require("gulp-terser");

task("build", function () {
  return src([
    "./examples/OpenStreetMap/src/top.webview.js",
    "./examples/OpenStreetMap/lib/pre-top.webview.js",
    "./examples/OpenStreetMap/lib/**/*.webview.js",
    "./examples/OpenStreetMap/lib/pre-bottom.webview.js",
    "./examples/OpenStreetMap/src/bottom.webview.js",
  ])
    .pipe(terser())
    .pipe(concat("allWebview.js"))
    .pipe(replace(`"use strict";`, ""))

    .pipe(
      replace(`Object.defineProperty(exports,"__esModule",{value:!0}),`, "")
    )
    .pipe(
      replace(
        `Object.defineProperty(exports, "__esModule", { value: true });`,
        ""
      )
    )
    .pipe(
      replace(`Object.defineProperty(exports,"__esModule",{value:!0});`, "")
    )

    .pipe(replace(/exports\..+\s=\svoid\s0;/g, ""))
    .pipe(replace(/exports\..+=void\s0\,/g, ";"))
    .pipe(replace("exports.", "allCommandHandler."))
    .pipe(replace("`__remove__", ""))
    .pipe(
      replace(
        `\"var allCommandHandler = {};\";`,
        "`var allCommandHandler = {};"
      )
    )

    .pipe(dest("./examples/OpenStreetMap/src/"));
});

task("watch", function () {
  return watch("./examples/OpenStreetMap/lib/*.webview.js", parallel("build"));
});
