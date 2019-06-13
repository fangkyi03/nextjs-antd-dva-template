function test(target) {
    function getList(paramsData = {}) {
        return (info) => {
            return { target, isUrl: true, method: 'GET', url: '/sug?code=utf-8&q=1', params: { ...paramsData }, ...info }
        }
    }
    return { getList}
}

export default {
    test
}