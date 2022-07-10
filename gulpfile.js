let path = require("path");
let fs = require("fs");
let scss = require("gulp-dart-scss");
let cleancss = require("gulp-clean-css");
let cache = require("gulp-cached");
let remember = require("gulp-remember");
let autoprefixer = require("gulp-autoprefixer");
let uglify = require("gulp-uglify");
let babel = require("gulp-babel");
let sourcemaps = require("gulp-sourcemaps");
let htmlmin = require("gulp-htmlmin");

// 添加版本号
let rev = require("gulp-rev");
let revColl = require("gulp-rev-collector");

let concat = require("gulp-concat");

let clean = require("gulp-clean");

var sort = require("gulp-sort");
var inject = require("gulp-inject");

let browserSync = require("browser-sync").create();
var through = require("through-gulp");

const { src, dest, parallel, watch, series } = require("gulp");
var rename = require("gulp-rename");
// 静态资源输出目录

let distPath = path.join(__dirname, "./public/dist");

let sourcePath = {
  baseScss: ["frontend/src/style/**/*.scss"],
  componentScss: ["frontend/view_dev/components/**/*.scss"],
  pageScss: ["frontend/view_dev/pages/**/*.scss"],

  componentJs: ["frontend/view_dev/components/**/*.js"],
  baseJs: ["frontend/src/js/**/*.js"],
  pageJs: ["frontend/view_dev/pages/**/*.js"],

  componentsHtml: [
    "frontend/view_dev/**/*.html",
    "!frontend/view_dev/pages/**/*.*",
  ],
  pageHtml: ["frontend/view_dev/pages/**/*.html"],

  plugins: ["frontend/src/plugins/**/*.*"],
};

// scss处理任务:start
// 处理公共Scss
function compileBaseScss() {
  let scssPath = sourcePath.baseScss;
  return (
    src(scssPath)
      // .pipe(cache("compileBaseScss"))
      .pipe(scss())
      .on("error", function (err) {
        console.log(err.toString());
        this.emit("end");
      })
      .pipe(
        autoprefixer({
          cascade: false,
          overrideBrowserslist: ["last 2 versions", "Android >= 4.0"],
        })
      )
      .pipe(rev())
      // .pipe(remember("compileBaseScss"))
      .pipe(dest(distPath + "/style"))
      .pipe(
        rev.manifest({
          base: "./frontend/rev",
          merge: false,
          path: "./frontend/rev/css-base-manifest.json",
        })
      )
      .pipe(dest("./frontend/rev"))
  );
}
exports.compileBaseScss = compileBaseScss;
// 处理组件Scss
function compileComponentScss() {
  let componentScssPath = sourcePath.componentScss;
  return (
    src(componentScssPath)
      // .pipe(cache("compileComponentScss"))
      .pipe(sort())
      .pipe(scss())
      .on("error", function (err) {
        console.log(err.toString());
        this.emit("end");
      })
      .pipe(
        autoprefixer({
          cascade: false,
          overrideBrowserslist: ["last 2 versions", "Android >= 4.0"],
        })
      )

      .pipe(concat("common/components.css"))
      .pipe(rev())
      // .pipe(remember("compileComponentScss"))
      .pipe(dest(distPath + "/style"))
      .pipe(
        rev.manifest({
          base: "./frontend/rev",
          merge: false,
          path: "./frontend/rev/css-component-manifest.json",
        })
      )
      .pipe(dest("./frontend/rev"))
  );
}
exports.compileComponentScss = compileComponentScss;

// 处理页面Scss
function compilePageScss() {
  let pageScssPath = sourcePath.pageScss;
  // TODO:添加alias，
  return (
    src(pageScssPath)
      // .pipe(cache("compilePageScss"))
      .pipe(scss())
      .on("error", function (err) {
        console.log(err.toString());
        this.emit("end");
      })
      .pipe(
        autoprefixer({
          cascade: false,
          overrideBrowserslist: ["last 2 versions", "Android >= 4.0"],
        })
      )
      .pipe(
        rename(function (path) {
          let fileName = path.dirname.split(path.sep).pop();
          path.dirname = "/";
          path.basename = fileName;
          path.extname = ".css";
        })
      )
      .pipe(rev())
      // .pipe(remember("compilePageScss"))
      .pipe(dest(distPath + "/style/pages"))
      .pipe(
        rev.manifest({
          base: "./frontend/rev",
          merge: false,
          path: "./frontend/rev/css-page-manifest.json",
        })
      )
      .pipe(dest("./frontend/rev"))
  );
}
exports.compilePageScss = compilePageScss;

