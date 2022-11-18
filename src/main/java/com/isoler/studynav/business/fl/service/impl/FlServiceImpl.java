package com.isoler.studynav.business.fl.service.impl;

import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.isoler.studynav.business.fl.mapper.FlMapper;
import com.isoler.studynav.business.fl.model.bean.Fl;
import com.isoler.studynav.business.fl.model.qo.FlPageQo;
import com.isoler.studynav.business.fl.model.qo.FlQo;
import com.isoler.studynav.business.fl.service.IFlService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 网址分类 服务实现类
 * </p>
 *
 * @author AutoGenerated
 * @since 2022-10-08
 */
@Service
public class FlServiceImpl extends ServiceImpl<FlMapper, Fl> implements IFlService {

    @Override
    public List<Fl> listFl(FlQo qo) {
        return baseMapper.listFl(qo);
    }

    @Override
    public List<Fl> listFlRec(FlQo qo) {
        return baseMapper.listFlRec(qo);
    }

    @Override
    public Page<Fl> pageFl(FlPageQo qo) {
        Page<Fl> page = new Page<>(qo.getCurrent(), qo.getSize());
        FlQo params = new FlQo();
        BeanUtils.copyProperties(qo, params);
        page.setRecords(baseMapper.listFl(page, params));
        return page;
    }

    @Override
    public Fl saveOrUpdateFl(Fl fl) {
        if (StringUtils.isBlank(fl.getId())) {
            fl.setXh(IdWorker.getId());
        }
        this.saveOrUpdate(fl);
        return fl;
    }

    @Override
    public void deleteFlById(String id) {
        this.removeById(id);
    }

    @Override
    public void switchXh(String one, String other) {
        Fl oneFl = this.getById(one);
        Fl otherFl = this.getById(other);
        Long tmp = oneFl.getXh();
        oneFl.setXh(otherFl.getXh());
        otherFl.setXh(tmp);
        this.updateById(oneFl);
        this.updateById(otherFl);
    }
}
