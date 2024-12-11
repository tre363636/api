const getAllUsersHandler = (req, res) => {
  const { name } = req.query;
  console.log(name);
    res.send("Estos son los usuarios");
  }
const getOneHandler = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send(`Este es el detalle de un usuario con id ${id}`);
  };
const createUserHandler = (req, res) => {
  const { id, name, username, email } = req.body;//trae del body la informacion
  res.send(`El user con ${id} y nombre ${name} fue creado con el username ${username} y su correo es ${email}`);
  }  

const updateUserHandler = (req, res) => {
    res.send("Modificando un usuario");
}   
const deleteUserHandler = (req, res) => {
    res.send("Eliminando un usuario");
}

module.exports = {
    getAllUsersHandler,
    getOneHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
  };