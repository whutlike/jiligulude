import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  // 第一个标签
  { text: "博客", icon: "fa6-solid:blog", link: "/blog" },
  // 第二个标签
  {
    text: "留空",
    icon: "fa6-solid:bars-staggered",
    prefix: "/",
    children: [
      "knowledge/Applist",
      {
        text: "常用扩展",
        icon: "fa6-brands:chrome",
        link: "knowledge/Chrome",
      },
      {
        text: "服务/专题",
        icon: "",
        prefix: "",
        children: [
          {
            text: "专题示例",
            icon: "fa6-solid:dice-d20",
            link: "knowledge/topic/",
          },
        ],
      },
    ],
  },
  // 第三个标签
  {
    text: "留空",
    icon: "fa6-solid:bed-pulse",
    prefix: "/review1/",
    children: ["chemicalequation", "Coupon"],
  },
  // 第四个标签
  {
    text: "下载",
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
      { text: "资料分类目录", 
        icon: "fa6-solid:kiwi-bird", 
        link: "https://www.yuque.com/edaychem/dxf4ev/hkrucv9l8wp08gmn?singleDoc# 《资料下载数据库》",
      },
    ],
  },
]);