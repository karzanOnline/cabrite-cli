# cabrite-cli

### cabrite
cabrite是解决前端开发，本地启后端服务的一套web工程化解决方案。(当然目前最好的解决方案是前后端分离，但是大部分创业公司没有足够的资源来维护Node中间层)。将webpack配置全部暴露出来，可以更方便开发者修改。
### 原理
...后续画个出来，这里先占个坑

// TODO
使用Node **env.js**对将要发布的地址进行动态替换
再修改hosts把当前的环境映射到127.0.0.1就可以开发了
### 使用
* git直接拉取


    https://github.com/karzanOnline/cabrite-cli.git

* npm


    npm install cabrite-cli

### 开发
    npm run dev
### 提测
    npm run beta/openbeta
### 上线
    npm run product