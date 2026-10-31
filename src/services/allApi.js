import apiService from "../api/apiService"

//register :auth component when click register button
export const registerAPI = async (userData) => {
    return await apiService("POST", "/register", userData)
}

//login :auth component when click login button
export const loginAPI = async (userData) => {
    return await apiService("POST", "/login", userData)
}

//google-login api : auth component when clicking on google login button
export const googleLoginAPI = async (userData) => {
    return await apiService("POST", "/google-login", userData)
}

//edit user api :edit compontent when cliking on edit button
export const userUpdateAPI = async (userId, userData) => {
    return await apiService("PUT", `/user/${userId}`, userData)
}

//add book api: uploadBook component when clicking on add button
export const addBookAPI = async (bookDetails) => {
    return await apiService("POST", `/book`, bookDetails)
}

//get home book api: home component when page load
export const getHomeBooksAPI = async () => {
    return await apiService("GET", `/home-book`, {})
}

//get all book api: book component when page load
export const getAllBooksAPI = async (searchKey) => {
    return await apiService("GET", `/all-books?search=${searchKey}`, {})
}

//get user book api: book status component when its open
export const getUserBooksAPI = async () => {
    return await apiService("GET", `/user-books`, {})
}

//get brought home book api: book component when its open
export const getBroughtBooksAPI = async () => {
    return await apiService("GET", `/brought-books`, {})
}

//delete user upload book api:book status component when click on delete button
export const deleteUserBookAPI = async (bookId) => {
    return await apiService("DELETE", `/book/${bookId}`, {})
}

//view book api
export const viewBookAPI=async(id)=>{
    return await apiService("GET",`/view-book/${id}`,{})
}

//buy book
export const buyBookAPI=async(id)=>{
    return await apiService("PUT",`/books/${id}/buy`,{})
}

//edit admin api :edit admin setting compontent when cliking on edit button
export const adminUpdateAPI = async (adminId, adminData) => {
    return await apiService("PUT", `/admin/${adminId}`, adminData)
}

//get all user api : 
export const userListAPI = async () => {
    return await apiService("GET", `/user-list`, {})
}

//get all book api : admin resource component
export const bookListAPI = async () => {
    return await apiService("GET", `/book-list`, {})
}

//get book status api : admin resource component
export const editBookStatusAPI = async (id) => {
    return await apiService("PUT", `/book/${id}`, {})
}

//get book details from api
export const getBookDetailsAPI = async (title) => {
    return await apiService("POST", `/book-ai`, {title})
}