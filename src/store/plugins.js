import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
  store.subscribe((mutation, { books }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  })
}
export default [localStoragePlugin]