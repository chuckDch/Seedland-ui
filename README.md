## Install
```shell
"dependencies": {
    "seedland-ui": "git+https://github.com/chuckDch/Seedland-ui.git#dev"
  },
  
npm install
```

## Quick Start
``` javascript
import Vue from 'vue'
import Seedland from 'seedland-ui'

Vue.use(Seedland)

// or
import {
  Select,
  Button
  // ...
} from 'seedland-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
For more information, please refer to [Quick Start](http://web.reenoo.net/2019/Dch/SD-UI/#/zh-CN/component/quickstart) in our documentation.


## LICENSE
[MIT](LICENSE)
