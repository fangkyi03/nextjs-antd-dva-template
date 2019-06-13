最优的nextjs解决方案

本例总共3个demo

demo1 
演示修改以后的createDva 如何做到数据隔离

demo2
演示路由跳转

demo3
演示网络请求

1.解决 antd 与 cssModules 不兼容的问题

2.解决 antd 与 nextjs export 不兼容问题

3.自带getRouterParams 路由参数获取功能 避免自己手动获取路由参数

4.增加createDva具备按需加载 用完即清空对应model的功能 彻底的模块化隔离 功能相同 但是想分开用不同的model隔离数据的时候 非常有作用 比如表单数据

5.server.js与next.config启动的时候 会自动识别pages目录下的文件 不需要手动添加目录 跟umi差不多

6.弱化model文件 全局只需要使用一个fetchModel 即可完成所有的网络请求 详情见测试2

7.弱化model使用 改为只有getValue 跟 setValue 两个api 一切都基于这两个基础函数

8.开箱即用 不需要做任何多余的修改

9.增加loading功能 loading的isShow属性会跟网络请求绑定在一起 网络请求结束以后 自动会修改isShow状态来控制loading是否继续显示
