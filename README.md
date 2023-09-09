## private-kitchen  [![github](https://img.shields.io/badge/sakana的手写-private--private-blue)](https://github.com/sakanaovo/private-kitchen)

sakana的手写学习记录,以 `TDD` 思想来实现一些常用库和工具函数,该仓库用 `monorepo` 管理


## 关于我

你可以通过我的 `github` 主页了解我,我的更文在我的博客和掘金,记录了我的一些心得

**github主页戳这里:** [sakana的主页](https://github.com/sakanaovo)


## 为什么要创建这个仓库？

+ 想要系统学习 `typescript` ,当我在使用 `typescript` 进行编程的时候,总是感到自己对于某些类型写的不够灵活,所以借助这个仓库的机会进行学习和实现一些类型体操

+ 学习 `TDD` 思想,在我的工作中,我总是只是应付进度,我想通过这种思想,让我写代码的时候,能够多思考一些

+ 当我想要学习什么我就记录下来,我不想让自己只看不写

## 怎样利用该仓库学习？

+ 克隆这个仓库,进行自己想要做的事情然后进行学习,你可以删除我的,然后保留自己的

  + 上手教程-安装对应依赖

    ```js
    pnpm i 
    ```

  + 当你想要创建不一样的测试目录结构 你需要在 `vitest.config.ts` 中 testIncludes 配置自己的

    ```js
    // 假设你想创建 packages/operate/test/operate.spec.ts
    const testIncludes = [
      {
        dir: '"./packages/**/{__test__,test}/**/*.{ts,js}"',
        dir: '"./packages/operate/test/operate.spec.ts"'
      },
    ];
    ```

  + 在 `packages` 下的文件夹应该都有对应的 `package.json` 这样你才可以在 `examples/web` 中进行安装

    ```js
    pnpm i @sakana/mitt
    ```

    

+ 分析以下目录结构,该仓库的目录结构并不复杂,学习之后创建一个自己的即可

+ 在我的掘金中有一篇文章 [实现百行不到的 mitt 我学到了这些技术](https://juejin.cn/post/7270321740266766372) 记录我如何写下这个仓库的，几乎都讲到了，包含上面路径的含义


## 目前的任务

### mitt 

 - [x] 实现mitt

### lodash

- [ ] array 实现中...
- [ ] collection


### 相关文章
- [x] 记录mitt实现 在掘金 [实现百行不到的 mitt 我学到了这些技术](https://juejin.cn/post/7270321740266766372)
- [ ] 记录lodash实现 这里后续会在掘金开一个专栏记录手写函数的过程和思想


## 说在最后的话
建议大家想要学习克隆下来,如果中途有什么疑问或者好的建议欢迎和我交流,我的微信号在github主页,如果对你有帮助可以帮我给一个 `star` ,会一直持续更新下去

