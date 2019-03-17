## 用户表
- 用户ID id
- 身份 identity (游客：tourist，读者：reader，作者：editor，管理员：admin)
- 用户名 name
- 账号 account
- 密码 password
- vip点 vp（Vip Point简写，统一用vp表示）
- 禁言状态 ban （1为禁言，0为正常）
- 喜好 like （一个数组，一个用户最多有3个喜好，喜好分类看需求分析）

## 用户收藏表
- 收藏夹id id
- 用户id uid
- 收藏小说id novelId（以数组存放）

## 小说表
- 小说ID id
- 小说名字 novelName
- 作者名 editorName
- 作者id editorId
- 简介 introduction
- 小说点击数 clickNum
- 小说评论数 commentNum
- 小说下载数 downloadNum
- 小说分类  sort
- 小说售价 price
- 封面链接 cover
- 发布时间：time 【new】

## 小说章节表
- 章节ID id
- 对应小说id novelId
- 章节 chapter (代表第几章，存放数字，如 `1` 代表 `第一章`)
- 章节标题 title
- 章节内容 content

## 小说草稿箱表
- 草稿章节ID id
- 对应小说id novelId
- 章节 chapter
- 章节标题 title
- 章节内容 content

## 评论表
- 评论Id id
- 评论小说id novelId
- 评论用户id uid
- 评论用户名 name
- 评论内容 content
- 评论时间 time （13位时间戳）
- 举报 Report

## ~~购买记录表~~
- 购买记录id：id
- 购买者id：uid
- 小说id：novelId

## 反馈表
- 反馈id id
- 反馈信息 content
- 邮箱 email