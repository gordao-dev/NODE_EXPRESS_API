import { v4 as uuid4 } from 'uuid';


let users = []; 

// To see the list of users

export const getUsers  = (req, res) => {
    res.send(users);
}

// create a user

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuid4() });

    res.send(`User with the name ${user.firstName} added to the database!`);

}

// user information using id

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

// delete the user indicated by the id.

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} delected from database.`)

}

// Modify information for a specific user.

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
}