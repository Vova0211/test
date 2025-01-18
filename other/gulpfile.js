const { parallel, src, dest } = require("gulp");

const myFirstGulpTask = (done) => {
  console.log("My First Gulp Task Completed");
  done();
}
const mySecondGulpTask = (done) => {
  console.log("My Second Gulp Task Completed");
  done();
}
const copyCSS = () => {
  return src(['work_for_04_12/**/*.css', '!work_for_04_12/da/**'])
    .pipe(dest('assets/'));
}
exports.default = parallel(myFirstGulpTask, mySecondGulpTask);
exports.myFirstGulpTask = myFirstGulpTask;
exports.mySecondGulpTask = mySecondGulpTask;
exports.copyCSS = copyCSS;