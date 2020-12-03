// 界面跳转管理
$(function () {
  $('.container-left li').click(function () {
    // 获取当前点击菜单的标题内容
    var text = $(this).text().trim();
	  
    // 设定样式变化之前 重置所有的样式
    $('.container-left li').css({
//      backgroundColor: 'rgb(49, 66, 85)',
      color: '#fff',
	  border:'6px'
    });
	  
    // 选中时标签变化
    $(this).css({
//      backgroundColor: 'white',
      color: '#fff',
	  borderBottom:'3px solid #fff'
    });
    // 设置header-title动态变化
    $('.header-title').text(text);
    // 通过标题内容 加载相应的界面
    if (text === 'home') {
      $('.content-main').load('./pages/home1.html');
    } else if (text === 'category') {
      $('.content-main').load('./pages/category1.html');
    } else if (text === 'article') {
      $('.content-main').load('./pages/article1.html');
    } else if (text === 'user') {
      $('.content-main').load('./pages/user1.html');
    }else{
      return;
    }
  });

  // 首次加载默认选中第一页
  $('.container-left li:first').click();
});