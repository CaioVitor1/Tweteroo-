import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const username = ""
const picture = ""
let contents = ""
const everyUsers = [];
const tweets = [];

const message = {
	username,
        tweet: contents,
}

app.post("/sign-up", (req, res) => { 
       everyUsers.push(req.body)
       res.send("Ok")
});


app.listen(5000);