// 处理所有Scss
const compileAllScss = series(
  compileBaseScss,
  compileComponentScss,
  compilePageScss
);
exports.compileAllScss = compileAllScss;

// scss处理任务：end

// js处理任务:start

// 处理组件js

function compileComponentJs() {
  let componentJsPath = sourcePath.componentJs;
  return (
    src(componentJsPath)
      // .pipe(cache("compileComponentJs"))
      .pipe(sort())
      .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      .pipe(concat("base_components.js"))
      .pipe(rev())
      .pipe(sourcemaps.write("./"))
      // .pipe(remember("compileComponentJs"))
      .pipe(dest(distPath + "/js"))
      .pipe(
        rev.manifest({
          base: "./frontend/rev",
          merge: false,
          path: "./frontend/rev/js-component-manifest.json",
        })
      )
      .pipe(dest("./frontend/rev"))
  );
}
exports.compileComponentJs = compileComponentJs;
// 处理页面js

function compilePageJs() {
  let pageJsPath = sourcePath.pageJs;
  return src(pageJsPath)
    .pipe(cache("compilePageJs"))
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(
      rename(function (path) {
        let fileName = path.dirname.split(path.sep);
        path.dirname = "/pages/";
        path.basename = fileName;
        path.extname = ".js";
      })
    )
    .pipe(rev())
    .pipe(sourcemaps.write("./"))
    .pipe(remember("compilePageJs"))
    .pipe(dest(distPath + "/js"))
    .pipe(
      rev.manifest({
        base: "./frontend/rev",
        merge: false,
        path: "./frontend/rev/js-page-manifest.json",
      })
    )
    .pipe(dest("./frontend/rev"));
}
exports.compilePageJs = compilePageJs;

// 处理公共js
function compileBaseJs() {
  let pageJsPath = sourcePath.baseJs;
  return (
    src(pageJsPath)
      // .pipe(cache("compileBaseJs"))
      .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      .pipe(rev())
      .pipe(sourcemaps.write("./"))
      // .pipe(remember("compileBaseJs"))
      .pipe(dest(distPath + "/js"))
      .pipe(
        rev.manifest({
          base: "./frontend/rev",
          merge: false,
          path: "./frontend/rev/js-base-manifest.json",
        })
      )
      .pipe(dest("./frontend/rev"))
  );
}
exports.compileBaseJs = compileBaseJs;

// 处理全部js任务
const compileAllJs = series(compileComponentJs, compileBaseJs, compilePageJs);
exports.compileAllJs = compileAllJs;

// js处理任务:end

// 处理图片任务
// images目录
let imagesPath = ["frontend/src/images/**/*.{png,jpg,jpeg,gif,svg}"];
function compileImages() {
  return src(imagesPath)
    .pipe(cache("compileImages"))
    .pipe(remember("compileImages"))
    .pipe(dest(distPath + "/images"));
}
exports.compileImages = compileImages;

