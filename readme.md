# 小米官方商城首页
### 高保真还原所有布局、样式、交互效果
### 技术栈：html + css3 + js(es6) + jquery
###  注意事项：
```
暂无
```
### 
```
页面数据只有头部导航栏区域的数据是从data.js中动态获取的，后面发现手动去扒页面数据实在太费时间，
除了后面部分涉及到有更换图片的交互效果的地方，都直接把数据写在了html中了
最初想着模块化来开发，但是页面规模不打，所以可复用的功能不多，所以直接一个js写到底了，css分模块开发
为了提高效率，复杂dom元素遍历有涉及到jquery，头部导航栏的的购物车鼠标悬浮时，在弹出框文字出来之前
弹出框应该有个加载动画，尚未实现 
```