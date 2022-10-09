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
        }
        ,
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        }
        ,
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        showMore: function () {
            this.showMoreDialog = !this.showMoreDialog;
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
    }
    ,
    created: function () {

    }
    ,
    mounted: function () {
        var _this = this;
        this.timedUpdate();
        window.onresize = function () {
            _this.screenWidth = document.body.clientWidth
        }
    }
})