//页面路由
window.location.href = "http://www.baidu.com";
history.back();

//hash 路由
window.location = '#hash'
window.onhashchange = function () {
    console.log('current hash', window.location.hash)
}

//h5路由
//推进
history.pushState('name', 'title', '/path');
//替换
history.replaceState('name', 'title', '/path');

history.onpopstate = function () {
    console.log(window.location.href)
    console.log(window.location.pathname)
    console.log(window.location.hash)
    console.log(window.location.search)
}