package com.isoler.studynav.business.link.model.qo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
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
@ApiModel(value = "link查询对象", description = "link查询对象")
public class LinkQo implements Serializable {

    @ApiModelProperty(name = "搜索", required = true)
    private String searchText;
}
