import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
const state = {
  posts: [
    {id: 1, message: 'Hay how are you?', like: 'Good', count: 2},
    {id: 2, message: 'Hay', like: 'Good', count: 5},
  ]
}
it('length of post should be incremented', () => {
  // 1.test data
  // 2. action
  let action = addPostActionCreator("How are you?")
  let newState = profileReducer(state, action )
  // 3. expectation
  expect(newState.posts.length).toBe(3)
});
it('message of new post should be correct', () => {
  // 1.test data
  // 2. action
  let action = addPostActionCreator("How are you?")
  let newState = profileReducer(state, action )
  // 3. expectation
  expect(newState.posts[2].message).toBe("How are you?")
});
it('after deleting length of posts should be decrement', () => {
  // 1.test data
  // 2. action
  let action = deletePost(1)
  let newState = profileReducer(state, action )
  // 3. expectation
  expect(newState.posts.length).toBe(1)
});
it('after deleting length of posts should not be decrement', () => {
  // 1.test data
  // 2. action
  let action = deletePost(10)
  let newState = profileReducer(state, action )
  // 3. expectation
  expect(newState.posts.length).toBe(2)
});
