# adblocklist


## 添加自定义规则

通过 Settings -> Profiles -> Parsers -> Edit

指定 profile 的预处理脚本。
``` yaml

parsers: # array
  - url: 订阅链接
    file: '/Users/nick0723/.config/clash/preprocess.js'
    
```

### preprocess 文件

