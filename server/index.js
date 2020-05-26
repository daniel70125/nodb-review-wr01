let express = require('express');
let app = express();
const SERVER_PORT = 4000;
let ctrl = require('./controllers/one')
app.use(express.json());

app.get('/api/items', ctrl.getUsers);
app.post('/api/items', ctrl.postUser);
app.put('/api/items/:id', ctrl.updateUser);
app.delete('/api/items/:id', ctrl.deleteUser);



app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`)
)