- [1. 登录相关](#1-%E7%99%BB%E5%BD%95%E7%9B%B8%E5%85%B3)
    - [1.1 用户登录](#11-%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95)
    - [1.2 用户注册](#12-%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C)
    - [1.3 获取用户信息](#13-%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF)
- [2. 创作中心相关](#2-%E5%88%9B%E4%BD%9C%E4%B8%AD%E5%BF%83%E7%9B%B8%E5%85%B3)
    - [2.1 创建小说](#21-%E5%88%9B%E5%BB%BA%E5%B0%8F%E8%AF%B4)
    - [2.2 获取某用户发布的小说](#22-%E8%8E%B7%E5%8F%96%E6%9F%90%E7%94%A8%E6%88%B7%E5%8F%91%E5%B8%83%E7%9A%84%E5%B0%8F%E8%AF%B4)
    - [2.3 删除小说](#23-%E5%88%A0%E9%99%A4%E5%B0%8F%E8%AF%B4)
    - [2.4 获取某部小说包含的章节](#24-%E8%8E%B7%E5%8F%96%E6%9F%90%E9%83%A8%E5%B0%8F%E8%AF%B4%E5%8C%85%E5%90%AB%E7%9A%84%E7%AB%A0%E8%8A%82)
    - [2.5 上传小说章节](#25-%E4%B8%8A%E4%BC%A0%E5%B0%8F%E8%AF%B4%E7%AB%A0%E8%8A%82)
    - [2.6 添加章节](#26-%E6%B7%BB%E5%8A%A0%E7%AB%A0%E8%8A%82)
    - [2.7 上传章节到草稿箱](#27-%E4%B8%8A%E4%BC%A0%E7%AB%A0%E8%8A%82%E5%88%B0%E8%8D%89%E7%A8%BF%E7%AE%B1)
    - [2.7 读取某作者的草稿箱](#27-%E8%AF%BB%E5%8F%96%E6%9F%90%E4%BD%9C%E8%80%85%E7%9A%84%E8%8D%89%E7%A8%BF%E7%AE%B1)
    - [2.8 获取草稿详情](#28-%E8%8E%B7%E5%8F%96%E8%8D%89%E7%A8%BF%E8%AF%A6%E6%83%85)
    - [2.9 保存更改的草稿（复写操作）](#29-%E4%BF%9D%E5%AD%98%E6%9B%B4%E6%94%B9%E7%9A%84%E8%8D%89%E7%A8%BF%E5%A4%8D%E5%86%99%E6%93%8D%E4%BD%9C)
    - [2.10 删除草稿](#210-%E5%88%A0%E9%99%A4%E8%8D%89%E7%A8%BF)
- [3. 主页相关](#3-%E4%B8%BB%E9%A1%B5%E7%9B%B8%E5%85%B3)
    - [3.1 获取最新上架的小说](#31-%E8%8E%B7%E5%8F%96%E6%9C%80%E6%96%B0%E4%B8%8A%E6%9E%B6%E7%9A%84%E5%B0%8F%E8%AF%B4)
    - [3.2 获取排行](#32-%E8%8E%B7%E5%8F%96%E6%8E%92%E8%A1%8C)
    - [3.3 获取推荐](#33-%E8%8E%B7%E5%8F%96%E6%8E%A8%E8%8D%90)
    - [3.4 获取搜索结果](#34-%E8%8E%B7%E5%8F%96%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C)
- [4. 用户中心](#4-%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83)
    - [4.1 返回用户收藏的小说](#41-%E8%BF%94%E5%9B%9E%E7%94%A8%E6%88%B7%E6%94%B6%E8%97%8F%E7%9A%84%E5%B0%8F%E8%AF%B4)
    - [4.2 删除用户收藏的小说](#42-%E5%88%A0%E9%99%A4%E7%94%A8%E6%88%B7%E6%94%B6%E8%97%8F%E7%9A%84%E5%B0%8F%E8%AF%B4)
    - [4.3 用户充值](#43-%E7%94%A8%E6%88%B7%E5%85%85%E5%80%BC)
    - [4.4 签约为作者](#44-%E7%AD%BE%E7%BA%A6%E4%B8%BA%E4%BD%9C%E8%80%85)
    - [4.5 获取已购买的小说](#45-%E8%8E%B7%E5%8F%96%E5%B7%B2%E8%B4%AD%E4%B9%B0%E7%9A%84%E5%B0%8F%E8%AF%B4)
- [5. 小说界面相关](#5-%E5%B0%8F%E8%AF%B4%E7%95%8C%E9%9D%A2%E7%9B%B8%E5%85%B3)
    - [5.1 获取某小说的相关信息](#51-%E8%8E%B7%E5%8F%96%E6%9F%90%E5%B0%8F%E8%AF%B4%E7%9A%84%E7%9B%B8%E5%85%B3%E4%BF%A1%E6%81%AF)
    - [5.2 查询该小说的购买状态](#52-%E6%9F%A5%E8%AF%A2%E8%AF%A5%E5%B0%8F%E8%AF%B4%E7%9A%84%E8%B4%AD%E4%B9%B0%E7%8A%B6%E6%80%81)
    - [5.3 收藏小说](#53-%E6%94%B6%E8%97%8F%E5%B0%8F%E8%AF%B4)
    - [5.4 获取收藏状态](#54-%E8%8E%B7%E5%8F%96%E6%94%B6%E8%97%8F%E7%8A%B6%E6%80%81)
    - [5.5 删除收藏](#55-%E5%88%A0%E9%99%A4%E6%94%B6%E8%97%8F)
    - [5.6 购买小说](#56-%E8%B4%AD%E4%B9%B0%E5%B0%8F%E8%AF%B4)
    - [5.7 获取小说评论](#57-%E8%8E%B7%E5%8F%96%E5%B0%8F%E8%AF%B4%E8%AF%84%E8%AE%BA)
    - [5.8 发布评论](#58-%E5%8F%91%E5%B8%83%E8%AF%84%E8%AE%BA)
    - [5.9 获取小说下载](#59-%E8%8E%B7%E5%8F%96%E5%B0%8F%E8%AF%B4%E4%B8%8B%E8%BD%BD)
    - [5.10 获取小说内容](#510-%E8%8E%B7%E5%8F%96%E5%B0%8F%E8%AF%B4%E5%86%85%E5%AE%B9)
    - [5.11 问题反馈](#511-%E9%97%AE%E9%A2%98%E5%8F%8D%E9%A6%88)
- [6. 后台相关](#6-%E5%90%8E%E5%8F%B0%E7%9B%B8%E5%85%B3)
    - [6.1 查看用户](#61-%E6%9F%A5%E7%9C%8B%E7%94%A8%E6%88%B7)
    - [6.2 管理用户](#62-%E7%AE%A1%E7%90%86%E7%94%A8%E6%88%B7)
    - [6.3 删除评论](#63-%E5%88%A0%E9%99%A4%E8%AF%84%E8%AE%BA)
    - [6.4 举报评论](#64-%E4%B8%BE%E6%8A%A5%E8%AF%84%E8%AE%BA)
    - [6.5 获取被举报评论](#65-%E8%8E%B7%E5%8F%96%E8%A2%AB%E4%B8%BE%E6%8A%A5%E8%AF%84%E8%AE%BA)
    - [6.6 获取小说数据](#66-%E8%8E%B7%E5%8F%96%E5%B0%8F%E8%AF%B4%E6%95%B0%E6%8D%AE)
    - [6.7 获取反馈信息](#67-%E8%8E%B7%E5%8F%96%E5%8F%8D%E9%A6%88%E4%BF%A1%E6%81%AF)

# 1. 登录相关
### 1.1 用户登录
url: /login

类型：post

发送：
```js
// 普通用户登录
{
    account: "111",
    password: "123"
}
```

返回：
```js
// 登录成功
{
    code: 1,
    data: {
        token: "asdas.asdadwe23.sdasdas"
    }
}

// 登录失败
{
    code: 0,
    msg: "密码错误或帐号不存在"
}
```


### 1.2 用户注册
url: /register

类型：post

发送：
```js
{
    account: "123",
    password: "123",
+   name: "张三",
+   like: ["玄幻","奇幻","武侠"]
    editor: "0" // 是否签约为作者，是为1，否为0。如果不签约，该用户身份为普通用户，如果签约，该用户身份为作者
}
```

返回：
```js
// 注册成功
{
    code: "1"
}

// 注册失败
{
    code: "0",
    msg: "注册失败，账号已存在"
}
```

### 1.3 获取用户信息
url：/userInfo (验证Token)

类型：get

返回：
```js
// 如果有token，则返回
{
    code: 1,
    data:{
        uid: "1",
        account: "123",
        name: "EsunR",
        identity: "reader",
        vp: "1000",
        ban: "0"
+       like: ["玄幻","奇幻","武侠"]
    }
}

// 如果没有token，则返回
{
    coed: 2
}
```


# 2. 创作中心相关

### 2.1 创建小说

[![ACQ0FH.md.png](https://s2.ax1x.com/2019/03/11/ACQ0FH.md.png)](https://imgchr.com/i/ACQ0FH)

url: /publishNovel （验证Token）

类型：post

发送：
```js
{
    novelName: "",
    introduction: "",
    cover: "", // 发送封面url
    sort: "",
    price: "",
    time: "1111111111111" // 13位时间戳
}
```

返回：
```js
{
   code: 1 
}
```

### 2.2 获取某用户发布的小说

[![ACQcOf.md.png](https://s2.ax1x.com/2019/03/11/ACQcOf.md.png)](https://imgchr.com/i/ACQcOf)

url：/getPublishedNovel（验证Token）

类型：get

返回：
```
{
    code: 1,
    data: [
        {
            id: "1",
            cover: "asdasdasdas.com/sdad/asdasd",
            novelName: "李先生传记",
            introduction: "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        }
    ]
}
```


### 2.3 删除小说
url: /deleteNovel（验证Token）

类型：get

发送：
```
/deleteNovel?id=1

id: 小说id
```

返回：
```js
{
    code:1
}
```

### 2.4 获取某部小说包含的章节

[![ACQ2m8.md.png](https://s2.ax1x.com/2019/03/11/ACQ2m8.md.png)](https://imgchr.com/i/ACQ2m8)

url：/getNovelChapter (不验证Token)

类型：get

发送：
```
/getNovelChapter?id=1

id: 小说id
```

返回：
```js
{
    code: 1,
    data:[
        {
            id: "111", // 章节id
            chapter: "1",
            title: "霸道李延富爱上我"
        },
        {
            id: "112", // 章节id
            chapter: "2",
            title: "霸道李延富娶了我"
        },
        {
            id: "113", // 章节id
            chapter: "3",
            title: "霸道李延富打了我"
        },
    ]
}
```
### 2.5 上传小说章节

[![ACQWTg.md.png](https://s2.ax1x.com/2019/03/11/ACQWTg.md.png)](https://imgchr.com/i/ACQWTg)

==PS：==

当用户以文件方式上传小说时，先调用该接口，用form-data形式发送小说文件，在服务器端接收了该txt文件后，转化成字符串，在novel表中生成一条数据，将生成的字符串加入到content字段中（注意在生成的字符串两端加上一个p标签），将form-data传过去的novelId填入该条数据的novelId字段中，其他字段留空，然后向前端返回该条数据的id。

之后前端才会调用/addChapter接口，将刚才返回的id放到id字段中发送出去。后台拿到该数据后，由id找到刚才生成的那条数据，将其他字段的数据填入。

url：/uploadChapter （验证Token）

类型: post

form-data中的数据：
```js
{
   id: 2
   file: (binary)
}
```
[![AChC0x.png](https://s2.ax1x.com/2019/03/11/AChC0x.png)](https://imgchr.com/i/AChC0x)

返回：
```js
{
    code: "1"
    data: {
        id: "12" // 生成的章节id
    }
}
```

### 2.6 添加章节


url：/addChapter （验证Token）

类型：post

发送：
```js
// 当用户普通添加时
{
+   chapter: "4",
    title: "章节标题",
    content: "章节内容",
    upload: 0,
    novelId: "1"
}

// 当用户上传方式添加章节时 （注意当用户以文件上传形式发送数据时，没有content字段，取而代之的是一个id字段）
{
+   chapter: "4"
    title: "章节标题",
    upload: "1",
    novelId: "1",
    id: "12"
}
```

### 2.7 上传章节到草稿箱

url：/addChapterToDraft

发送：
```js
{
    title: "章节标题",
    content: "章节内容",
    novelId: "1",
+   chapter: "1"
}
```

返回:
```js
{
    code: 1
}
```

### 2.7 读取某作者的草稿箱

![AC63Q0.png](https://s2.ax1x.com/2019/03/11/AC63Q0.png)

url：/getDraftBox （验证Token，从Token中获取用户ID）

类型：get

返回：
```js
{
    code: "1",
    data: [
        {
            novelName: "李先生传记",
            id: "1", // 草稿id
            chapter: "1",
            title: "暴躁李延富在线打人"
        }
    ]
}
```

### 2.8 获取草稿详情

![AC6cwD.png](https://s2.ax1x.com/2019/03/11/AC6cwD.png)

url：/getDraft (验证Token)

类型：get

发送：
```
/getDraft?id=1

id: 草稿id
```

返回：
```js
{
    code: 1,
    data: {
        title: "暴躁李延富在线打人",
        content: "<p>从前有个叫李延富的老哥</p><p>脾气暴躁天天打人</p>",
        chapter: "2",
        novelId: "1" // 对应小说的id
    }
}
```

### 2.9 保存更改的草稿（复写操作）

url：/saveChapterToDraft（验证Token）

类型：post

发送：
```js
{
    title: "章节标题",
    content: "章节内容",
    id: "1" // 草稿id
}
```

返回：
```js
{
    code:"1"
}
```

### 2.10 删除草稿

url：/deleteDraft（验证Token）

类型：get

发送：
```
/deleteDraft?id=1

id：删除的草稿的id
```

返回：
```js
{
    code:1
}
```





# 3. 主页相关
### 3.1 获取最新上架的小说

![ACqBUs.png](https://s2.ax1x.com/2019/03/11/ACqBUs.png)

url：/getNewPublish（不验证Token）

类型：get

发送：
```
/getNewPublish?page=1

page: 页数
```

返回：
```js
{
    code: 1,
    // data返回的数据为按时间排序，返回最新的9条数据
    data: {
        total: 100,
        novelList:[
            {
              id: "1",
              cover: "",
              novelName: "李先生传记",
              introduction:
                "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
            }
            ... ...
        ]
    }
}
```

### 3.2 获取排行

url: /getRanking （不验证Token）

类型：get

发送：
```
/getRanking?sort=downloadNum
返回下载排行

/getRanking?sort=clickNum
返回点击量排行

/getRanking?sort=commentNum
返回评论排行
```

返回：
```js
{
    code: 1,
    // data返回的数据为按时间排序，返回最新的9条数据
    data: [
        // 按相应的排行要求，在数组中按要求字段的数值，从大到小排序返回数据，只返回9条数据即可
        {
          id: "1",
          cover: "",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        ... ...
    ]
}
```

### 3.3 获取推荐
url：/getRecommend （验证Token）

说明：按照用户的三个喜好，每个喜好各【随机】取出3个推荐小说，一共返回9条数据。

返回：
```js
{
    code: 1,
    // 返回9条数据
    data: [
        {
          id: "1",
          cover: "",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        ... ...
    ]
}
```

### 3.4 获取搜索结果

url: /getSearch （不验证Token）

类型：get

发送：
```
/getSearch?searchWay=book_name&key=关键词

searchWay: 搜索方式 'book_name'是按书名搜索，'editor_name'是按作者名搜索
key: 搜索关键字
```

返回：
```js
{
    code: 1,
    // 不分页，直接返回所有结果
    data: [
        {
          id: "1",
          cover: "",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        ... ...
    ]
}
```





<br>
# 4. 用户中心

### 4.1 返回用户收藏的小说

url：/getCollection（验证Token）

类型：get

返回：
```js
{
    code: 1,
    data: [
        {
          id: "1", //该条收藏的id
          novelId: "2", //收藏小说的id
          cover: "",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        ... ...
    ]
}
```

### 4.2 删除用户收藏的小说

url：/deleteCollection（验证Token）

类型：get

发送：
```
/deleteCollection?id=2

id：该条收藏对应小说的id
```

返回：
```js
{
    code: "1"
}
```

### 4.3 用户充值

url：/recharge

类型：get

发送：
```
/recharge?vp=1000

vp: 用户充值的vip点
```

返回：
```js
{
    code: "1"
}
```

### 4.4 签约为作者

说明：将用户身份改为作者editor

url: /signing

类型：get

返回：
```js
{
    code: 1
}
```

### 4.5 获取已购买的小说

url: /getBought

类型：get

返回：
```js
{
    code: 1,
    data: [
        {
          id: "1", 
          novelId: "2",
          cover: "",
          novelName: "李先生传记",
          introduction:
            "这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说这是一本小说"
        },
        ... ...
    ]
}
```





# 5. 小说界面相关

### 5.1 获取某小说的相关信息

url：/getNovelInfo （不验证Token）

类型：get

发送：
```
/getNovelInfo?id=1

id:小说id
```

返回：
```js
{
    code: 1,
    data: {
        novelName: "",
        editorName: "",
        editorId: "",
        introduction: "",
        clicknum: "",
        commentnum: "",
        downloadnum: "",
        sort: "",
        price: "",
        cover: "",
        time: "" // time为13位时间戳
    }
}
```

### 5.2 查询该小说的购买状态

url: /getStatus (验证Token)

类型：get

发送：
```
/getStatus?novelId=1

novelId：小说id
```

返回：
```js
{
    code: 1,
    data: {
        status: 1 //已购买为1，未购买为0
    }
}
```

### 5.3 收藏小说
url: /collection

类型：get

发送：
```
/collection?id=1

id：小说id
```

返回：
```js
{
    code: 1
}
```

### 5.4 获取收藏状态

url: /getCollectionStatus (验证Token)

类型：get

发送：
```
/getStatus?id=1

novelId：小说id
```

返回：
```js
{
    code: 1,
    data: {
        status: 1 //已收藏为1，未收藏为0
    }
}
```

### 5.5 删除收藏

url: /deleteCollectionByNovId (验证Token)

类型：get

发送：
```
/deleteCollectionByNovId?id=1

id：小说id
```

返回：
```js
{
    code: 1
}
```

### 5.6 购买小说

url：/buyNovel（验证Token）

类型：get

发送：
```
/buyNovel?id=1

id:小说id
```

返回：
```
{
    code: 1
}
```

### 5.7 获取小说评论

url：/getComment（不需要验证Token）

类型：get

发送：
```
/getComment?id=1&page=1

id:小说id
```

返回：
```js
{
    code: 1,
    data:{
        total: 11,
        // 一页返回5条数据
        comment_data:[
            {
              id: 1,
              uid: 1,
              name: "张三",
              content: "这小说真棒",
              time: "1552480459000"
            },
            {
              id: 2,
              uid: 1,
              name: "EsunR",
              content: "这小说糟心",
              time: "1552480459000"
            }
            ... ...
        ]
    }
}
```

### 5.8 发布评论

url：/publishComment

类型：post

发送：
```js
{
    novelId: "1", //发布评论对应小说的id
    content: "这小说真棒",
    time: "1552480459000"
}
```

返回：
```
{
    code: 1
}
```

### 5.9 获取小说下载

url: /download

类型: get

发送：
```
this.axios.get("/download?id=" + this.novelId);

id：小说id
```

### 5.10 获取小说内容

url：/getChapterInfo

类型：get

发送：
```
/getChapterInfo?novelId=1&chapter=2

novelId: 小说的id
chapter：小说的章节
```

返回：
```js
{
    code: 1,
    data:{
        id: 1,
        novelId: 6,
        chapter: 1,
        title: "金光闪闪放光芒",
        content:
          "小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容小说章节内容"
    }
}
```

### 5.11 问题反馈

url：/customerService（验证）

类型：post

发送：
```
{
    content: "遇到的问题",
    email: "用户邮箱"
}
```

返回：
```
{
    code: 1
}
```





# 6. 后台相关

### 6.1 查看用户

url：/getUserList（验证）

方式：get

发送：
```
/getUserList?ban=0&page=1

ban: 获取被禁言的用户该参数为1, 获取正常用户该参数为0
page：第几页
```

返回：
```js
{
    code: 1,
    data:{
        total: 20,
        userList:[
            {
                id: 1,
                identity: "editor",
                name: "EsunR",
                account: "16031210105",
                vp: "1000",
                ban: 1,
                like: ['武侠','爱情','都市']
            }
            ... ...
            // 一页返回9条数据
        ]
    }
}
```

### 6.2 管理用户
url：/managerUser（验证）

方式：get

发送：
```
/managerUser?id=1&action=ban

id：要禁言的用户id
action: 要进行的操作，ban为禁言，delete为删除，unban为解除禁言
```

返回：
```js
{
    code: 1
}
```

### 6.3 删除评论

url：/deleteComment（验证）

方式：get

发送：
```
/deleteComment?id=1

id:评论id
```

返回：
```
{
    code:1
}
```

### 6.4 举报评论

url：/reportComment（验证）

方式：get

发送：
```
/reportComment?id=1

id: 评论id
```

返回：
```
{
    code:1
}
```

### 6.5 获取被举报评论

url：/getRepotedComment（验证）

方式：get

返回：
```js
{
    code:1
    data: [
        {
            id: 1,
            uid: 1,
            name: "EsunR",
            content: "啊哈哈哈哈哈"
        }
        ... ...
        // 按时间倒序，离当前时间近的排在前面
    ]
}
```


### 6.6 获取小说数据
url: /getNovelData（验证）

类型：get

发送：
```
/getNovelData?id=1

id:小说id
```

返回：
```js
{
    code: 1,
    data:{
        collection: 11,
        download: 11,
        comment: 11,
        click: 11
    }
}
```

### 6.7 获取反馈信息

url：/getFeedback（验证Token）

类型：get

返回：
```js
{
    code: 1,
    data: [
        {
            id: 1,
            content: "反馈内容",
            email: "641411169@qq.com"
        },
        ... ...
    ]
}
```














