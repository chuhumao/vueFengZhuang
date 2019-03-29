import Vue from 'vue'

Vue.directive('tsOne',{
  bind(el, binding, vnode, oldVnode){
    var dialogHeaderEl = el.querySelector('.el-dialog__header');
    var diLong = el.querySelector('.el-dialog');
    dialogHeaderEl.style.cursor = 'pointer';
    var sty = diLong.currentStyle || window.getComputedStyle(diLong,null);
    dialogHeaderEl.onmousedown = function(e){
      // 鼠标按下，计算当前元素距离可视区的距离
      var disX = e.clientX -  dialogHeaderEl.offsetLeft;
      var disY = e.clientY -  dialogHeaderEl.offsetTop;
      // 获取到的值带px 正则匹配替换
      let styL, styT;

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
      } else {
        styL = +sty.left.replace(/\px/g, '');
        styT = +sty.top.replace(/\px/g, '');
      };
      document.onmousemove = function(e){
        // 通过事件委托，计算移动的距离
         var l = e.clientX - disX;
         var T = e.clientY - disY;
        diLong.style.left = `${l + styL}px`;
        diLong.style.top = `${T + styT}px`;
      }
      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
      }

    }
  }
});
