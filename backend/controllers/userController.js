import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc Authe user and send back data (toke n to save on client access protect routes)
// @route POST /api/users/login 
// @access Public 
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password.')
  }
})

export { authUser }