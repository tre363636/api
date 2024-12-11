//importamos 
const server = require("./src/server");
require("dotenv").config();
//definimos un puerto o 2
const PORT = process.env.PORT || 3000;
//lo ponemos a escuchar
server.listen(PORT, console.log(`Server listened in port ${PORT}`));