// html任务：start
function pageHtmlParse() {
  var stream = through(
    function (file, encoding, callback) {
      //如果文件为空，不做任何操作，转入下一个操作，即下一个pipe
      if (file.isNull()) {
        console.log("file is null!");
        this.push(file);
        return callback();
      }
      //插件不支持对stream直接操作，抛出异常
      if (file.isStream()) {
        console.log("file is stream!");
        this.emit("error");
        return callback();
      }
      let fileName = file.basename;
      let dirname = file.dirname;

      if (
        fileName.indexOf(".html") > -1 &&
        dirname.indexOf("frontend/view_dev/pages") > -1
      ) {
        let pagePath = path.join(__dirname, "./frontend/view_dev");
        let relative = path.relative(pagePath, dirname);
        // public/dist/style/pages/index
        // 插入
        let content = file.contents.toString("utf-8");
        let scriptStr = `
        \n{block name="style"}\n<link href="CSS/${relative}.css" rel="stylesheet" type="text/css" />\n{/block}
        `;
        let styleStr = `
        \n{block name="js"}\n<script src="JS/${relative}.js"></script>\n{/block}
        `;
        content = content.concat(styleStr);
        content = content.concat(scriptStr);
        file.contents = Buffer.from(content, "utf-8");
        // content
      }
      this.push(file);
      callback();
    },
    function (callback) {
      // console.log('处理完毕!');
      callback();
    }
  );
  return stream;
}

// 组件、layout的模板处理

function compileComponentHtml() {
  let componentAndLayoutsViewPath = [
    "./frontend/rev/*.json",
    ...sourcePath.componentsHtml,
  ];
  return src(componentAndLayoutsViewPath)
    .pipe(revColl())
    .pipe(dest("./app/view"));
}
exports.compileComponentHtml = compileComponentHtml;

function compilePageHtml() {
  let componentAndLayoutsViewPath = [
    "./frontend/rev/*.json",
    ...sourcePath.pageHtml,
  ];
  return src(componentAndLayoutsViewPath)
    .pipe(pageHtmlParse())
    .pipe(revColl())
    .pipe(
      rename(function (path) {
        let fileName = path.dirname.split(path.sep);
        path.dirname = "/";
        path.basename = fileName;
        path.extname = ".html";
      })
    )
    .pipe(dest("./app/view"));
}
exports.compilePageHtml = compilePageHtml;
const compileAllHtml = series(compileComponentHtml, compilePageHtml);
exports.compileAllHtml = compileAllHtml;

// html任务：end

// 处理plugins 任务

// 处理通用插件
function compilePluginsJs() {
  let pluginPath = sourcePath.plugins;
  return src(pluginPath).pipe(dest(distPath + "/plugins"));
}
exports.compilePluginsJs = compilePluginsJs;

// 清理public/dist  和 app/view
function cleanDist() {
  return src(["public/dist"], { allowEmpty: true }).pipe(clean());
}

function watchTask(cb) {
  browserSync.init({
    proxy: "127.0.0.1:80",
  });
  watch(sourcePath.baseScss, series(compileBaseScss));
  watch(sourcePath.componentScss, series(compileComponentScss));
  watch(sourcePath.pageScss, series(compilePageScss));

  watch(sourcePath.componentJs, series(compileComponentJs));
  watch(sourcePath.pageJs, series(compilePageJs));
  watch(sourcePath.baseJs, series(compileBaseJs));

  watch(sourcePath.componentsHtml, series(compileComponentHtml));
  watch(sourcePath.pageHtml, series(compilePageHtml));

  watch(imagesPath, series(compileImages));
  watch(sourcePath.plugins, series(compilePageHtml));

  watch(["./frontend/rev/*.json"], compileAllHtml);

  browserSync.watch("app/view/**/*.html").on("change", browserSync.reload);
  browserSync.watch("public/**/*.*").on("change", browserSync.reload);
  cb();
}
exports.watchTask = watchTask;

exports.dev = series(
  cleanDist,
  parallel(compileAllScss, compileAllJs, compilePluginsJs, compileImages),
  compileAllHtml,
  watchTask
);

function miniCss() {
  return src(["./public/dist/style/**/*.css"], {
    allowEmpty: true,
  })
    .pipe(cleancss())
    .pipe(dest("./public/dist/"));
}
function miniJs() {
  return src(["./public/dist/**/*.js"], {
    allowEmpty: true,
  })
    .pipe(uglify())
    .pipe(dest("./public/dist/"));
}
exports.miniCss = miniCss;

exports.build = series(
  cleanDist,
  parallel(compileAllScss, compileAllJs, compilePluginsJs, compileImages),
  compileAllHtml,
  parallel(miniCss, miniJs)
);
