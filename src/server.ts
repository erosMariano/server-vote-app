import cors from "cors"
import mongoose from "mongoose"
import express from "express"
import { voteRouter } from "./routes/votes.routes";
require("dotenv").config()

const app = express();
app.use(express.json())
app.use(cors())


app.use(voteRouter)


//Rotas da API

mongoose.connect(process.env.DATABASE_URL as string)
    .then(() => {
        app.listen(process.env.PORT || 3333, () => {
            console.log('HTTP listening')
        })
    })
    .catch((err) => {
        console.log(err)
    })

