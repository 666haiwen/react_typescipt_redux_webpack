# init-react-redux-webpack-django
# 1. 前端

1. 安装 node.js
    node.js version > v10.0

2. (For Windows User) 设置环境变量，请确认环境变量中的 `PATH` 中有以下两行

    C:\Program Files\nodejs\  // 你 node 的安装路径
    C:\Users\{用户名}\AppData\Roaming\npm  // 一些全局安装的命令行模块的执行文件放在此处

3. 安装 `cnpm` ，打开 cmd 并输入：（如果失败，请以管理员权限打开cmd）

    npm install -g cnpm --registry=https://registry.npm.taobao.org

    或者安装`yarn`，打开cmd并输入：npm install yarn

    设置淘宝镜像：

    yarn config set registry https://registry.npm.taobao.org/

4. 在 `site\frontend` 中打开 cmd，并输入以下命令：

   cnpm install  // 安装第三方库

   或者使用`yarn`,并输入以下指令:

   yarn install

5. 运行

   - 开发环境：npm start  // 运行前端,默认地址为:localhost:8080
   - 生产环境：npm run dev //生成build文件迁移到服务器即可



# 2. 后端

runserver manage.py runserver 0.0.0.0:8000
