<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .sd-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .sd-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <sd-row class="demo-line">
      <sd-button>Default</sd-button>
      <sd-button type="primary">Primary</sd-button>
      <sd-button type="success">Success</sd-button>
      <sd-button type="info">Info</sd-button>
      <sd-button type="warning">Warning</sd-button>
      <sd-button type="danger">Danger</sd-button>
    </sd-row>
    <sd-row class="demo-line">
      <sd-button plain>Plain</sd-button>
      <sd-button type="primary" plain>Primary</sd-button>
      <sd-button type="success" plain>Success</sd-button>
      <sd-button type="info" plain>Info</sd-button>
      <sd-button type="warning" plain>Warning</sd-button>
      <sd-button type="danger" plain>Danger</sd-button>
    </sd-row>
    <sd-row class="demo-line">
      <sd-button round>Round</sd-button>
      <sd-button type="primary" round>Primary</sd-button>
      <sd-button type="success" round>Success</sd-button>
      <sd-button type="info" round>Info</sd-button>
      <sd-button type="warning" round>Warning</sd-button>
      <sd-button type="danger" round>Danger</sd-button>
    </sd-row>
    <sd-row class="demo-line">
      <sd-button icon="sd-icon-search" circle></sd-button>
      <sd-button type="primary" icon="sd-icon-edit" circle></sd-button>
      <sd-button type="success" icon="sd-icon-check" circle></sd-button>
      <sd-button type="info" icon="sd-icon-message" circle></sd-button>
      <sd-button type="warning" icon="sd-icon-star-off" circle></sd-button>
      <sd-button type="danger" icon="sd-icon-delete" circle></sd-button>
    </sd-row>
    <sd-row class="demo-line">
      <sd-button>Default</sd-button>
      <sd-button size="medium">Medium</sd-button>
      <sd-button size="small">Small</sd-button>
      <sd-button size="mini">Mini</sd-button>
    </sd-row>
    <h4>Radio</h4>
    <sd-row class="demo-line">
      <sd-radio v-model="radio" label="1">Option A</sd-radio>
      <sd-radio v-model="radio" label="2">Option B</sd-radio>
    </sd-row>
    <sd-row class="demo-line">
      <sd-radio-group v-model="radio1">
        <sd-radio-button label="New York"></sd-radio-button>
        <sd-radio-button label="Washington"></sd-radio-button>
        <sd-radio-button label="Los Angeles"></sd-radio-button>
        <sd-radio-button label="Chicago"></sd-radio-button>
      </sd-radio-group>
    </sd-row>
    <sd-row class="demo-line">
      <sd-radio v-model="radio2" label="1" border>Option A</sd-radio>
      <sd-radio v-model="radio2" label="2" border>Option B</sd-radio>
    </sd-row>
    <h4>Checkbox</h4>
    <sd-row class="demo-line">
      <sd-checkbox v-model="checked">Option</sd-checkbox>
    </sd-row>
    <sd-row class="demo-line">
      <sd-checkbox-group v-model="checked1">
        <sd-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</sd-checkbox-button>
      </sd-checkbox-group>
    </sd-row>
    <sd-row class="demo-line">
      <sd-checkbox v-model="checked2" label="Option1" border></sd-checkbox>
    </sd-row>
    <h4>Input</h4>
    <sd-row style="width: 180px">
      <sd-input placeholder="Please input" v-model="input"></sd-input>
    </sd-row>
    <h4>InputNumber</h4>
    <sd-row>
      <sd-input-number v-model="inputNumber" :min="1" :max="10"></sd-input-number>
    </sd-row>
    <h4>Select</h4>
    <sd-row>
      <sd-select v-model="selectValue" placeholder="Select">
        <sd-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></sd-option>
      </sd-select>
    </sd-row>
    <h4>Cascader</h4>
    <sd-row>
      <sd-cascader :options="cascadeOptions" v-model="cascaderValue"></sd-cascader>
    </sd-row>
    <h4>Switch</h4>
    <sd-row>
      <sd-switch v-model="switchValue"></sd-switch>
      <sd-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </sd-switch>
    </sd-row>
    <h4>Slider</h4>
    <sd-row style="width: 380px">
      <sd-slider v-model="slider"></sd-slider>
    </sd-row>
    <h4>DatePicker</h4>
    <sd-row>
      <sd-date-picker v-model="datePicker" type="date"></sd-date-picker>
    </sd-row>
    <h4>Rate</h4>
    <sd-row>
      <sd-rate class="demo-line" v-model="rate"></sd-rate> 
      <sd-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </sd-rate>
    </sd-row>
    <h4>Transfer</h4>
    <sd-row>
      <sd-transfer v-model="transfer" filterable :data="transferData">
        <sd-button class="transfer-footer" slot="left-footer" size="small">Operation</sd-button>
        <sd-button class="transfer-footer" slot="right-footer" size="small">Operation</sd-button>
      </sd-transfer>
    </sd-row>
    <h4>Table</h4>
    <sd-row>
      <sd-table :data="tableData" style="width: 70%">
        <sd-table-column prop="date" label="Date" width="180"></sd-table-column>
        <sd-table-column prop="name" label="Name" width="180"></sd-table-column>
        <sd-table-column prop="address" label="Address"></sd-table-column>
      </sd-table>
    </sd-row>
    <h4>Tag</h4>
    <sd-row>
      <sd-tag class="demo-item" closable>Tag One</sd-tag>
      <sd-tag class="demo-item" closable type="success">Tag Two</sd-tag>
      <sd-tag class="demo-item" closable type="info">Tag Three</sd-tag>
      <sd-tag class="demo-item" closable type="warning">Tag Four</sd-tag>
      <sd-tag class="demo-item" closable type="danger">Tag Five</sd-tag>
    </sd-row>
    <h4>Progress</h4>
    <sd-row style="width: 380px">
      <sd-progress :percentage="20"></sd-progress>
      <sd-progress :percentage="60" status="exception"></sd-progress>
      <sd-progress :percentage="100" status="success"></sd-progress>
    </sd-row>
    <h4>Tree</h4>
    <sd-row style="width: 380px">
      <sd-tree :data="treeData" :props="defaultTreeProps" ></sd-tree>
    </sd-row>
    <h4>Pagination</h4>
    <sd-row>
      <sd-pagination layout="prev, pager, next" :total="1000"></sd-pagination>
    </sd-row>
    <h4>Badge</h4>
    <sd-row>
      <sd-badge :value="12" class="demo-item">
        <sd-button size="small">comments</sd-button>
      </sd-badge>
      <sd-badge :value="3" class="demo-item">
        <sd-button size="small">replies</sd-button>
      </sd-badge>
      <sd-badge :value="1" class="demo-item" type="primary">
        <sd-button size="small">comments</sd-button>
      </sd-badge>
      <sd-badge :value="2" class="demo-item" type="warning">
        <sd-button size="small">replies</sd-button>
      </sd-badge>
    </sd-row>
    <h4>Alert</h4>
    <sd-row style="width: 380px;">
      <sd-alert class="demo-item" title="success alert" type="success" show-icon></sd-alert>
      <sd-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></sd-alert>
      <sd-alert class="demo-item" title="warning alert" type="warning" show-icon></sd-alert>
      <sd-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </sd-alert>
    </sd-row>
    <h4>Loading</h4>
    <sd-row>
      <sd-table :data="tableData" style="width: 90%" v-loading="true">
        <sd-table-column prop="date" label="Date" width="180"></sd-table-column>
        <sd-table-column prop="name" label="Name" width="180"></sd-table-column>
        <sd-table-column prop="address" label="Address"></sd-table-column>
      </sd-table>
    </sd-row>
    <h4>Message</h4>
    <sd-row>
      <div role="alert" class="demo-item sd-message sd-message--success sd-message-fade-leave-active sd-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="sd-message__icon sd-icon-success"></i><p class="sd-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item sd-message sd-message--warning sd-message-fade-leave-active sd-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="sd-message__icon sd-icon-warning"></i><p class="sd-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item sd-message sd-message--info sd-message-fade-leave-active sd-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="sd-message__icon sd-icon-info"></i><p class="sd-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item sd-message sd-message--error sd-message-fade-leave-active sd-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="sd-message__icon sd-icon-error"></i><p class="sd-message__content">Oops, this is a error message.</p><!----></div>
    </sd-row>
    <h4>MessageBox</h4>
    <sd-row>
      <div class="sd-message-box"><div class="sd-message-box__header"><div class="sd-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="sd-message-box__headerbtn"><i class="sd-message-box__close sd-icon-close"></i></button></div><div class="sd-message-box__content"><div class="sd-message-box__status sd-icon-warning"></div><div class="sd-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="sd-message-box__input" style="display: none;"><div class="sd-input"><!----><input type="text" autocomplete="off" placeholder="" class="sd-input__inner"><!----><!----><!----></div><div class="sd-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="sd-message-box__btns"><button type="button" class="sd-button sd-button--default sd-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="sd-button sd-button--default sd-button--small sd-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </sd-row>
    <h4>Notification</h4>
    <sd-row>
      <div role="alert" class="sd-notification right" style="position: relative; left: 0;"><!----><div class="sd-notification__group"><span class="sd-notification__title">Notification</span><div class="sd-notification__content"><div>This is a message </div></div><div class="sd-notification__closeBtn sd-icon-close"></div></div></div>
    </sd-row>
    <h4>Menu</h4>
    <sd-row>
      <sd-menu :default-active="menu" class="sd-menu-demo" mode="horizontal">
        <sd-menu-item index="1">Processing Center</sd-menu-item>
        <sd-submenu index="2">
          <template slot="title">Workspace</template>
          <sd-menu-item index="2-1">item one</sd-menu-item>
          <sd-menu-item index="2-2">item two</sd-menu-item>
          <sd-menu-item index="2-3">item three</sd-menu-item>
          <sd-submenu index="2-4">
            <template slot="title">item four</template>
            <sd-menu-item index="2-4-1">item one</sd-menu-item>
            <sd-menu-item index="2-4-2">item two</sd-menu-item>
            <sd-menu-item index="2-4-3">item three</sd-menu-item>
          </sd-submenu>
        </sd-submenu>
        <sd-menu-item index="3" disabled>Info</sd-menu-item>
        <sd-menu-item index="4">
          <a href="" target="_blank">Orders</a>
        </sd-menu-item>
      </sd-menu>
      <sd-menu
        default-active="2"
        class="demo-line"
      >
        <sd-submenu index="1">
          <template slot="title">
            <i class="sd-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <sd-menu-item-group title="Group One">
            <sd-menu-item index="1-1">item one</sd-menu-item>
            <sd-menu-item index="1-2">item one</sd-menu-item>
          </sd-menu-item-group>
          <sd-menu-item-group title="Group Two">
            <sd-menu-item index="1-3">item three</sd-menu-item>
          </sd-menu-item-group>
          <sd-submenu index="1-4">
            <template slot="title">item four</template>
            <sd-menu-item index="1-4-1">item one</sd-menu-item>
          </sd-submenu>
        </sd-submenu>
        <sd-menu-item index="2">
          <i class="sd-icon-menu"></i>
          <span>Navigator Two</span>
        </sd-menu-item>
        <sd-menu-item index="3" disabled>
          <i class="sd-icon-document"></i>
          <span>Navigator Three</span>
        </sd-menu-item>
        <sd-menu-item index="4">
          <i class="sd-icon-setting"></i>
          <span>Navigator Four</span>
        </sd-menu-item>
      </sd-menu>
    </sd-row>
    <h4>Tabs</h4>
    <sd-row>
      <sd-tabs v-model="tab" class="demo-item">
        <sd-tab-pane label="User" name="first">User</sd-tab-pane>
        <sd-tab-pane label="Config" name="second">Config</sd-tab-pane>
        <sd-tab-pane label="Role" name="third">Role</sd-tab-pane>
        <sd-tab-pane label="Task" name="fourth">Task</sd-tab-pane>
      </sd-tabs>
      <sd-tabs type="card" class="demo-item">
        <sd-tab-pane label="User">User</sd-tab-pane>
        <sd-tab-pane label="Config">Config</sd-tab-pane>
        <sd-tab-pane label="Role">Role</sd-tab-pane>
        <sd-tab-pane label="Task">Task</sd-tab-pane>
      </sd-tabs>
    </sd-row>
    <h4>Dialog</h4>
    <sd-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="sd-dialog" style="margin: 0"><div class="sd-dialog__header"><span class="sd-dialog__title">Tips</span><button type="button" aria-label="Close" class="sd-dialog__headerbtn"><i class="sd-dialog__close sd-icon sd-icon-close"></i></button></div><div class="sd-dialog__body"><span>This is a message</span> </div><div class="sd-dialog__footer"><span class="dialog-footer"><button type="button" class="sd-button sd-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="sd-button sd-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </sd-row>
    <h4>Tooltip</h4>
    <sd-row>
      <div role="tooltip" x-placement="top" class="sd-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="sd-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </sd-row>
    <h4>Popover</h4>
    <sd-row>
      <div role="tooltip" x-placement="top" id="sd-popover-2936" aria-hidden="true" class="sd-popover sd-popper sd-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="sd-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </sd-row>
    <h4>Card</h4>
    <sd-row>
      <sd-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </sd-card>
    </sd-row>
    <h4>Carousel</h4>
    <sd-row>
      <sd-carousel height="150px">
        <sd-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </sd-carousel-item>
      </sd-carousel>
    </sd-row>
    <h4>Collapse</h4>
    <sd-row>
      <sd-collapse v-model="collapse">
        <sd-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </sd-collapse-item>
        <sd-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </sd-collapse-item>
      </sd-collapse>
    </sd-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Element',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      }
    };
  }
};
</script>
