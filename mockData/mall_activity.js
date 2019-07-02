//活动产品
            /**
             *  
             *              * id 主键 
             * pro_id 商品ID 
             * pro_sku_id 商品规格ID 
             * title 活动宝贝标题 
             * act_money 活动价 
             * is_xg 是否限购（0:不限购 1 限购） 
             * xg_num 限购数量 
             * act_num 活动数量 
             * start_date 开始时间 
             * end_date 结束时间 
             * sort 排序 
             * create_date 创建时间 
             * update_date 更新时间 
             * create_user 创建人 
             * update_user 更新人 
             * pav_id 区域管ID 
             * pav_code 区域馆编码 
             * enabled 是否删除（0：正常 1：删除） 
             * state 活动状态（0：未上架，1：已上架，2：下架） 

             * @param {*} table
             * @returns
             */
            function init() {
                return {id:'id',proId:'proId',proSkuId:'proSkuId',title:'title',actMoney:'actMoney',isXg:'isXg',xgNum:'xgNum',actNum:'actNum',startDate:'startDate',endDate:'endDate',sort:'sort',createDate:'createDate',updateDate:'updateDate',createUser:'createUser',updateUser:'updateUser',pavId:'pavId',pavCode:'pavCode',enabled:'enabled',state:'state',}
            }
    
export default {
init
}