<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-form :model="dataForm" :inline="true">
        <el-form-item label="">
          <el-input
            v-model="dataForm.keywords"
            placeholder="搜索关键字"
            width="200"
            class="filter-item"
            clearable
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="handleFilter"
        >搜索</el-button>
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="success"
          icon="el-icon-edit"
          @click="handleAddOrUpdate()"
        >上传文件</el-button>
        <!-- <el-button class="filter-item" style="margin-left: 10px;" @click="handleConfig" type="primary" icon="el-icon-edit">云存储配置</el-button> -->
        <el-button
          :disabled="dataListSelections.length <= 0"
          type="danger"
          @click="handleDelete()"
        >批量删除</el-button>
      </el-form>
    </div>

    <el-table
      :key="tableKey"
      v-loading="dataListLoading"
      :data="dataList"
      element-loading-text="给我一点时间"
      border
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50"
      />
      <!-- <el-table-column
        prop="id"
        header-align="center"
        align="center"
        width="80"
        label="ID">
      </el-table-column> -->
      <el-table-column
        prop="url"
        header-align="center"
        align="center"
        label="URL地址"
      />
      <el-table-column
        prop="createDate"
        header-align="center"
        align="center"
        width="180"
        label="创建时间"
      />
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="100"
        label="操作"
      >
        <template slot-scope="scope">
          <!-- <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button> -->
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container" style="margin-top: 16px;">
      <el-pagination
        :current-page="pageIndex"
        :page-size="pageLimit"
        :total="totalCount"
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

    <!-- 弹窗, 云存储配置 -->
    <oss-config v-if="configVisible" ref="config" />
    <!-- 弹窗, 上传文件 -->
    <oss-upload
      v-if="addOrUpdateVisible"
      ref="addOrUpdate"
      @refreshDataList="getDataList"
    />
  </div>
</template>

<script>
import api from '@/api'
// import { copy } from '@dwdjs/utils';
import waves from '@/directive/waves' // 水波纹指令
import OssConfig from './oss-config'
import OssUpload from './oss-upload'

const modelApi = {
  getAccessToken: api.getAccessToken,
  list: api.getUser,
  add: api.addFile,
  // edit: api.updateUser,
  del: api.delFile,
}

// const roles = [
//   { id: 1, value: 'admin' },
//   { id: 2, value: 'manager' },
//   // { id: 3, value: 'editor' },
//   // { id: 4, value: 'guest' },
// ]

// arr to obj ,such as { CN : "China", US : "USA" }
// const roleIds = roles.reduce((obj, item) => {
//   obj[item.id] = item.value
//   return obj
// }, {})

export default {
  name: 'SysOss',
  components: {
    OssConfig,
    OssUpload,
    // AddOrUpdate,
  },
  directives: {
    waves,
  },
  data() {
    return {
      dataForm: {
        keywords: '',
        // sort: '+id',
      },
      tableKey: 0,
      pageIndex: 1,
      pageLimit: 10,
      totalCount: 0,
      dataList: [],
      dataListLoading: true,
      dataListSelections: [],
      addOrUpdateVisible: false,
      configVisible: false,
    }
  },
  filters: {},
  created() {
    // activated() {
    this.getDataList()
  },
  methods: {
    getDataList() {
      this.dataListLoading = true
      modelApi.list(
        {
          ...this.dataForm,
          page: this.pageIndex,
          size: this.pageLimit,
        },
        res => {
          this.dataListLoading = false
          this.dataList = res.data.list
          this.totalCount = res.data.total
        },
        err => {}
      )
    },
    handleFilter() {
      this.pageIndex = 1
      this.getDataList()
    },
    handleSizeChange(val) {
      this.pageLimit = val
      this.getDataList()
    },
    handleCurrentChange(val) {
      this.pageIndex = val
      this.getDataList()
    },
    // 多选
    handleSelectionChange(val) {
      this.dataListSelections = val
    },
    // 云存储配置
    handleConfig() {
      this.configVisible = true
      this.$nextTick(() => {
        this.$refs.config.init()
      })
    },
    /* eslint dot-notation: 0 */
    handleAddOrUpdate(id) {
      this.addOrUpdateVisible = true
      this.$nextTick(() => {
        // this.$refs.upload.init(id)
        this.$refs.addOrUpdate.init(id)
      })
    },
    updateItem(data, type) {
      if (type === 'add') {
        this.dataList.unshift(data)
      } else {
        for (const v of this.dataList) {
          if (v.id === data.id) {
            const index = this.dataList.indexOf(v)
            this.dataList.splice(index, 1, data)
            break
          }
        }
      }
    },
    // 不能删除自己，不能删除最后一个用户，不能删除超管
    handleDelete(id) {
      // 删除是危险动作，至少要气泡提示
      const ids = id
        ? [id]
        : this.dataListSelections.map(item => {
            return item.id
          })
      this.$confirm(
        `确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          modelApi.del(
            {
              ids,
            },
            res => {
              this.$notify({
                // title: '成功',
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                },
              })

              // const index = this.dataList.indexOf({

              // })
              // this.dataList.splice(index, 1)
            },
            err => {
              this.$message({
                message: '删除失败',
                type: 'danger',
              })
            }
          )
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="stylus" scoped></style>
