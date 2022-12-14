package com.isoler.studynav.business.fl.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.isoler.studynav.business.fl.model.bean.Fl;
import com.isoler.studynav.business.fl.model.qo.FlPageQo;
import com.isoler.studynav.business.fl.model.qo.FlQo;

import java.util.List;

/**
 * <p>
 * 网址分类 服务类
 * </p>
 *
 * @author AutoGenerated
 * @since 2022-10-08
 */
public interface IFlService extends IService<Fl> {

    /**
     * 获取分类列表
     *
     * @param qo
     * @return
     */
    List<Fl> listFl(FlQo qo);


    /**
     * 获取分类列表
     *
     * @param qo
     * @return
     */
    List<Fl> listFlRec(FlQo qo);

    /**
     * 获取分类列表-分页
     *
     * @param qo
     * @return
     */
    Page<Fl> pageFl(FlPageQo qo);

    /**
     * 保存或者更新分类
     *
     * @param fl
     * @return
     */
    Fl saveOrUpdateFl(Fl fl);

    /**
     * 删除分类
     *
     * @param id
     */
    void deleteFlById(String id);

    /**
     * 交互顺序
     *
     * @param one
     * @param other
     */
    void switchXh(String one, String other);

    /**
     * 上移
     * @param id
     */
    void moveUp(String id);

    /**
     * 下移
     * @param id
     */
    void moveDown(String id);

}
