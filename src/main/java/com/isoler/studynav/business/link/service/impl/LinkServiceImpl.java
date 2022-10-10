package com.isoler.studynav.business.link.service.impl;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.isoler.studynav.business.fl.model.qo.FlQo;
import com.isoler.studynav.business.link.mapper.LinkMapper;
import com.isoler.studynav.business.link.model.bean.Link;
import com.isoler.studynav.business.link.model.qo.LinkPageQo;
import com.isoler.studynav.business.link.model.qo.LinkQo;
import com.isoler.studynav.business.link.service.ILinkService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 网址链接 服务实现类
 * </p>
 *
 * @author AutoGenerated
 * @since 2022-10-08
 */
@Service
public class LinkServiceImpl extends ServiceImpl<LinkMapper, Link> implements ILinkService {

    @Override
    public List<Link> listLink(LinkQo qo) {
        return baseMapper.listLink(qo);
    }

    @Override
    public Page<Link> pageLink(LinkPageQo qo) {
        Page<Link> page = new Page<>(qo.getCurrent(), qo.getSize());
        FlQo params = new FlQo();
        BeanUtils.copyProperties(qo, params);
        page.setRecords(baseMapper.listLink(page, params));
        return page;
    }

    @Override
    public Link saveOrUpdateLink(Link link) {
        this.saveOrUpdate(link);
        baseMapper.updateMaxXh(link.getId());
        return link;
    }

    @Override
    public void deleteFlById(String id) {
        this.removeById(id);
    }

    @Override
    public void switchXh(String one, String other) {
        Link oneFl = this.getById(one);
        Link otherFl = this.getById(other);
        Integer tmp = oneFl.getXh();
        oneFl.setXh(otherFl.getXh());
        otherFl.setXh(tmp);
        this.updateById(oneFl);
        this.updateById(otherFl);
    }
}
