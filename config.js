// config.js - 链接配置文件
// 修改这个文件就可以更新网站上的所有链接

const linksConfig = {
    "网址导航": {
        links: [
            { 
                title: "秀米", 
                url: "https://xiumi.us/", 
            },
            { 
                title: "pexels", 
                url: "https://www.pexels.com/", 
             
    "Discord": {
        icon: "🌐",
        links: [
            { title: "首页", url: "https://discord.com/channels/@me", icon: "🏠" }
        ]
    }
};

// 网站配置
const siteConfig = {
    title: "🔗 常用快捷链接",
    subtitle: "快速访问常用网站和工具",
    footer: "© 2025 快捷链接导航 | 让访问更便捷",
    searchPlaceholder: "🔍 搜索链接...",
    theme: {
        primaryColor: "#667eea",
        secondaryColor: "#764ba2",
        accentColor: "#f093fb"
    }
};

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { linksConfig, siteConfig };
}
