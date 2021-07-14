import { User } from "../config/models";

export const registerUser = async(req, res) => {

  const { fname, lname, phoneNo, email, curriculum } = req.body;
  const checkEmail = email.toLowerCase()
  const addUser = new User({
    fname, lname, phoneNo, email: checkEmail, curriculum
  })

  try {
    const result =  await addUser.save()
    return res.status(200).send({
      status: 200,
      message: 'success',
      data: result
    })
    
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: 'Bad Request',
      error: error.message
    })
  }
  
  
 }
export const getUser = async(req, res) => {
  try {
    const result = await User.find()
    return res.status(200).send({
      status: 200,
      message: 'success',
      data: result
    })
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: 'Bad Request',
      error: error.message
    })
  }
 }