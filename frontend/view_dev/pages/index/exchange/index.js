$(function () {
  let exchangeFrom = "BTU";
  let exchangeTo = "USDT";

  function changeReceiver(from, to) {
    [to, from] = [from, to];
    exchangeFrom = from;
    exchangeTo = to;
    $("#exchange-from").html(exchangeFrom);
    $("#exchange-to").html(exchangeTo);
  }

  $(".exchange-icon-img").click(function () {
    changeReceiver(exchangeFrom, exchangeTo);
  });

  // 未登录，唤醒链接钱包面板
  $("#exchange-link-wallet").click(function () {
    $.walletLinkInit && $.walletLinkInit();
  });

  // 提交转换
  $("#exchange-submit").click(function () {
    alert("提交兑换申请");
  });
});
