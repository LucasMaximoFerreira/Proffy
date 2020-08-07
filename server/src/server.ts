import express from 'express';
import cors from 'cors';
import routes from './routes';


// get : buscar ou listar uma informacao 
// post: criar alguma nova informacao
// put: atualizar uma informacao existente
// delete: deletar uma informacao existente

// corpo (request body): dados para criacao ou atualizacao de um registro
// route params: identificar qual recurso eu quero atualizar ou deletar
// query params

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);