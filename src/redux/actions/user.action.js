// THIS IS AN ACTION EXAMPLE

// import actionTypes from "../actionTypes";
// import userService from "../../services/user.service";

// const loadUserProfile = () => async (dispatch) => {
//   try {
//     const user = await userService.getUser();
//     dispatch({
//       type: actionTypes.USER.SET_USER,
//       payload: user,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch(logoutUser());
//   }
// };

// const logoutUser = () => async (dispatch) => {
//   try {
//     localStorage.removeItem("USER_TOKEN");
//     dispatch({
//       type: actionTypes.USER.REMOVE_USER,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default {
//   loadUserProfile,
//   logoutUser,
// };
