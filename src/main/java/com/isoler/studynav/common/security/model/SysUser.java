package com.isoler.studynav.common.security.model;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.isoler.studynav.common.model.bean.BaseEntity;
import com.isoler.studynav.common.security.model.eo.UserStatusEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

/**
 * <p>
 * 系统用户表
 * </p>
 *
 * @author AutoGenerated
 * @since 2022-07-28
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("db_chat.t_sys_user")
@ApiModel(value = "SysUser对象", description = "系统用户表")
public class SysUser extends BaseEntity implements UserDetails {


    @ApiModelProperty(value = "登录id")
    @TableField("c_login_id")
    private String loginId;

    @ApiModelProperty(value = "用户名")
    @TableField("c_username")
    private String username;

    @ApiModelProperty(value = "密码")
    @TableField("c_password")
    private String password;

    @ApiModelProperty(value = "状态")
    @TableField("c_status")
    private String status;

    @ApiModelProperty(value = "在线状态")
    @TableField("c_online_status")
    private String onlineStatus;

    @TableField(exist = false)
    private List<SimpleGrantedAuthority> authorityList;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.getAuthorityList();
    }

    /**
     * 账户是否没有过期
     *
     * @return
     */
    @Override
    public boolean isAccountNonExpired() {
        return UserStatusEnum.NORMAL.getStatus().equals(this.getStatus());
    }

    /**
     * 账户是否没有被锁定
     *
     * @return
     */
    @Override
    public boolean isAccountNonLocked() {
        return UserStatusEnum.NORMAL.getStatus().equals(this.getStatus());
    }

    /**
     * 用户证书是否没有过期
     *
     * @return
     */
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * Indicates whether the user is enabled or disabled. A disabled user cannot be
     * authenticated.
     *
     * @return <code>true</code> if the user is enabled, <code>false</code> otherwise
     */
    @Override
    public boolean isEnabled() {
        return UserStatusEnum.NORMAL.getStatus().equals(this.getStatus());
    }
}