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
                //????????????????????????
                .formLogin()
                //?????????????????????
                .successHandler(myAuthenticationSuccessHandler)
                //?????????????????????
                .failureHandler(myAuthenticationFailureHandler)
                //??????????????????
                .loginPage("/login")
                //????????????
                .loginProcessingUrl("/login")
                //????????????????????????
//                .defaultSuccessUrl("/index", true)
                //???????????????????????????405
//                .successForwardUrl("/index")
                .usernameParameter("username")
                .passwordParameter("password")
//                .failureUrl("/login2")
                .permitAll()
                .and()
                //????????????
                .logout()
                .logoutUrl("/logout")
                //????????????????????????
                .logoutSuccessUrl("/login")
                .deleteCookies()
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .permitAll()
                .and()
                // ???????????????
                .rememberMe()
                .rememberMeParameter("rememberMe")
                .rememberMeCookieName("rememberMe")
                //?????????2???????????????
                .tokenValiditySeconds(7 * 24 * 60 * 60)
                .and()
                //??????????????????
                .csrf()
                .disable()
                //?????????????????????????????????????????????????????????
                .sessionManagement()
                .maximumSessions(1);

    }

    @Override
    public void configure(WebSecurity webSecurity) throws Exception {
        //??????????????????
        webSecurity.ignoring().antMatchers("/js/**", "/css/**", "/img/**");
    }

    /**
     * ????????????????????????
     *
     * @return
     */
    @Bean
    HttpSessionEventPublisher httpSessionEventPublisher() {
        return new HttpSessionEventPublisher();
    }

}