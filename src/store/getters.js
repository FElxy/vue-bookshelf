export const isOnShelf = state => {
	return state.books.indexOf(state.bookDetail) !== -1
}