---
title: 'git日志提交？'
status: 'published'
author:
  name: '风行天下一万号'
  picture: 'https://avatars.githubusercontent.com/u/1417109?v=4'
slug: 'flycream-travel'
description: '多人开发的git项目如何保持提交日志为一条直线？'
coverImage: '/images/flycream-travel.png'
publishedAt: '2017-08-19 21:35'
---

## 多人开发的git项目如何保持提交日志为一条直线？

### 一、Git的项目的git常用操作
    a)    Git clone 项目地址  从远程仓库克隆项目到本地
    b)    Git pull 从当前分支拉取更新代码
    c)    Git commit -m “提交文件的注释” 提交代码到本地仓库
    d)    Git add . 提交代码到暂存区
    e)    Git status 查看文件的状态
    f)     Git push 推送代码到远程仓库
    g)    Git stash 把本地修改存储起来
    h)    Git stash pop 把本地修改释放出来
    i)    Git checkout 分支名称 切换工作分支
    j)    git merge 合并的分支名称
    注: git stash/git stash pop这两个命令用作本地开发的内容迁移到其他分支,效果挺不错的!

### 二、多人开发的git项目如何保持提交日志为一条直线

    a) 多人开发项目时，提交代码之前必须先拉取代码 git pull
    b) 拉取最新代码可能遇到两种情况：
        i. 拉取代码没有任何冲突 
        ii. 拉取代码发生冲突 解决冲突方法
            1.先把本地修改存储起来 git stash
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212328896-287899265.png)

            2.再拉取最新代码 git pull
            3.把本地修改释放出来 git stash pop
                a) 虽然有冲突但是没有冲突的内容
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212403928-1075674900.png)

                b) 有冲突解决冲突
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212508834-1801057628.png)

                c) 解决冲突
                    1、保留当前的改变
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212430865-287436974.png)

                    2、保留拉取的改变
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212445787-1420464355.png)

                    3、保留两者
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212458084-701207503.png)
```script
   c) 提交代码到暂存区 git add .
        i.    未保存
```
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212632990-1684742849.png)

        ii. 保存后
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212702568-1127952384.png)

    d) 提交代码到本地仓库 git commit -m ‘修改内容注释’
    e) 把代码推送到远程仓库 git push
    f) 如果每个人都按这种方法操作，最后的日志图如下：
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212756021-1787180115.png)

    g) 回退版本  git reset --hard 版本号
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212817084-1457778709.png)

### 三、推荐使用vs code软件自带的git的常用操作方法

a) 先下载/克隆远程仓库项目
```script  
git clone ssh://git@192.168.30.29:12022/Client/TradeCenter.git(远程仓库地址)
```
b)    用vs code 打开项目
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212831318-1921412856.png)

c)
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818212918787-1458880027.png)

d)    先拉取最新代码
e)    再把修改代码提交到本地仓库
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818213011271-106261248.png)

f)    再把代码推送到远程仓库（推送）
![](http://images2017.cnblogs.com/blog/984146/201708/984146-20170818213039506-73577796.png)

g)    如果代码提交提交错误了，还可以撤销上一次提交
h)    这些就是vs code的常用git命令（如果冲突的话可以参照上面的第二部分）
