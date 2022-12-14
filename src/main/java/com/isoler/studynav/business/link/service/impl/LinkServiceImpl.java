package com.isoler.studynav.business.link.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.isoler.studynav.business.fl.model.qo.FlQo;
import com.isoler.studynav.business.link.mapper.LinkMapper;
import com.isoler.studynav.business.link.model.bean.Link;
import com.isoler.studynav.business.link.model.qo.LinkPageQo;
import com.isoler.studynav.business.link.model.qo.LinkQo;
import com.isoler.studynav.business.link.service.ILinkService;
import org.apache.commons.lang3.StringUtils;
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
        if (StringUtils.isBlank(link.getId())) {
            link.setXh(IdWorker.getId());
        }
        this.saveOrUpdate(link);
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
        Long tmp = oneFl.getXh();
        oneFl.setXh(otherFl.getXh());
        otherFl.setXh(tmp);
        this.updateById(oneFl);
        this.updateById(otherFl);
    }

    @Override
    public void moveUp(String id) {
        Link one = this.getById(id);
        QueryWrapper<Link> queryWrapper = new QueryWrapper<>();
        queryWrapper.lt("n_order", one.getXh());
        queryWrapper.orderByDesc("n_order");
        List<Link> list = this.list(queryWrapper);
        if (CollectionUtils.isEmpty(list)) {
            return;
        }
        Link two = list.get(0);
        switchXh(one, two);
    }

    @Override
    public void moveDown(String id) {
        Link one = this.getById(id);
        QueryWrapper<Link> queryWrapper = new QueryWrapper<>();
        queryWrapper.gt("n_order", one.getXh());
        queryWrapper.orderByAsc("n_order");
        List<Link> list = this.list(queryWrapper);
        if (CollectionUtils.isEmpty(list)) {
            return;
        }
        Link two = list.get(0);
        switchXh(one, two);
    }

    private void switchXh(Link one, Link two) {
        if (two == null) {
            return;
        }
        Long tmp = one.getXh();
        one.setXh(two.getXh());
        two.setXh(tmp);
        this.updateById(one);
        this.updateById(two);
    }
}
