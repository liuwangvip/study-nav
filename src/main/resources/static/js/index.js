var vm = new Vue({
    el: '#app',
    data: function () {
        return {
            leftNav: {
                // 是否持续展开
                isExpand: [0, 0],
                activeIndex: 0,
                sidebar: {},
                menulist: {},
                listItems: {}
            },

            screenWidth: document.body.clientWidth,
            timer: false,
            collapseClazz: 'el-icon-d-arrow-left',
            showMoreDialog: false,
            searchText: "",
            searchMoreText: "",
            navType: "",
            fl: {
                data: [
                    {
                        name: "开发环境", icon: "el-icon-menu",
                        links: [
                            {
                                name: "文件服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "转换服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                        ]
                    },
                    {
                        name: "测试环境", icon: "el-icon-menu",
                        links: [
                            {
                                name: "文件服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "转换服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                        ]
                    },
                    {
                        name: "仿真环境", icon: "el-icon-menu",
                        links: [
                            {
                                name: "文件服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "转换服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                        ]
                    },
                    {
                        name: "正式环境", icon: "el-icon-menu",
                        links: [
                            {
                                name: "文件服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "文件服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/feature.png"
                            },
                            {
                                name: "转换服务1", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务2", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务3", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                            {
                                name: "转换服务4", description: "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqube\n" +
                                    "文件服务-转换服务-sonarqubev文件服务-", logo: "img/logos/develop.png"
                            },
                        ]
                    }
                ]
            },
            link: {
                data: []
            },
            onlineList: []
        }
    },
    computed: {},

    methods: {
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
        /**
         * 选择菜单
         */
        selectMenu: function (i) {
            for (let index = 0; index < this.leftNav.listItems.length; index++) {
                this.leftNav.listItems[index].classList.remove('is-selected')
            }
            this.leftNav.listItems[i].classList.add('is-selected')
        },
        showMore: function () {
            this.showMoreDialog = !this.showMoreDialog;
        },
        /**
         * 访问链接
         * @param url
         */
        visitLink: function (url) {
            if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
                window.open(url, '_blank');
                return;
            }
            window.open("http://" + url, '_blank');
        },
        /**
         * 获取分类列表
         */
        loadFlData: function () {
            var _this = this;
            axios.post("fl/all", {}).then(function (res) {
                _this.fl.data = res.data.result;
                _this.reloadListItem();
            }).catch(function (e) {
                console.log("获取分类列表失败", e);
                _this.$message.error(e.response.data.message || "获取分类列表失败");
            });
        },
        reloadListItem: function () {
            var _this = this;
            this.$nextTick(() => {
                _this.leftNav.listItems = document.querySelectorAll('.menu-list-item')
            }, 400);
        },
        search: function () {

        },
        searchMore: function () {

        },
        timedUpdate: function () {
            this.updateClock();
            // this.updateSnippets();
            setTimeout(this.timedUpdate, 1000);
        },
        updateClock: function () {
            var now = moment(),
                second = now.seconds() * 6,
                minute = now.minutes() * 6 + second / 60,
                hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
            this.$refs.hour.style.transform = "rotate(" + hour + "deg)"
            this.$refs.minute.style.transform = "rotate(" + minute + "deg)"
            this.$refs.second.style.transform = "rotate(" + second + "deg)"
        }
    },
    created: function () {
        this.loadFlData();
    },
    mounted: function () {
        var _this = this;
        this.timedUpdate();
        this.leftNav.sidebar = document.querySelectorAll('.sidebar')
        this.leftNav.menulist = document.querySelectorAll('.menu-list')
        this.leftNav.listItems = document.querySelectorAll('.menu-list-item')
        window.onresize = function () {
            _this.screenWidth = document.body.clientWidth
        }
    }
})