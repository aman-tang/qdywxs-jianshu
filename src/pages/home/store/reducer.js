import {fromJS} from "immutable"; 

const defaultState = fromJS({
  labelList: [{
    id: 1,
    title: "简书电影",
    imgUrl: "https://qdywxs.github.io/jianshu-images/label01.jpg"
  },{
    id: 2,
    title: "故事",
    imgUrl: "https://qdywxs.github.io/jianshu-images/label02.jpg"
  },{
    id: 3,
    title: "手绘",
    imgUrl: "https://qdywxs.github.io/jianshu-images/label03.jpg"
  },{
    id: 4,
    title: "历史",
    imgUrl: "https://qdywxs.github.io/jianshu-images/label04.jpg"
  },{
    id: 5,
    title: "人文社科",
    imgUrl: "https://qdywxs.github.io/jianshu-images/label05.jpg"
  },{
    id: 6,
    title: "摄影",
    imgUrl: "https://qdywxs.github.io/jianshu-images/label06.jpg"
  },{
    id: 7,
    title: "自然科普",
    imgUrl: "https://qdywxs.github.io/jianshu-images/label07.jpg"
  }],
  
  articleList: [{
    id: 1,
    title: "评“超时空同居”浅议爱情电影和奇幻元素的嫁接",
    desc: "这部电影充分照顾到了八零后的情怀，九零后的笑点，零零后嘛，那就是奇幻爱情吧。奇幻爱情喜剧，三种元素都有，但哪种都不出彩，相对来说喜剧元素稍微强一…",
    imgUrl: "https://qdywxs.github.io/jianshu-images/article-img01.jpg",
    author: "苇筱",
    discuss: 31,
    love: 21,
    money: 1
  },{
    id: 2,
    title: "生活随记八则",
    desc: "1 不再困惑也不再迷茫，头脑中的构想在现实生活中并驾齐驱地向前推进，虽然困难重重但能够想方设法加以克服。前景广阔而美好，只是有一丝淡淡的凄凉，也…",
    imgUrl: "https://qdywxs.github.io/jianshu-images/article-img02.jpeg",
    author: "Jobs",
    discuss: 31,
    love: 90,
    money: 8
  },{
    id: 3,
    title: "“前端一万小时”又惊艳了我一把",
    desc: "Hey guys, 我正在这个平台分发“前端一万小时”这个专栏的一系列文章。这个专栏我已经完成了“从零基础到就业”的相关文章。“从零基础到就业”包含 150+ 篇干货文章，300+ 道经典笔试、面试题。如果你对本系列文章感兴趣，欢迎关注 「公众号：前端一万小时」，并点击菜单栏“全部文章”来加入我们的“一万小时计划”！祝顺利，祝成功^^……",
    imgUrl: "https://qdywxs.github.io/jianshu-images/article-img03.jpg",
    author: "Oli",
    discuss: "9k+",
    love: "10k+",
    money: "100000k+"
  }],
  
  panelsList: [{
    id: 1,
    imgUrl: "https://qdywxs.github.io/jianshu-images/panel01.png"
  },{
    id: 2,
    imgUrl: "https://qdywxs.github.io/jianshu-images/panel02.png"
  },{
    id: 3,
    imgUrl: "https://qdywxs.github.io/jianshu-images/panel03.png"
  },{
    id: 4,
    imgUrl: "https://qdywxs.github.io/jianshu-images/panel04.png"
  },{
    id: 5,
    imgUrl: "https://qdywxs.github.io/jianshu-images/panel05.png"
  }]
  
})

export default (state=defaultState, action) => {  
  
  return state;
}