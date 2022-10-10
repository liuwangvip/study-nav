package com.isoler.studynav.business.fl.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.isoler.studynav.business.fl.model.bean.Fl;
import com.isoler.studynav.business.fl.model.qo.FlQo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 * 网址分类 Mapper 接口
 * </p>
 *
 * @author AutoGenerated
 * @since 2022-10-08
 */
public interface FlMapper extends BaseMapper<Fl> {
    /**
     * 获取分类列表
     *
     * @param qo
     * @return
     */
    List<Fl> listFl(FlQo qo);

    /**
     * 获取分类列表-分页
     *
     * @param qo
     * @return
     */
    List<Fl> listFl(IPage<Fl> page, @Param("qo") FlQo qo);

    /**
     * 获取分类列表-递归
     *
     * @param qo
     * @return
     */
    List<Fl> listFlRec(@Param("qo") FlQo qo);

    /**
     * 设置最大序号
     *
     * @param id
     */
    void updateMaxXh(@Param("id") String id);

}
