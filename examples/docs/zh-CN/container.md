## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<sd-container>`：外层容器。当子元素中包含 `<sd-header>` 或 `<sd-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<sd-header>`：顶栏容器。

`<sd-aside>`：侧边栏容器。

`<sd-main>`：主要区域容器。

`<sd-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<sd-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<sd-container>`。
:::

### 常见页面布局

:::demo
```html
<sd-container>
  <sd-header>Header</sd-header>
  <sd-main>Main</sd-main>
</sd-container>

<sd-container>
  <sd-header>Header</sd-header>
  <sd-main>Main</sd-main>
  <sd-footer>Footer</sd-footer>
</sd-container>

<sd-container>
  <sd-aside width="200px">Aside</sd-aside>
  <sd-main>Main</sd-main>
</sd-container>

<sd-container>
  <sd-header>Header</sd-header>
  <sd-container>
    <sd-aside width="200px">Aside</sd-aside>
    <sd-main>Main</sd-main>
  </sd-container>
</sd-container>

<sd-container>
  <sd-header>Header</sd-header>
  <sd-container>
    <sd-aside width="200px">Aside</sd-aside>
    <sd-container>
      <sd-main>Main</sd-main>
      <sd-footer>Footer</sd-footer>
    </sd-container>
  </sd-container>
</sd-container>

<sd-container>
  <sd-aside width="200px">Aside</sd-aside>
  <sd-container>
    <sd-header>Header</sd-header>
    <sd-main>Main</sd-main>
  </sd-container>
</sd-container>

<sd-container>
  <sd-aside width="200px">Aside</sd-aside>
  <sd-container>
    <sd-header>Header</sd-header>
    <sd-main>Main</sd-main>
    <sd-footer>Footer</sd-footer>
  </sd-container>
</sd-container>

<style>
  .sd-header, .sd-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .sd-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .sd-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .sd-container {
    margin-bottom: 40px;
  }
  
  .sd-container:nth-child(5) .sd-aside,
  .sd-container:nth-child(6) .sd-aside {
    line-height: 260px;
  }
  
  .sd-container:nth-child(7) .sd-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<sd-container style="height: 500px; border: 1px solid #eee">
  <sd-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <sd-menu :default-openeds="['1', '3']">
      <sd-submenu index="1">
        <template slot="title"><i class="sd-icon-message"></i>导航一</template>
        <sd-menu-item-group>
          <template slot="title">分组一</template>
          <sd-menu-item index="1-1">选项1</sd-menu-item>
          <sd-menu-item index="1-2">选项2</sd-menu-item>
        </sd-menu-item-group>
        <sd-menu-item-group title="分组2">
          <sd-menu-item index="1-3">选项3</sd-menu-item>
        </sd-menu-item-group>
        <sd-submenu index="1-4">
          <template slot="title">选项4</template>
          <sd-menu-item index="1-4-1">选项4-1</sd-menu-item>
        </sd-submenu>
      </sd-submenu>
      <sd-submenu index="2">
        <template slot="title"><i class="sd-icon-menu"></i>导航二</template>
        <sd-menu-item-group>
          <template slot="title">分组一</template>
          <sd-menu-item index="2-1">选项1</sd-menu-item>
          <sd-menu-item index="2-2">选项2</sd-menu-item>
        </sd-menu-item-group>
        <sd-menu-item-group title="分组2">
          <sd-menu-item index="2-3">选项3</sd-menu-item>
        </sd-menu-item-group>
        <sd-submenu index="2-4">
          <template slot="title">选项4</template>
          <sd-menu-item index="2-4-1">选项4-1</sd-menu-item>
        </sd-submenu>
      </sd-submenu>
      <sd-submenu index="3">
        <template slot="title"><i class="sd-icon-setting"></i>导航三</template>
        <sd-menu-item-group>
          <template slot="title">分组一</template>
          <sd-menu-item index="3-1">选项1</sd-menu-item>
          <sd-menu-item index="3-2">选项2</sd-menu-item>
        </sd-menu-item-group>
        <sd-menu-item-group title="分组2">
          <sd-menu-item index="3-3">选项3</sd-menu-item>
        </sd-menu-item-group>
        <sd-submenu index="3-4">
          <template slot="title">选项4</template>
          <sd-menu-item index="3-4-1">选项4-1</sd-menu-item>
        </sd-submenu>
      </sd-submenu>
    </sd-menu>
  </sd-aside>
  
  <sd-container>
    <sd-header style="text-align: right; font-size: 12px">
      <sd-dropdown>
        <i class="sd-icon-setting" style="margin-right: 15px"></i>
        <sd-dropdown-menu slot="dropdown">
          <sd-dropdown-item>查看</sd-dropdown-item>
          <sd-dropdown-item>新增</sd-dropdown-item>
          <sd-dropdown-item>删除</sd-dropdown-item>
        </sd-dropdown-menu>
      </sd-dropdown>
      <span>王小虎</span>
    </sd-header>
    
    <sd-main>
      <sd-table :data="tableData">
        <sd-table-column prop="date" label="日期" width="140">
        </sd-table-column>
        <sd-table-column prop="name" label="姓名" width="120">
        </sd-table-column>
        <sd-table-column prop="address" label="地址">
        </sd-table-column>
      </sd-table>
    </sd-main>
  </sd-container>
</sd-container>

<style>
  .sd-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .sd-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `sd-header` 或 `sd-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |