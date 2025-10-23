import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// fontawesome：https://fontawesome.com/search?m=free&o=r
// 本站采用iconify图标：https://icon-sets.iconify.design/
// 直接复制的图标：https://emojipedia.org/
export default sidebar({
  "": [
    // 第一个页面
    "/plan",
    // 第二个页面
    "/markdown",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    // { text: "读书笔记", icon: "fa6-brands:readme", link: "https://doc.edaychem.cn/reading/" },
    // 指定显示页面
    {
      text: "🌱 学习经验",
      icon: "",
      prefix: "/experiences/",
      link: "",
      collapsible: true,  
      children: "structure",
    }, 
    {
      text: "🍀 我爱预习",
      icon: "",
      prefix: "/preview/",
      link: "",
      collapsible: true,  
      children: "structure",
    }, 
    {
      text: "💯 基础知识汇总",
      icon: "",
      prefix: "/knowledges/",
      link: "",
      collapsible: true,  
      children: "structure",
    },
    {
      text: "💢 基础知识过关",
      icon: "",
      prefix: "/quiz/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "❌ 易错点",
      icon: "",
      prefix: "/commonmistakes/",
      link: "",
      collapsible: true,  
      children: "structure",
    },
    {
      text: "🚀 重难点突破",
      icon: "",
      prefix: "/keypoints/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🧪 实验突破",
      icon: "",
      prefix: "/experimental/",
      link: "",
      collapsible: true,
      children:"structure",
    },
    {
      text: "1️⃣ 一轮复习",
      icon: "",
      prefix: "/review1/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "2️⃣ 二轮复习",
      icon: "",
      prefix: "/review2/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "3️⃣ 三轮复习",
      icon: "",
      prefix: "/review3/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "加密目录",
      icon: "material-symbols:encrypted",
      prefix: "/encrypt/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
  // 专题区（独立侧边栏）
  "/knowledges/": "structure",
  "//experimental/": "structure",
  "/_posts/": [
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ], 
});
