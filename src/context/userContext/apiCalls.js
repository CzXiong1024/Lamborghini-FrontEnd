import axios from 'axios';
import { 
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  getUsersFailure, 
  getUsersStart, 
  getUsersSuccess 
} from './UserActions';

// GET USERS
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart())
  try {
    const res = await axios.get('https://infsci2560-final-lambo-server.glitch.me/api/users', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    dispatch(getUsersFailure())
  }
}

// UPDATE USER
export const updateUser = async (user, dispatch) => {
  dispatch(updateUserStart())
  try {
    const res = await axios.put(`https://infsci2560-final-lambo-server.glitch.me/api/users/update/${user.id}`, user, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    console.log(res.data)
    dispatch(updateUserSuccess(res.data))
  } catch (error) {
    dispatch(updateUserFailure())
  }
}

// DELETE USERS
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart())
  try {
    await axios.delete(`https://infsci2560-final-lambo-server.glitch.me/api/users/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteUserSuccess(id))
  } catch (error) {
    dispatch(deleteUserFailure())
  }
}