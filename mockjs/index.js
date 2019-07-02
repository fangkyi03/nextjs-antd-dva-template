var Mock = require('mockjs')
const A = require('../mockData/mall_activity').default.init()

export const getData = function getDataa(data) {
    return Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list1|10': [
            {
                [A.id]: '1231231',
                [A.title]:'xxxxx',
            }
        ]
    })
}


export const getTestData = function getTestData({ params }) {
    return Mock.mock({
        'list2|10':[
            {
                [A.id]: params.a,
                [A.title]: params.b
            }
        ]
    })
}