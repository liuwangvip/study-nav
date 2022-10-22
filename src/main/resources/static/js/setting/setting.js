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
            //分类表单
            form_fl: {
                name: "",
                icon: "",
                description: ""
            },
            //网址表单
            form_link: {
                flId: "",
                name: "",
                url: "",
                logo: "",
                description: ""
            },
            //分类
            fl: {
                dialogFormVisible: false,
                parentData: [
                    {id: "11111", name: "dev"},
                    {id: "22222", name: "feature"}
                ],
                //分类表单
                form: {
                    name: "",
                    icon: "",
                    description: ""
                },
                rules: {
                    name: [
                        {required: true, message: '请输入分类名称', trigger: 'blur'}
                    ],
                    icon: [
                        {required: true, message: '请输入分类图标', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入分类描述', trigger: 'blur'}
                    ],
                },
                current: 1,
                size: 10,
                total: 0,
                searchText: "",
                data: [],
                pageData: [
                    {
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
                    }
                ]
            },
            //网址
            link: {
                dialogFormVisible: false,
                // 表单信息
                form: {
                    flId: "",
                    name: "",
                    url: "",
                    logo: "",
                    description: ""
                },
                rules: {
                    flId: [
                        {required: true, message: '请选择所属分类', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入网址名称', trigger: 'blur'}
                    ],
                    url: [
                        {required: true, message: '请输入网址链接', trigger: 'blur'}
                    ],
                    logo: [
                        {required: true, message: '请输入网址logo', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入网址描述', trigger: 'blur'}
                    ],
                },
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
            console.log(key, keyPath);
            this.navType = key;
            switch (key) {
                case 'fl':
                    this.loadFlPageData();
                    break;
                case 'link':
                    this.loadLinkPageData();
                    break;
            }
        },
        loadFlData: function () {
            var _this = this;
            axios.post("fl/list", {}).then(function (res) {
                _this.fl.data = res.data.result;
            }).catch(function (e) {
                _this.$message.error(e.response.data.message);
            });
        },

        loadFlPageData: function () {
            var _this = this;
            var param = {
                current: this.fl.current,
                size: this.fl.size,
                searchText: this.fl.searchText
            };
            axios.post("fl/page", param).then(function (res) {
                _this.fl.pageData = res.data.result.records;
                _this.fl.total = res.data.result.total;
            }).catch(function (e) {
                console.log(e);
                _this.$message.error(e.response.data.message);
            });
        },
        searchFl: function () {
            if (this.fl.searchText == "") {
                this.$message("搜索的内容不能为空");
                return;
            }
            this.fl.current = 1;
            this.fl.size = 10;
            var param = {
                current: this.fl.current,
                size: this.fl.size,
                searchText: this.fl.searchText
            };
            var _this = this;
            axios.post("fl/page", param).then(function (res) {
                _this.fl.PageData = res.data.result.records;
                _this.fl.total = res.data.result.total;
            }).catch(function (e) {
                console.log(e);
                _this.$message.error("获取分类列表失败");
            });
        },

        handleFlAdd: function () {
            this.fl.dialogFormVisible = true;
        },
        handleFlView: function (row) {
            this.$message("查看，开发中...");
        },

        handleFlEdit: function (row) {
            this.$message("编辑，开发中...");
        },
        handleFlDel: function (row) {
            this.$message("删除，开发中...");
        },

        /**
         * 取消
         * @param formName
         */
        cancelFl: function (formName) {
            this.fl.dialogFormVisible = false;
            this.$refs[formName].resetFields();
        },
        /**
         * 保存分类
         * @param formName
         */
        saveFl: function (formName) {
            var _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post("fl", _this.fl.form).then(function (res) {
                        console.log(res);
                        if (res.data.success) {
                            _this.$message({type: 'success', message: "保存成功"});
                        } else {
                            _this.$message.error(res.data.message || "保存失败,请联系管理员!");
                        }
                    }).catch(function (e) {
                        console.log(e);
                        _this.$message.error(e.response.data.message || "保存网址失败,请联系管理员!");
                    });
                } else {
                    console.log('表单校验未通过');
                    return false;
                }
            });
        },
        /**
         * 改变每页显示条数
         * @param val
         */
        handleFlSizeChange: function (val) {
            this.fl.current = 1;
            this.fl.size = val;
            this.loadFlPageData();
        },
        /**
         * 翻页
         * @param val
         */
        handleFlPageChange: function (val) {
            this.fl.current = val;
            this.loadFlPageData();
        },

        loadLinkPageData: function () {
            var _this = this;
            var param = {
                current: this.link.current,
                size: this.link.size,
                searchText: this.link.searchText
            };
            axios.post("link/page", param).then(function (res) {
                _this.link.pageData = res.data.result.records;
                _this.linktotal = res.data.result.total;
            }).catch(function (e) {
                console.log(e);
                _this.$message.error(e.response.data.message || "获取网址列表失败,请联系管理员!");
            });
        },
        searchLink: function () {
            if (this.link.searchText == "") {
                this.$message("搜索的内容不能为空");
                return;
            }
            this.link.current = 1;
            this.link.size = 10;
            var param = {
                current: this.link.current,
                size: this.link.size,
                searchText: this.link.searchText
            };
            var _this = this;
            axios.post("link/page", param).then(function (res) {
                _this.link.data = res.data.result.records;
                _this.link.total = res.data.result.total;
            }).catch(function (e) {
                console.log(e);
                _this.$message.error("获取网址列表失败");
            });
        },
        handleLinkAdd: function (row) {
            this.link.dialogFormVisible = true;
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
         * 保存链接
         * @param formName 表单名称
         */
        saveLink: function (formName) {
            var _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post("link", _this.link.form).then(function (res) {
                        console.log(res);
                        if (res.data.success) {
                            _this.$message({type: 'success', message: res.data.message});
                        } else {
                            _this.$message.error(res.data.message || "保存网址失败,请联系管理员!");
                        }
                    }).catch(function (e) {
                        _this.$message(e.message || "保存网址失败,请联系管理员!");
                    });
                } else {
                    console.log('表单校验未通过');
                    return false;
                }
            });
        },
        /**
         * 改变每页显示条数
         * @param val
         */
        handleLinkSizeChange: function (val) {
            this.link.current = 1;
            this.link.size = val;
            this.loadLinkPageData();
        },
        /**
         * 翻页
         * @param val
         */
        handleLinkPageChange: function (val) {
            this.link.current = val;
            this.loadLinkPageData();
        }

    }
    ,
    created: function () {
        this.loadFlData();
        this.loadFlPageData();
        this.loadLinkPageData();
    }
    ,
    mounted: function () {
        var _this = this;
        window.onresize = function () {
            _this.screenWidth = document.body.clientWidth
        }
    }
})