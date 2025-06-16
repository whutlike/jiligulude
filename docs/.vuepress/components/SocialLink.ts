import type { VNode } from "vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "SocialLink",

  setup() {
    //定义 qq 群链接和图标
    //const qqlink = "https://qm.qq.com/cgi-bin/qm/qr?k=2b1d9c3f0a4e5f8c6b7d8e9f0a1b2c3d&jump_from=webapi";
    //const qqIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="width:1.25rem;height:1.25rem;vertical-align:middle"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" fill="currentColor"/></svg>`;
    //定义语雀链接和图标
    const yuqueLink = "https://www.yuque.com/edaychem";
    const yuqueIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;vertical-align:middle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="currentColor"/>
        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
      </svg>
    `;
    return (): VNode =>
      h(
        "div",
        { class: "vp-nav-item vp-action" },
        h("a", {
          class: "vp-action-link",
          href: yuqueLink,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "yuque",
          innerHTML: yuqueIcon,
        })
      );
  },
});
