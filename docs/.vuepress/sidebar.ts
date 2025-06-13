import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 第一个页面
    "/DailyRoutine",
    // 第二个页面
    "/Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://huaxue.so.kg/reading/" },
    // 指定显示页面
    {
      text: "🧰 基础知识",
      icon: "",
      prefix: "/knowledge/",
      link: "",
      collapsible: true,  
      children: "structure",
    },
    {
      text: "🌐 重难点突破",
      icon: "",
      prefix: "/Keypoints/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🏗️ 实验突破",
      icon: "",
      prefix: "/Experimental/",
      link: "",
      collapsible: true,
      children:"structure",
    },
    {
      text: "🔡 知识点过关训练",
      icon: "",
      prefix: "/quiz/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🛖 一轮复习",
      icon: "",
      prefix: "/review1/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🛖 二轮复习",
      icon: "",
      prefix: "/review2/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🛖 三轮复习",
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
  "/knowledge/": "structure",
  // 如果你不想使用默认侧边栏，可以按照路径自行设置。但需要去掉下方配置中的注释，以避免博客和时间轴出现异常。_posts 目录可以不存在。
  /*"/_posts/": [
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ], */
});
