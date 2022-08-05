import express from 'express';


import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/users.js';


const router = express.Router();



router.get('/', getUsers);

// Create the route to see all registered users.

router.post('/', createUser);

// Create the route to create a user.

router.get('/:id', getUser)

// Creates the route to see the information of a specific user.

router.delete('/:id', deleteUser)

// Create the route to delete a specific user.

router.patch('/:id', updateUser)

// Create the route to the user. ex: 'age'

export default router;