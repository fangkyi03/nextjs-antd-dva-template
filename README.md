最完美的nextjs解决方案

1.解决 antd 与 cssModules 不兼容的问题

2.解决 antd 与 export 不兼容问题

3.自带getRouterParams 路由参数获取功能 避免自己手动获取路由参数

4.增加createDva具备按需加载 用完即清空对应model的功能 彻底的模块化隔离 功能相同 但是想分开用不同的model隔离数据的时候 非常有作用 比如表单数据

5.server.js与next.config启动的时候 会自动识别pages目录下的文件 不需要手动添加目录 跟umi差不多

6.弱化model文件 全局只需要使用一个fetchModel 即可完成所有的网络请求 详情见测试2

7.弱化model使用 改为只有getValue 跟 setValue 两个api 一切都基于这两个基础函数

8.开箱即用 不需要做任何多余的修改
