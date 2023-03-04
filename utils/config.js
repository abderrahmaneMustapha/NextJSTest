const itemsPerPage = parseInt(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE  || "25") 
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com"

export { itemsPerPage, apiUrl }

export default Object.freeze({
  itemsPerPage,
  apiUrl
})