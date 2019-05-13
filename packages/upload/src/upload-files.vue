<template>
  <uploader :options="options" :autoStart="false" class="uploader-example">
    <uploader-unsupport></uploader-unsupport>

    <uploader-drop>
      <p>拖动文件或文件夹到这里</p>
      <uploader-btn>
        <template slot-scope="scope">
          <sd-tag type="info" size="mini">选择文件</sd-tag>
        </template>
      </uploader-btn>
      <uploader-btn :directory="true">
        <template slot-scope="scope">
          <sd-tag type="info" size="mini">选择文件夹</sd-tag>
        </template>
      </uploader-btn>
    </uploader-drop>

    <uploader-list>
      <template slot-scope="wtf">
        <div>
          <sd-table :data="wtf.fileList" border>
            <sd-table-column label="名称">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </sd-table-column>

            <sd-table-column label="大小">
              <template slot-scope="scope">{{ scope.row.size }}</template>
            </sd-table-column>

            <sd-table-column label="进度">
              <template slot-scope="scope">
                <uploader-file :file="scope.row" :list="true">
                  <template slot-scope="kk">
                    <sd-progress
                      :text-inside="true"
                      :stroke-width="18"
                      :percentage="Math.floor(kk.progress*100)"
                    ></sd-progress>
                  </template>
                </uploader-file>
              </template>
            </sd-table-column>

            <sd-table-column label="状态">
              <template slot-scope="scope">
                <uploader-file :file="scope.row" :list="true">
                  <template slot-scope="kk">
                    <span>{{ kk.status }}</span>
                  </template>
                </uploader-file>
              </template>
            </sd-table-column>

            <sd-table-column label="操作" width="200">
              <template slot-scope="haha">
                <sd-button
                  size="mini"
                  type="success"
                  plain
                  icon="sd-icon-delete"
                  @click="resume(haha.row)"
                >上传</sd-button>
                <sd-button
                  size="mini"
                  type="danger"
                  plain
                  icon="sd-icon-delete"
                  @click="remove(haha.row)"
                >移除</sd-button>
              </template>
            </sd-table-column>
          </sd-table>
        </div>
      </template>
    </uploader-list>
  </uploader>
</template>

<script>
import Vue from 'vue';
import uploader from 'vue-simple-uploader';
Vue.use(uploader);

export default {
  name: 'UploadFiles',
  data() {
    return {
      paused: false,
      error: false,
      averageSpeed: 0,
      currentSpeed: 0,
      isComplete: false,
      isUploading: false,
      size: 0,
      formatedSize: '',
      uploadedSize: 0,
      progress: 0,
      timeRemaining: 0,
      type: '',
      extension: '',
      progressingClass: ''
    };
  },
  props: {
    options: Object
  },
  methods: {
    // 移除
    remove(s) {
      // var a = this.$scopedSlots.default("row")
      console.log(s);
      s.cancel();
      // const uploaderInstance = this.$refs.uploader.uploader
      // console.log(uploaderInstance)
      // this.file.cancel()
    },
    // 开始上传
    resume(s) {
      s.resume();
      // this._actionCheck()
    },
    uploadAll() {}
  }
};
</script>

<style scopedSlots>
.sd-tag{margin-right: 4px;}
.uploader-drop {
  border: 3px dashed #ccc !important;
  background-color: #fff !important;
  border-radius: 10px;
  margin-bottom: 10px;
}
.uploader-file {
  position: static !important;
  height: auto !important;
  line-height: 1 !important;
  overflow: hidden !important;
  border-bottom: none !important;
}
.uploader-btn {
  display: inline !important;
  position: static !important;
  padding: 0 !important;
  font-size: inherit !important;
  line-height: 1 !important;
  /* color: inherit!important; */
  border: none !important;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  outline: none;
}
.uploader-btn:hover {
  background-color: transparent !important;
}
</style>