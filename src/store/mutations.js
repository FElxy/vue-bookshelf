import * as types from './types'

export const STORAGE_KEY = 'vuejs-bookshelf'

export const state = {

	books: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
	searchList: [],
	bookDetail: {},
	currentPage: 0,
	total: -1

}

export const mutations =  {

	[types.ADD_BOOK](state, obj){
		console.log(obj)
		if (state.books.indexOf(obj) == -1) {
			state.books.push(obj)
		}
		
	},

	[types.DELETE_BOOK](state, {book}){
		state.books.splice(state.books.indexOf(book), 1)
	},

	[types.SET_SEARCH_BOOK](state, obj){
		
		console.log(obj)
		if(true){
			if (obj.isReset) {
				state.searchList = []
			}
			state.searchList = state.searchList.concat(obj.books)

			state.total = obj.total

			state.currentPage = obj.start			
		}

		console.log(state.searchList)
	},

	[types.SET_BOOK_DETAIL](state, obj){
		state.bookDetail = obj
	}


}