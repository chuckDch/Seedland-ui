## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `sd-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="sd-icon-edit"></i>
<i class="sd-icon-share"></i>
<i class="sd-icon-delete"></i>
<sd-button type="primary" icon="sd-icon-search">搜索</sd-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'sd-icon-' + name"></i>
      <span class="icon-name">{{'sd-icon-' + name}}</span>
    </span>
  </li>
</ul>
