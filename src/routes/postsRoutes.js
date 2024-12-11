const {Router} = require ("express");
const postsRouter = Router();

//Ruta Posts
postsRouter.get("/", (req, res) => {
    res.send("Estos son los posteos");
  });
  postsRouter.get("/:id", (req, res) => {
    res.send("Este es un post");
  });
  postsRouter.post("/", (req, res) => {
    res.send("Creo un post");
  });
  postsRouter.put("/:id", (req, res) => {
    res.send("Actualizo un posteo");
  });
  postsRouter.delete("/:id", (req, res) => {
    res.send("Elimino un posteo");
  });

  module.exports = postsRouter; 