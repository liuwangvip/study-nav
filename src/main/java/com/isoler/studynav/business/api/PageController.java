package com.isoler.studynav.business.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author liuwang
 */
@Controller
public class PageController {
    /**
     * 首页面
     *
     * @return
     */
    @GetMapping({"", "index"})
    public String getIndexPage() {
        return "index";
    }

    /**
     * 后台管理页面
     *
     * @return
     */
    @GetMapping("setting")
    public String getSettingPage() {
        return "setting/setting";
    }


    /**
     * 登录页
     *
     * @return
     */
    @GetMapping("login")
    public String getLoginPage() {
        return "login";
    }

    /**
     * 登录页
     *
     * @return
     */
    @GetMapping("register")
    public String getRegisterPage() {
        return "register";
    }


    @RequestMapping(value = "/ex")
    @ResponseBody
    public String error() {
        int i = 5 / 0;
        return "ex";
    }

}
