import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  // 第一个标签
  { text: "博客", icon: "fa6-solid:blog", link: "/blog" },
  // 第二个标签
  {
    text: "应用",
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
    text: "生活",
    icon: "fa6-solid:bed-pulse",
    prefix: "/review1/",
    children: ["chemicalequation", "Coupon"],
  },
  // 第四个标签
  {
    text: "工具",
    icon: "fa6-solid:toolbox",
    children: [
      {
        text: "ChatGPT SC",
        icon: "fa6-solid:bolt",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "fa6-solid:image", link: "https://prompt.newzone.top/" },
      { text: "多语言翻译", icon: "fa6-solid:language", link: "https://tools.newzone.top/json-translate" },
      {
        text: "工具收藏",
        icon: "fa6-solid:bars",
        link: "https://nav.newzone.top/",
      },
    ],
  },
]);