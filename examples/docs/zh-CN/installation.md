## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

具体步骤：

1.https://github.com/chuckDch/Seedland-ui，fork上面的seedland-ui。

2.修改自己的packeg.json文件，在dependencies中新增seedland-ui这一项，指向自己的github地址（这里一定注意需指定分支或者tag号，默认是dev）。

```shell
"dependencies": {
    "seedland-ui": "git+https://github.com/chuckDch/Seedland-ui.git #dev"
  },
  
npm install
```

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/zh-CN/component/quickstart)。
