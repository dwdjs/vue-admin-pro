<!-- 角色管理 -->
<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-form :model="dataForm" :inline="true">
        <el-form-item label="">
          <el-input
            v-model="dataForm.keywords"
            placeholder="用户名"
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
        >搜索</el-button
        >
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="success"
          icon="el-icon-edit"
          @click="handleAddOrUpdate()"
        >新增</el-button
        >
        <!-- <el-button type="danger" @click="handleDelete()" :disabled="dataListSelections.length <= 0">批量删除</el-button> -->
      </el-form>
    </div>

    <el-table
      v-loading="dataListLoading"
      :key="tableKey"
      :data="dataList"
      element-loading-text="给我一点时间"
      border
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column> -->
      <!-- <el-table-column
        prop="id"
        header-align="center"
        align="center"
        label="ID">
      </el-table-column> -->
      <el-table-column
        prop="code"
        header-align="center"
        align="center"
        width="200"
        label="角色标识"
      />
      <el-table-column
        prop="name"
        header-align="center"
        align="center"
        width="200"
        label="角色名称"
      />
      <el-table-column
        prop="description"
        header-align="center"
        align="center"
        label="备注"
      />
      <!-- <el-table-column
        prop="state"
        header-align="center"
        align="center"
        label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.state === 0" size="small">正常</el-tag>
          <el-tag v-if="scope.row.state === 1" size="small" type="danger">禁用</el-tag>
        </template>
      </el-table-column> -->
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="200"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleAddOrUpdate(scope.row)"
          >编辑</el-button
          >
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.row.id)"
          >删除</el-button
          >
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

    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update
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
import AddOrUpdate from './role-add-or-update'

const modelApi = {
  add: api.addRole,
  del: api.delRole,
  edit: api.updateRole,
  list: api.getRole,
}

export default {
  name: 'SysRole',
  components: {
    AddOrUpdate,
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
    }
  },
  filters: {},
  created() {
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
    /* eslint dot-notation: 0 */
    handleAddOrUpdate(id) {
      this.addOrUpdateVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id)
        // this.$refs['dataForm'].clearValidate()
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
    handleDelete(id) {
      // 删除是危险动作，至少要气泡提示
      // const ids = id ? [id] : this.dataListSelections.map((item) => {
      //   return item.id
      // })
      const ids = id ? [id] : []
      modelApi.del(
        {
          ids,
        },
        res => {
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success',
            duration: 2000,
          })

          this.getDataList()
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
    },
  },
}
</script>

<style lang="stylus" scoped></style>
