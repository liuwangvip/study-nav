package com.isoler.studynav.common.security.service;


import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.isoler.studynav.common.security.model.SysUser;
import com.isoler.studynav.common.security.model.eo.UserStatusEnum;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Slf4j
@Service
public class UserAuthorizationService implements UserDetailsService {


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (StringUtils.isBlank(username)) {
            throw new UsernameNotFoundException("用户名不能为空");
        }
        if (!StringUtils.equalsIgnoreCase("admin", username)) {
            throw new UsernameNotFoundException("用户名不存在");
        }
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        final String password = bCryptPasswordEncoder.encode(username);
        SysUser user = new SysUser()
                .setUsername(username)
                .setLoginId(username)
                .setPassword(password)
                .setStatus(UserStatusEnum.NORMAL.getStatus());
        user.setId(IdWorker.get32UUID());
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        return user;
    }
}
