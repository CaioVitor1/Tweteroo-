import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const everyUser = [];
const tweets = [];

const lastTweets = function() {
        for(let i = 0; i < tweets.length; i++) {
                if(tweets.length < 10) {
                        for (let i of tweets){
                                i.avatar = everyUser.find(user => user.username === i.username).avatar
                                return tweets
                                    }
               } else {
                        const lasts = tweets.slice(0,10);
                for (let i of lasts){
                        i.avatar = everyUser.find(user => user.username === i.username).avatar
                        return lasts
                        }
                        }    
         }
}
app.post("/sign-up", (req, res) => { 
        const {username, avatar} = req.body
        if(!username || !avatar) {
                res.status(400).send("Todos os campos são obrigatórios!");
                return
        } else{
                everyUser.push(req.body)
                res.send("OK")
        }
        
});

app.post("/tweets", (req, res) => { 
        const {username, tweet} = req.body
        if(!username || !tweet) {
                res.status(400).send("Todos os campos são obrigatórios!");
                return
        } else {
                tweets.unshift(req.body)
                res.send("Ok")
        }
 });
 app.get("/tweets", (req, res) => { 
         
        res.send(lastTweets())
 });

app.listen(5000);