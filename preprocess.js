module.exports.parse = (raw, { yaml }) => {
        const rawObj = yaml.parse(raw)
        const { 'rules': rules = [], 'proxy-groups':groups = []} = rawObj
        groups.unshift({
        	name: "🛑 自定义拦截",
        	type: "select",
        	proxies: ["REJECT"]
        },
        {
        	name: "🌍 自定义代理",
        	type: "select",
        	proxies: ["🎯 全球直连", "♻️ 自动选择"]
        }
        )
        rules.unshift(
        	"DOMAIN,adaccount.csdn.net,🛑 自定义拦截",
        	"DOMAIN,www.baidu.com,🌍 自定义代理",
        	)
        return yaml.stringify({...rawObj})
       }
