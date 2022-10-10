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
    computed: {},

    methods: {
        /**
         * 展开/收起
         */
        changeCollapse: function () {
            this.isCollapse = !this.isCollapse;
        },
        handleSelect(key, keyPath) {
            this.navType = key;
            console.log(key);
        },
        showMore: function () {
            this.showMoreDialog = !this.showMoreDialog;
        },
        /**
         * 获取分类列表
         */
        loadFlData: function () {
            var _this = this;
            axios.post("fl/all", {}).then(function (res) {
                _this.fl.data = res.data.result;
            }).catch(function (e) {
                console.log("获取分类列表失败", e);
                _this.$message.error(e.response.data.message || "获取分类列表失败");
            });
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
        // this.loadFlData();
    },
    mounted: function () {
        var _this = this;
        this.timedUpdate();
        window.onresize = function () {
            _this.screenWidth = document.body.clientWidth
        }
    }
})