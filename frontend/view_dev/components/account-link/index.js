$.accountLinkInit = function () {
  //TODO:绑定函数
  layer.open({
    title: false,
    type: 1,
    closeBtn: "1",
    area: ["596px", "auto"],
    content: $("#account-link-modal"),
  });
};
$(function () {
  // ClipboardJS
  var clipboard = new ClipboardJS("#copy");
  clipboard.on("success", function (e) {
    layer.msg("已复制：" + e.text, {
      time: 1000,
    });
  });
});
