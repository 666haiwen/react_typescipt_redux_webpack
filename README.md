# init-react-redux-webpack-django
# 1. 前端

## 1.1 安装

1. 安装 node.js

2. (For Windows User) 设置环境变量，请确认环境变量中的 `PATH` 中有以下两行

    C:\Program Files\nodejs\  // 你 node 的安装路径
    C:\Users\{用户名}\AppData\Roaming\npm  // 一些全局安装的命令行模块的执行文件放在此处

3. 安装 `cnpm` ，打开 cmd 并输入：（如果失败，请以管理员权限打开cmd）

    npm install -g cnpm --registry=https://registry.npm.taobao.org

4. 在 `site\frontend` 中打开 cmd，并输入以下命令：

    cnpm install  // 安装第三方库
    npm start  // 运行前端,默认地址为:localhost:8060

# 2. 后端

runserver manage.py runserver 0.0.0.0:8000
