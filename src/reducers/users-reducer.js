const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


let initialState = {
  users: [],
  pageSize: 5,
  count: 18,
  currentPage: 1

}

const usersReducer = (state = initialState, action) => {

}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (userId) => ({type: SET_USERS, userId})

export default usersReducer()