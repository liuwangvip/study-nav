package com.isoler.studynav.business.link.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.isoler.studynav.business.fl.model.bean.Fl;
import com.isoler.studynav.business.fl.model.qo.FlPageQo;
import com.isoler.studynav.business.fl.model.qo.FlQo;
import com.isoler.studynav.business.link.model.bean.Link;
import com.baomidou.mybatisplus.extension.service.IService;
import com.isoler.studynav.business.link.model.qo.LinkPageQo;
import com.isoler.studynav.business.link.model.qo.LinkQo;

import java.util.List;

/**
 * <p>
 * 网址链接 服务类
 * </p>
 *
 * @author AutoGenerated
 * @since 2022-10-08
 */
public interface ILinkService extends IService<Link> {

    /**
     * 获取分类列表
     *
     * @param qo
     * @return
     */
    List<Link> listLink(LinkQo qo);



    /**
     * 获取分类列表-分页
     *
     * @param qo
     * @return
     */
    Page<Link> pageLink(LinkPageQo qo);

    /**
     * 保存或者更新分类
     *
     * @param link
     * @return
     */
    Link saveOrUpdateLink(Link link);

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

}
