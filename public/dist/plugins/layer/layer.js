!function(p){"use strict";function t(e){var t=this;t.index=++g.index,t.config=m.extend({},t.config,c.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)}function h(e){return i.skin?" "+i.skin+" "+i.skin+"-"+e:""}var m,f,e,n=p.layui&&layui.define,c={getPath:(e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,n=i;0<n;n--)if("interactive"===t[n].readyState){e=t[n].src;break}return e||t[i].src}()).substring(0,e.lastIndexOf("/")+1),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(e,t){e=e.currentStyle||p.getComputedStyle(e,null);return e[e.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,t,i){var n,a,o,s;g.path&&(n=document.getElementsByTagName("head")[0],a=document.createElement("link"),o="layuicss-"+((i="string"==typeof t?t:i)||e).replace(/\.|\//g,""),s=0,a.rel="stylesheet",a.href=g.path+e,a.id=o,document.getElementById(o)||n.appendChild(a),"function"==typeof t&&function e(){return 80<++s?p.console&&console.error("layer.css: Invalid"):void(1989===parseInt(c.getStyle(document.getElementById(o),"width"))?t():setTimeout(e,100))}())}},g={v:"3.1.1",ie:(e=navigator.userAgent.toLowerCase(),!!(p.ActiveXObject||"ActiveXObject"in p)&&((e.match(/msie\s(\d+)/)||[])[1]||"11")),index:p.layer&&p.layer.v?1e5:0,path:c.getPath,config:function(e,t){return g.cache=c.config=m.extend({},c.config,e=e||{}),g.path=c.config.path||g.path,"string"==typeof e.extend&&(e.extend=[e.extend]),c.config.path&&g.ready(),e.extend&&(n?layui.addcss("modules/layer/"+e.extend):c.link("theme/"+e.extend)),this},ready:function(e){var t="layer",i=(n?"modules/layer/":"theme/")+"default/layer.css?v="+g.v;return n?layui.addcss(i,e,t):c.link(i,e,t),this},alert:function(e,t,i){var n="function"==typeof t;return g.open(m.extend({content:e,yes:i=n?t:i},n?{}:t))},confirm:function(e,t,i,n){var a="function"==typeof t;return a&&(n=i,i=t),g.open(m.extend({content:e,btn:c.btn,yes:i,btn2:n},a?{}:t))},msg:function(e,t,i){var n="function"==typeof t,a=c.config.skin,a=(a?a+" "+a+"-msg":"")||"layui-layer-msg",o=d.anim.length-1;return n&&(i=t),g.open(m.extend({content:e,time:3e3,shade:!1,skin:a,title:!1,closeBtn:!1,btn:!1,resize:!1,end:i},n&&!c.config.skin?{skin:a+" layui-layer-hui",anim:o}:(-1!==(t=t||{}).icon&&(void 0!==t.icon||c.config.skin)||(t.skin=a+" "+(t.skin||"layui-layer-hui")),t)))},load:function(e,t){return g.open(m.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,i){return g.open(m.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},i))}},d=(t.pt=t.prototype,["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"]),i=(d.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],t.pt.config={type:0,shade:.3,fixed:!0,move:d[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},t.pt.vessel=function(e,t){var i=this.index,n=this.config,a=n.zIndex+i,o="object"==typeof n.title,s=n.maxmin&&(1===n.type||2===n.type),o=n.title?'<div class="layui-layer-title" style="'+(o?n.title[1]:"")+'">'+(o?n.title[0]:n.title)+"</div>":"";return n.zIndex=a,t([n.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+i+'" times="'+i+'" style="z-index:'+(a-1)+'; "></div>':"",'<div class="'+d[0]+" layui-layer-"+c.type[n.type]+(0!=n.type&&2!=n.type||n.shade?"":" layui-layer-border")+" "+(n.skin||"")+'" id="'+d[0]+i+'" type="'+c.type[n.type]+'" times="'+i+'" showtime="'+n.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+a+"; width:"+n.area[0]+";height:"+n.area[1]+(n.fixed?"":";position:absolute;")+'">'+(e&&2!=n.type?"":o)+'<div id="'+(n.id||"")+'" class="layui-layer-content'+(0==n.type&&-1!==n.icon?" layui-layer-padding":"")+(3==n.type?" layui-layer-loading"+n.icon:"")+'">'+(0==n.type&&-1!==n.icon?'<i class="layui-layer-ico layui-layer-ico'+n.icon+'"></i>':"")+((1!=n.type||!e)&&n.content||"")+'</div><span class="layui-layer-setwin">'+(t=s?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"",n.closeBtn&&(t+='<a class="layui-layer-ico '+d[7]+" "+d[7]+(n.title?n.closeBtn:4==n.type?"1":"2")+'" href="javascript:;"></a>'),t)+"</span>"+(n.btn?function(){var e="";"string"==typeof n.btn&&(n.btn=[n.btn]);for(var t=0,i=n.btn.length;t<i;t++)e+='<a class="'+d[6]+t+'">'+n.btn[t]+"</a>";return'<div class="'+d[6]+" layui-layer-btn-"+(n.btnAlign||"")+'">'+e+"</div>"}():"")+(n.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],o,m('<div class="layui-layer-move"></div>')),this},t.pt.creat=function(){var e,n=this,a=n.config,o=n.index,s="object"==typeof(l=a.content),r=m("body");if(!a.id||!m("#"+a.id)[0]){switch("string"==typeof a.area&&(a.area="auto"===a.area?["",""]:[a.area,""]),a.shift&&(a.anim=a.shift),6==g.ie&&(a.fixed=!1),a.type){case 0:a.btn="btn"in a?a.btn:c.btn[0],g.closeAll("dialog");break;case 2:var l=a.content=s?a.content:[a.content||"http://layer.layui.com","auto"];a.content='<iframe scrolling="'+(a.content[1]||"auto")+'" allowtransparency="true" id="'+d[4]+o+'" name="'+d[4]+o+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+a.content[0]+'"></iframe>';break;case 3:delete a.title,delete a.closeBtn,-1===a.icon&&a.icon,g.closeAll("loading");break;case 4:s||(a.content=[a.content,"body"]),a.follow=a.content[1],a.content=a.content[0]+'<i class="layui-layer-TipsG"></i>',delete a.title,a.tips="object"==typeof a.tips?a.tips:[a.tips,!0],a.tipsMore||g.closeAll("tips")}n.vessel(s,function(e,t,i){r.append(e[0]),s?2==a.type||4==a.type?m("body").append(e[1]):l.parents("."+d[0])[0]||(l.data("display",l.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),m("#"+d[0]+o).find("."+d[5]).before(t)):r.append(e[1]),m(".layui-layer-move")[0]||r.append(c.moveElem=i),n.layero=m("#"+d[0]+o),a.scrollbar||d.html.css("overflow","hidden").attr("layer-full",o)}).auto(o),m("#layui-layer-shade"+n.index).css({"background-color":a.shade[1]||"#000",opacity:a.shade[0]||a.shade}),2==a.type&&6==g.ie&&n.layero.find("iframe").attr("src",l[0]),4==a.type?n.tips():n.offset(),a.fixed&&f.on("resize",function(){n.offset(),(/^\d+%$/.test(a.area[0])||/^\d+%$/.test(a.area[1]))&&n.auto(o),4==a.type&&n.tips()}),a.time<=0||setTimeout(function(){g.close(n.index)},a.time),n.move().callback(),d.anim[a.anim]&&(e="layer-anim "+d.anim[a.anim],n.layero.addClass(e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){m(this).removeClass(e)})),a.isOutAnim&&n.layero.data("isOutAnim",!0)}},t.pt.auto=function(e){function t(e){(e=n.find(e)).height(a[1]-o-s-2*(0|parseFloat(e.css("padding-top"))))}var i=this.config,n=m("#"+d[0]+e),a=(""===i.area[0]&&0<i.maxWidth&&(g.ie&&g.ie<8&&i.btn&&n.width(n.innerWidth()),n.outerWidth()>i.maxWidth&&n.width(i.maxWidth)),[n.innerWidth(),n.innerHeight()]),o=n.find(d[1]).outerHeight()||0,s=n.find("."+d[6]).outerHeight()||0;return 2===i.type?t("iframe"):""===i.area[1]?0<i.maxHeight&&n.outerHeight()>i.maxHeight?(a[1]=i.maxHeight,t("."+d[5])):i.fixed&&a[1]>=f.height()&&(a[1]=f.height(),t("."+d[5])):t("."+d[5]),this},t.pt.offset=function(){var e=this,t=e.config,i=e.layero,n=[i.outerWidth(),i.outerHeight()],a="object"==typeof t.offset;e.offsetTop=(f.height()-n[1])/2,e.offsetLeft=(f.width()-n[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=f.width()-n[0]:"b"===t.offset?e.offsetTop=f.height()-n[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=f.height()-n[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=f.width()-n[0]):"rb"===t.offset?(e.offsetTop=f.height()-n[1],e.offsetLeft=f.width()-n[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?f.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?f.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=f.scrollTop(),e.offsetLeft+=f.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=f.height()-(i.find(d[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},t.pt.tips=function(){var e=this.config,t=this.layero,i=[t.outerWidth(),t.outerHeight()],n=m(e.follow),a={width:(n=n[0]?n:m("body")).outerWidth(),height:n.outerHeight(),top:n.offset().top,left:n.offset().left},o=t.find(".layui-layer-TipsG"),n=e.tips[0];e.tips[1]||o.remove(),a.autoLeft=function(){0<a.left+i[0]-f.width()?(a.tipLeft=a.left+a.width-i[0],o.css({right:12,left:"auto"})):a.tipLeft=a.left},a.where=[function(){a.autoLeft(),a.tipTop=a.top-i[1]-10,o.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",e.tips[1])},function(){a.tipLeft=a.left+a.width+10,a.tipTop=a.top,o.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",e.tips[1])},function(){a.autoLeft(),a.tipTop=a.top+a.height+10,o.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",e.tips[1])},function(){a.tipLeft=a.left-i[0]-10,a.tipTop=a.top,o.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",e.tips[1])}],a.where[n-1](),1===n?a.top-(f.scrollTop()+i[1]+16)<0&&a.where[2]():2===n?0<f.width()-(a.left+a.width+i[0]+16)||a.where[3]():3===n?0<a.top-f.scrollTop()+a.height+i[1]+16-f.height()&&a.where[0]():4===n&&0<i[0]+16-a.left&&a.where[1](),t.find("."+d[5]).css({"background-color":e.tips[1],"padding-right":e.closeBtn?"30px":""}),t.css({left:a.tipLeft-(e.fixed?f.scrollLeft():0),top:a.tipTop-(e.fixed?f.scrollTop():0)})},t.pt.move=function(){var o=this,s=o.config,e=m(document),r=o.layero,t=r.find(s.move),i=r.find(".layui-layer-resize"),l={};return s.move&&t.css("cursor","move"),t.on("mousedown",function(e){e.preventDefault(),s.move&&(l.moveStart=!0,l.offset=[e.clientX-parseFloat(r.css("left")),e.clientY-parseFloat(r.css("top"))],c.moveElem.css("cursor","move").show())}),i.on("mousedown",function(e){e.preventDefault(),l.resizeStart=!0,l.offset=[e.clientX,e.clientY],l.area=[r.outerWidth(),r.outerHeight()],c.moveElem.css("cursor","se-resize").show()}),e.on("mousemove",function(e){var t,i,n,a;l.moveStart&&(n=e.clientX-l.offset[0],a=e.clientY-l.offset[1],t="fixed"===r.css("position"),e.preventDefault(),l.stX=t?0:f.scrollLeft(),l.stY=t?0:f.scrollTop(),s.moveOut||(t=f.width()-r.outerWidth()+l.stX,i=f.height()-r.outerHeight()+l.stY,t<(n=n<l.stX?l.stX:n)&&(n=t),i<(a=a<l.stY?l.stY:a)&&(a=i)),r.css({left:n,top:a})),s.resize&&l.resizeStart&&(n=e.clientX-l.offset[0],a=e.clientY-l.offset[1],e.preventDefault(),g.style(o.index,{width:l.area[0]+n,height:l.area[1]+a}),l.isResize=!0,s.resizing&&s.resizing(r))}).on("mouseup",function(e){l.moveStart&&(delete l.moveStart,c.moveElem.hide(),s.moveEnd&&s.moveEnd(r)),l.resizeStart&&(delete l.resizeStart,c.moveElem.hide())}),o},t.pt.callback=function(){var t=this,i=t.layero,n=t.config;t.openLayer(),n.success&&(2==n.type?i.find("iframe").on("load",function(){n.success(i,t.index)}):n.success(i,t.index)),6==g.ie&&t.IE6(i),i.find("."+d[6]).children("a").on("click",function(){var e=m(this).index();0===e?n.yes?n.yes(t.index,i):n.btn1?n.btn1(t.index,i):g.close(t.index):!1!==(n["btn"+(e+1)]&&n["btn"+(e+1)](t.index,i))&&g.close(t.index)}),i.find("."+d[7]).on("click",function(){!1!==(n.cancel&&n.cancel(t.index,i))&&g.close(t.index)}),n.shadeClose&&m("#layui-layer-shade"+t.index).on("click",function(){g.close(t.index)}),i.find(".layui-layer-min").on("click",function(){!1!==(n.min&&n.min(i))&&g.min(t.index,n)}),i.find(".layui-layer-max").on("click",function(){m(this).hasClass("layui-layer-maxmin")?(g.restore(t.index),n.restore&&n.restore(i)):(g.full(t.index,n),setTimeout(function(){n.full&&n.full(i)},100))}),n.end&&(c.end[t.index]=n.end)},c.reselect=function(){m.each(m("select"),function(e,t){var i=m(this);i.parents("."+d[0])[0]||1==i.attr("layer")&&m("."+d[0]).length<1&&i.removeAttr("layer").show()})},t.pt.IE6=function(e){m("select").each(function(e,t){var i=m(this);i.parents("."+d[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide()})},t.pt.openLayer=function(){g.zIndex=this.config.zIndex,g.setTop=function(e){return g.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",function(){g.zIndex++,e.css("z-index",g.zIndex+1)}),g.zIndex}},c.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},c.rescollbar=function(e){d.html.attr("layer-full")==e&&(d.html[0].style.removeProperty?d.html[0].style.removeProperty("overflow"):d.html[0].style.removeAttribute("overflow"),d.html.removeAttr("layer-full"))},(p.layer=g).getChildFrame=function(e,t){return t=t||m("."+d[4]).attr("times"),m("#"+d[0]+t).find("iframe").contents().find(e)},g.getFrameIndex=function(e){return m("#"+e).parents("."+d[4]).attr("times")},g.iframeAuto=function(e){var t,i,n;e&&(t=g.getChildFrame("html",e).outerHeight(),i=(e=m("#"+d[0]+e)).find(d[1]).outerHeight()||0,n=e.find("."+d[6]).outerHeight()||0,e.css({height:t+i+n}),e.find("iframe").css({height:t}))},g.iframeSrc=function(e,t){m("#"+d[0]+e).find("iframe").attr("src",t)},g.style=function(e,t,i){var e=m("#"+d[0]+e),n=e.find(".layui-layer-content"),a=e.attr("type"),o=e.find(d[1]).outerHeight()||0,s=e.find("."+d[6]).outerHeight()||0;e.attr("minLeft"),a!==c.type[3]&&a!==c.type[4]&&(i||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-o-s<=64&&(t.height=64+o+s)),e.css(t),s=e.find("."+d[6]).outerHeight(),a===c.type[2]?e.find("iframe").css({height:parseFloat(t.height)-o-s}):n.css({height:parseFloat(t.height)-o-s-parseFloat(n.css("padding-top"))-parseFloat(n.css("padding-bottom"))}))},g.min=function(e,t){var i=m("#"+d[0]+e),n=i.find(d[1]).outerHeight()||0,a=i.attr("minLeft")||181*c.minIndex+"px",o=i.css("position");c.record(i),c.minLeft[0]&&(a=c.minLeft[0],c.minLeft.shift()),i.attr("position",o),g.style(e,{width:180,height:n,left:a,top:f.height()-n,position:"fixed",overflow:"hidden"},!0),i.find(".layui-layer-min").hide(),"page"===i.attr("type")&&i.find(d[4]).hide(),c.rescollbar(e),i.attr("minLeft")||c.minIndex++,i.attr("minLeft",a)},g.restore=function(e){var t=m("#"+d[0]+e),i=t.attr("area").split(",");t.attr("type"),g.style(e,{width:parseFloat(i[0]),height:parseFloat(i[1]),top:parseFloat(i[2]),left:parseFloat(i[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(d[4]).show(),c.rescollbar(e)},g.full=function(t){var i=m("#"+d[0]+t);c.record(i),d.html.attr("layer-full")||d.html.css("overflow","hidden").attr("layer-full",t),clearTimeout(void 0),setTimeout(function(){var e="fixed"===i.css("position");g.style(t,{top:e?0:f.scrollTop(),left:e?0:f.scrollLeft(),width:f.width(),height:f.height()},!0),i.find(".layui-layer-min").hide()},100)},g.title=function(e,t){m("#"+d[0]+(t||g.index)).find(d[1]).html(e)},g.close=function(n){var a,e,o=m("#"+d[0]+n),s=o.attr("type");o[0]&&(a="layui-layer-wrap",e=function(){if(s===c.type[1]&&"object"===o.attr("conType")){o.children(":not(."+d[5]+")").remove();for(var e=o.find("."+a),t=0;t<2;t++)e.unwrap();e.css("display",e.data("display")).removeClass(a)}else{if(s===c.type[2])try{var i=m("#"+d[4]+n)[0];i.contentWindow.document.write(""),i.contentWindow.close(),o.find("."+d[5])[0].removeChild(i)}catch(e){}o[0].innerHTML="",o.remove()}"function"==typeof c.end[n]&&c.end[n](),delete c.end[n]},o.data("isOutAnim")&&o.addClass("layer-anim layer-anim-close"),m("#layui-layer-moves, #layui-layer-shade"+n).remove(),6==g.ie&&c.reselect(),c.rescollbar(n),o.attr("minLeft")&&(c.minIndex--,c.minLeft.push(o.attr("minLeft"))),g.ie&&g.ie<10||!o.data("isOutAnim")?e():setTimeout(function(){e()},200))},g.closeAll=function(i){m.each(m("."+d[0]),function(){var e=m(this),t=i?e.attr("type")===i:1;t&&g.close(e.attr("times"))})},g.cache||{});g.prompt=function(i,n){var e="";"function"==typeof(i=i||{})&&(n=i),i.area&&(e='style="width: '+(t=i.area)[0]+"; height: "+t[1]+';"',delete i.area);var a,t=2==i.formType?'<textarea class="layui-layer-input"'+e+">"+(i.value||"")+"</textarea>":'<input type="'+(1==i.formType?"password":"text")+'" class="layui-layer-input" value="'+(i.value||"")+'">',o=i.success;return delete i.success,g.open(m.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:t,skin:"layui-layer-prompt"+h("prompt"),maxWidth:f.width(),success:function(e){(a=e.find(".layui-layer-input")).focus(),"function"==typeof o&&o(e)},resize:!1,yes:function(e){var t=a.val();""===t?a.focus():t.length>(i.maxlength||500)?g.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(i.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",a,{tips:1}):n&&n(t,e,a)}},i))},g.tab=function(n){var a=(n=n||{}).tab||{},o="layui-this",s=n.success;return delete n.success,g.open(m.extend({type:1,skin:"layui-layer-tab"+h("tab"),resize:!1,title:function(){var e=a.length,t=1,i="";if(0<e)for(i='<span class="'+o+'">'+a[0].title+"</span>";t<e;t++)i+="<span>"+a[t].title+"</span>";return i}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=a.length,t=1,i="";if(0<e)for(i='<li class="layui-layer-tabli '+o+'">'+(a[0].content||"no content")+"</li>";t<e;t++)i+='<li class="layui-layer-tabli">'+(a[t].content||"no  content")+"</li>";return i}()+"</ul>",success:function(e){var t=e.find(".layui-layer-title").children(),i=e.find(".layui-layer-tabmain").children();t.on("mousedown",function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;var e=m(this),t=e.index();e.addClass(o).siblings().removeClass(o),i.eq(t).show().siblings().hide(),"function"==typeof n.change&&n.change(t)}),"function"==typeof s&&s(e)}},n))},g.photos=function(i,e,n){var t,a,o,s={};if((i=i||{}).photos){var r=i.photos.constructor===Object,l=r?i.photos:{},f=l.data||[],c=l.start||0,d=(s.imgIndex=1+(0|c),i.img=i.img||"img",i.success);if(delete i.success,r){if(0===f.length)return g.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var u=m(i.photos),y=function(){f=[],u.find(i.img).each(function(e){var t=m(this);t.attr("layer-index",e),f.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(y(),0===f.length)return;if(e||u.on("click",i.img,function(){var e=m(this).attr("layer-index");g.photos(m.extend(i,{photos:{start:e,data:f,tab:i.tab},full:i.full}),!0),y()}),!e)return}s.imgprev=function(e){s.imgIndex--,s.imgIndex<1&&(s.imgIndex=f.length),s.tabimg(e)},s.imgnext=function(e,t){s.imgIndex++,s.imgIndex>f.length&&(s.imgIndex=1,t)||s.tabimg(e)},s.keyup=function(e){var t;s.end||(t=e.keyCode,e.preventDefault(),37===t?s.imgprev(!0):39===t?s.imgnext(!0):27===t&&g.close(s.index))},s.tabimg=function(e){if(!(f.length<=1))return l.start=s.imgIndex-1,g.close(s.index),g.photos(i,!0,e)},s.event=function(){s.bigimg.hover(function(){s.imgsee.show()},function(){s.imgsee.hide()}),s.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),s.imgprev()}),s.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),s.imgnext()}),m(document).on("keyup",s.keyup)},s.loadi=g.load(1,{shade:!("shade"in i)&&.9,scrollbar:!1}),r=f[c].src,t=function(e){var t;g.close(s.loadi),s.index=g.open(m.extend({type:1,id:"layui-layer-photos",area:(e=[e.width,e.height],t=[m(p).width()-100,m(p).height()-100],!i.full&&(e[0]>t[0]||e[1]>t[1])&&((t=[e[0]/t[0],e[1]/t[1]])[1]<t[0]?(e[0]=e[0]/t[0],e[1]=e[1]/t[0]):t[0]<t[1]&&(e[0]=e[0]/t[1],e[1]=e[1]/t[1])),[e[0]+"px",e[1]+"px"]),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+h("photos"),content:'<div class="layui-layer-phimg"><img src="'+f[c].src+'" alt="'+(f[c].alt||"")+'" layer-pid="'+f[c].pid+'"><div class="layui-layer-imgsee">'+(1<f.length?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(n?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(f[c].alt||"")+"</a><em>"+s.imgIndex+"/"+f.length+"</em></span></div></div></div>",success:function(e,t){s.bigimg=e.find(".layui-layer-phimg"),s.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),s.event(e),i.tab&&i.tab(f[c],e),"function"==typeof d&&d(e)},end:function(){s.end=!0,m(document).off("keyup",s.keyup)}},i))},a=function(){g.close(s.loadi),g.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){1<f.length&&s.imgnext(!0,!0)}})},(o=new Image).src=r,o.complete?t(o):(o.onload=function(){o.onload=null,t(o)},o.onerror=function(e){o.onerror=null,a(e)})}},c.run=function(e){f=(m=e)(p),d.html=m("html"),g.open=function(e){return new t(e).index}},p.layui&&layui.define?(g.ready(),layui.define("jquery",function(e){g.path=layui.cache.dir,c.run(layui.$),e("layer",p.layer=g)})):"function"==typeof define&&define.amd?define(["jquery"],function(){return c.run(p.jQuery),g}):(c.run(p.jQuery),g.ready())}(window);