package com.isoler.studynav.business.fl.model.qo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * description
 *
 * @author liuwang
 * @Date 2022-10-10
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value = "Fl分页查询对象", description = "Fl分页查询对象")
public class FlPageQo implements Serializable {
    @ApiModelProperty(name = "搜索")
    private String searchText;

    @ApiModelProperty(name = "每页显示的条数")
    private long size = 10;

    /**
     * 当前页
     */
    @ApiModelProperty(name = "页码")
    private long current = 1;
}
