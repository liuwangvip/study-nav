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
        search: function () {

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