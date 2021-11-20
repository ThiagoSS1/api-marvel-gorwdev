import express from "express";
import cors from "cors"
import routes from "./routes";
import 'dotenv/config'


const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000

//const users: Array<any> = []

app.use(routes)

app.listen(port, () => {
    console.log(`Servidor rodando na Porta:${port}`)
})

app.get('/', (req, res) => {
    return res.json({message: "ok"})
})

