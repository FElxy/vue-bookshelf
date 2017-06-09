import * as types from './types'
import { jsonp } from '@/util/jsonp'

export const searchBook = ({ commit, state }, obj) => {

    let total = state.total,
        count = state.searchList.length

    if (count < total || total == -1) {
    	commit(types.SET_TARGET_VAL, {key: 'isLoading', val: true})
        jsonp('https://api.douban.com/v2/book/search', obj.form, (err, data) => {
            if (err) {
                throw new Error('error')
            }
            console.log(data)
            commit(types.SET_SEARCH_BOOK, Object.assign(data, { isReset: obj.isReset }))
            commit(types.SET_TARGET_VAL, {key: 'isLoading', val: false})
        })

    }else{
    	commit(types.SET_TARGET_VAL, {key: 'isMoreData', val: true})
    	commit(types.SET_TARGET_VAL, {key: 'isLoading', val: false})
    }


}

export const fetchBookById = ({ commit }, id) => {
    console.log(id)
    jsonp(`https://api.douban.com/v2/book/${id}`, (err, data) => {
        if (err) {
            throw new Error('error')
        }
        console.log(data)
        commit(types.SET_BOOK_DETAIL, data)
    })
}
