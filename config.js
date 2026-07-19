// 导航数据配置文件
// 每个分类包含：name（分类名），icon（可选图标），links（数组，每个元素有 name 和 url）
const siteData = [
    {
        name: "工作常用",
        icon: "📁",
        links: [
            { name: "Gmail", url: "https://mail.google.com" },
            { name: "Google Docs", url: "https://docs.google.com" },
            { name: "Trello", url: "https://trello.com" },
            { name: "Google Calendar", url: "https://calendar.google.com" },
            { name: "Google Drive", url: "https://drive.google.com" }
        ]
    },
    {
        name: "开发工具",
        icon: "🛠️",
        links: [
            { name: "GitHub", url: "https://github.com" },
            { name: "Stack Overflow", url: "https://stackoverflow.com" },
            { name: "VS Code", url: "https://code.visualstudio.com" },
            { name: "npm", url: "https://www.npmjs.com" },
            { name: "Docker", url: "https://www.docker.com" }
        ]
    },
    {
        name: "AI 助手",
        icon: "🧠",
        links: [
            { name: "ChatGPT", url: "https://chat.openai.com" },
            { name: "Claude", url: "https://claude.ai" },
            { name: "JetBrains", url: "https://www.jetbrains.com" },
            { name: "Sublime", url: "https://www.sublimetext.com" },
            { name: "Nginx", url: "https://nginx.org" }
        ]
    },
    {
        name: "学习资源",
        icon: "📚",
        links: [
            { name: "哔哩哔哩", url: "https://www.bilibili.com" },
            { name: "Udemy", url: "https://www.udemy.com" },
            { name: "Coursera", url: "https://www.coursera.org" },
            { name: "edX", url: "https://www.edx.org" },
            { name: "MDN 文档", url: "https://developer.mozilla.org" },
            { name: "W3Schools", url: "https://www.w3schools.com" },
            { name: "力扣", url: "https://leetcode.cn" },
            { name: "Codecademy", url: "https://www.codecademy.com" },
            { name: "freeCodeCamp", url: "https://www.freecodecamp.org" }
        ]
    },
    {
        name: "设计素材",
        icon: "🎨",
        links: [
            { name: "Pexels", url: "https://www.pexels.com" },
            { name: "Unsplash", url: "https://unsplash.com" },
            { name: "iconfont", url: "https://www.iconfont.cn" },
            { name: "Figma", url: "https://www.figma.com" },
            { name: "Canva", url: "https://www.canva.com" }
        ]
    },
    {
        name: "资讯阅读",
        icon: "📰",
        links: [
            { name: "Adobe", url: "https://www.adobe.com" },
            { name: "Sketch", url: "https://www.sketch.com" },
            { name: "InVision", url: "https://www.invisionapp.com" },
            { name: "Dribbble", url: "https://dribbble.com" },
            { name: "Behance", url: "https://behance.net" }
        ]
    },
    {
        name: "社交网络",
        icon: "🌐",
        links: [
            { name: "Hacker News", url: "https://news.ycombinator.com" },
            { name: "知乎", url: "https://www.zhihu.com" },
            { name: "少数派", url: "https://sspai.com" },
            { name: "36氪", url: "https://www.36kr.com" },
            { name: "The Verge", url: "https://www.theverge.com" }
        ]
    },
    {
        name: "实用工具",
        icon: "⚙️",
        links: [
            { name: "Google", url: "https://www.google.com" },
            { name: "WolframAlpha", url: "https://www.wolframalpha.com" },
            { name: "天气", url: "https://weather.com" },
            { name: "DeepL 翻译", url: "https://www.deepl.com" },
            { name: "汇率换算", url: "https://www.xe.com" },
            { name: "单位换算", url: "https://www.convertworld.com/zh-hans/" },
            { name: "计算器", url: "https://www.calculator.net" },
            { name: "PDF 工具", url: "https://www.ilovepdf.com" }
        ]
    }
];
