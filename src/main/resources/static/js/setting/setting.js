var vm = new Vue({
    el: '#app',
    data: function () {
        return {
            screenWidth: document.body.clientWidth,
            timer: false,
            isCollapse: false,
            showMoreDialog: false,
            searchText: "",
            searchMoreText: "",
            navType: 'fl',
            //分类
            fl: {
                current: 1,
                size: 10,
                total: 0,
                searchText: "",
                data: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            },
            //网址
            link: {
                current: 1,
                size: 10,
                total: 0,
                searchText: "",
                data: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
            }
        }
    },
    watch: {
        screenWidth(newValue) {
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if (!this.timer) {
                this.screenWidth = newValue;
                this.isCollapse = this.screenWidth >= 600 ? false : true;
                this.timer = true;
                setTimeout(() => {
                    this.timer = false;
                }, 400);
            }
        }
    },
    computed: {
        navType: function (newVal, oldVal) {
            console.log("compute", newVal, oldVal);
        }
    },
    methods: {
        /**
         * 展开/收起
         */
        changeCollapse: function () {
            this.isCollapse = !this.isCollapse;
        },

        handleSelect: function (key, keyPath) {
            this.navType = key;
            console.log(key);
        },
        searchFl: function () {
            if (this.fl.searchText == "") {
                this.$message("搜索的内容不能为空");
                return;
            }
            this.$message("开发中...");
        },
        handleFlView: function (row) {
            this.$message("查看，开发中...");
        },
        handleFlAdd: function (row) {
            this.$message("新增，开发中...");
        },
        handleFlEdit: function (row) {
            this.$message("编辑，开发中...");
        },
        handleFlDel: function (row) {
            this.$message("删除，开发中...");
        },
        /**
         * 改变每页显示条数
         * @param val
         */
        handleFlSizeChange: function (val) {
            this.fl.current = 1;
            this.fl.size = val;
            // this.loadLinkList();
        },
        /**
         * 翻页
         * @param val
         */
        handleFlPageChange: function (val) {
            this.fl.current = val;
            // this.loadLinkList();
        },
        searchLink: function () {
            if (this.link.searchText == "") {
                this.$message("搜索的内容不能为空");
                return;
            }
            this.$message("开发中...");
        },
        handleLinkAdd: function (row) {
            this.$message("新增，开发中...");
        },
        handleLinkView: function (row) {
            this.$message("查看，开发中...");
        },
        handleLinkEdit: function (row) {
            this.$message("编辑，开发中...");
        },
        handleLinkDel: function (row) {
            this.$message("删除，开发中...");
        },
        /**
         * 改变每页显示条数
         * @param val
         */
        handleLinkSizeChange: function (val) {
            this.link.current = 1;
            this.link.size = val;
            // this.loadLinkList();
        },
        /**
         * 翻页
         * @param val
         */
        handleLinkPageChange: function (val) {
            this.link.current = val;
            // this.loadLinkList();
        }

    }
    ,
    created: function () {

    }
    ,
    mounted: function () {
        var _this = this;
        window.onresize = function () {
            _this.screenWidth = document.body.clientWidth
        }
    }
})