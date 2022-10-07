package com.isoler.studynav.common.security;

import com.isoler.studynav.common.handler.MyAuthenticationFailureHandler;
import com.isoler.studynav.common.handler.MyAuthenticationSuccessHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.session.HttpSessionEventPublisher;

import javax.annotation.Resource;

/**
 * @author liuwang
 * @Date 2022-10-01
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Resource
    private UserDetailsService userService;

    @Resource
    private MyAuthenticationFailureHandler myAuthenticationFailureHandler;

    @Resource
    private MyAuthenticationSuccessHandler myAuthenticationSuccessHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {


        http.authorizeRequests()
                .antMatchers("/login", "/register", "/user/register", "/error")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                //配置自定义登录页
                .formLogin()
                //登录成功处理器
                .successHandler(myAuthenticationSuccessHandler)
                //登录失败处理器
                .failureHandler(myAuthenticationFailureHandler)
                //配置登录页面
                .loginPage("/login")
                //登录请求
                .loginProcessingUrl("/login")
                //登录成功跳转页面
//                .defaultSuccessUrl("/index", true)
                //设置这个参数会出现405
//                .successForwardUrl("/index")
                .usernameParameter("username")
                .passwordParameter("password")
//                .failureUrl("/login2")
                .permitAll()
                .and()
                //配置注销
                .logout()
                .logoutUrl("/logout")
                //注销成功跳转页面
                .logoutSuccessUrl("/login")
                .deleteCookies()
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .permitAll()
                .and()
                // 记住我功能
                .rememberMe()
                .rememberMeParameter("rememberMe")
                .rememberMeCookieName("rememberMe")
                //默认室2周不用登录
                .tokenValiditySeconds(7 * 24 * 60 * 60)
                .and()
                //禁用跨域保护
                .csrf()
                .disable()
                //防止重复登录，设置最多同时只有一个会话
                .sessionManagement()
                .maximumSessions(1);

    }

    @Override
    public void configure(WebSecurity webSecurity) throws Exception {
        //忽略静态资源
        webSecurity.ignoring().antMatchers("/js/**", "/css/**", "/img/**");
    }

    /**
     * 防止重复登录配置
     *
     * @return
     */
    @Bean
    HttpSessionEventPublisher httpSessionEventPublisher() {
        return new HttpSessionEventPublisher();
    }

}