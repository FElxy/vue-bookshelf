import * as types from './types'
import { jsonp } from '@/util/jsonp'

export const searchBook = ({ commit }, obj) => {
    
    jsonp('https://api.douban.com/v2/book/search', obj.form, (err, data) => {
    	if (err) {
    		throw new Error('error')
    	}
        console.log(data)
        commit(types.SET_SEARCH_BOOK, Object.assign(data, {isReset: obj.isReset}))
    })
}

export const fetchBookById = ({commit}, id) => {
	console.log(id)
	jsonp(`https://api.douban.com/v2/book/${id}`, (err, data) => {
		if (err) {
			throw new Error('error')
		}
	    console.log(data)
	    commit(types.SET_BOOK_DETAIL, data)
	})
}
