var vm = new Vue({
    el: '#app',
    data: function () {
        return {
            leftNav: {
                // 是否持续展开
                isExpand: [0, 0],
                activeIndex: 'fl',
                sidebar: {},
                menulist: {},
                listItems: {}
            },
            searchText: "",
            operateType: 'view',
            //分类
            fl: {
                dialogFormVisible: false,
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
                pageData: []
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
                data: [],
                pageData: []
            }
        }
    },
    methods: {
        returnIndex: function () {
            window.location.href = "index";
        },
        /**
         * 鼠标移入
         */
        sidebarMouseEnter: function () {
            this.leftNav.menulist[0].style.overflowY = 'scroll'
        },
        /**
         * 鼠标移出
         */
        sidebarMouseLeave: function () {
            this.leftNav.menulist[0].style.overflowY = 'hidden'
        },
        /**
         * 鼠标移入菜单
         * @param e
         */
        menuMouseEnter: function (e) {
            if (0 == this.leftNav.isExpand[0] && !this.leftNav.sidebar[0].classList.contains('is-expanded')) {
                this.leftNav.sidebar[0].classList.add('is-expanded')
            }
        },
        /**
         * 鼠标移出菜单
         * @param e
         */
        menuMouseLeave: function (e) {
            if (0 == this.leftNav.isExpand[0] && this.leftNav.sidebar[0].classList.contains('is-expanded')) {
                this.leftNav.sidebar[0].classList.remove('is-expanded')
            }
        },
        /**
         * 展开/收缩导航栏按钮
         * @param e
         */
        toggleLeftNav: function (e) {
            if (0 == this.leftNav.isExpand[0]) {
                this.leftNav.isExpand[0] = 1
            } else {
                this.leftNav.isExpand[0] = 0
            }
            this.leftNav.sidebar[0].classList.toggle('is-expanded')
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
            if (this.fl.searchText === "") {
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
            this.fl.form = {};
            this.operateType = 'add';
        },
        handleFlView: function (row) {
            this.fl.dialogFormVisible = true;
            this.operateType = 'view';
            this.fl.form = row;
        },

        handleFlEdit: function (row) {
            this.operateType = 'edit';
            this.fl.dialogFormVisible = true;
            this.fl.form = row;
        },
        handleFlDel: function (row) {
            var _this = this;
            axios.delete("fl/" + row.id).then(function (res) {
                if (res.data.success) {
                    _this.$message({message: "删除成功", type: 'success'});
                    _this.loadFlPageData();
                } else {
                    _this.$message.error(res.data.message || "删除失败,请联系管理员!");
                }
            }).catch(function (e) {
                _this.$message(e.message || "删除失败,请联系管理员!");
            });
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
                            _this.fl.dialogFormVisible = false;
                            _this.$message({type: 'success', message: "保存成功"});
                            _this.loadFlPageData();
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
                _this.link.total = res.data.result.total;
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
            this.link.form = {};
            this.operateType = 'add';
        },
        handleLinkView: function (row) {
            this.link.dialogFormVisible = true;
            this.operateType = 'view';
            this.link.form = row;
        },
        handleLinkEdit: function (row) {
            this.operateType = 'edit';
            this.link.dialogFormVisible = true;
            this.link.form = row;
        },
        handleLinkDel: function (row) {
            var _this = this;
            axios.delete("link/" + row.id).then(function (res) {
                if (res.data.success) {
                    _this.$message({message: "删除成功", type: 'success'});
                    _this.loadLinkPageData();
                } else {
                    _this.$message.error(res.data.message || "删除失败,请联系管理员!");
                }
            }).catch(function (e) {
                _this.$message(e.message || "删除失败,请联系管理员!");
            });
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
                            _this.link.dialogFormVisible = false;
                            _this.$message({type: 'success', message: "保存成功"});
                            _this.loadLinkPageData();
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
        this.leftNav.sidebar = document.querySelectorAll('.sidebar')
        this.leftNav.menulist = document.querySelectorAll('.menu-list')
        this.leftNav.listItems = document.querySelectorAll('.menu-list-item')
        window.onresize = function () {
            _this.screenWidth = document.body.clientWidth
        }
    }
})