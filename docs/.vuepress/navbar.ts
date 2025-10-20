import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  // 第一个标签
  { text: "博客", icon: "fa6-solid:blog", link: "/blog" },
  // 第二个标签
  {
    text: "文章推荐",
    icon: "fa6-solid:bars-staggered",
    prefix: "/",
    children: [
      "markdown",
      "knowledges/化学方程式合集",
      "keypoints/化学方程式的配平",
      "review2/二轮复习知识点",
    ],
  },
  // 第三个标签
  {
    text: "常用工具",
    icon: "fa6-solid:bars",
    children: [
      {
        text: "思维导图",
        icon: "fa6-solid:sitemap",
        link: "https://markmap.js.org/repl",
      },
      {
        text: "",
        icon: "",
        link: "",
      },
    ],
  },
  // 第四个标签
  {
    text: "资料下载",
    icon: "fa6-solid:download",
    children: [
      {
        text: "原创资料",
        icon: "fa6-solid:bolt",
        link: "http://scienlee.ysepan.com/",
      },
      { text: "网络资料",
        icon: "fa6-solid:cloud-arrow-down",
        link: "https://pan.quark.cn/s/707018aa1155",
      },
    ],
  },
]);