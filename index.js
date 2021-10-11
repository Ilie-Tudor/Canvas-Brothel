const PORT = process.env.PORT || 5000;
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set("views", path.join(__dirname,'views'));
app.use(express.static("./static"));
app.set("view engine", 'ejs');

app.get('/',(req,res)=>{
    res.render('Index.ejs');
})

app.get('/animations',(req,res)=>{
    res.render('AnimationsIndex.ejs');
})
app.get('/animations/Circle_Spawn_Animation',(req,res)=>{
    res.render('Circle_Spawn_Animation.ejs');
})
app.get('/animations/Connecting_Dots_Animation',(req,res)=>{
    res.render('Connecting_Dots_Animation.ejs');
})
app.get('/animations/Hand_writing_sheet',(req,res)=>{
    res.render('Hand_writing_sheet.ejs');
})
app.get('/animations/Lots_of_Circles',(req,res)=>{
    res.render('Lots_of_Circles.ejs');
})
app.get('/animations/Snow_Animation',(req,res)=>{
    res.render('Snow_Animation.ejs');
})





app.get('/games',(req,res)=>{
    res.render('GamesIndex.ejs');
})
app.get('/games/Game_of_Life',(req,res)=>{
    res.render('Game_of_Life.ejs');
})
app.get('/games/RPS_game',(req,res)=>{
    res.render('RPS_game.ejs');
})
app.get('/games/Snake_game',(req,res)=>{
    res.render('Snake_game.ejs');
})
app.get('/games/Tic_Tac_Toe_game',(req,res)=>{
    res.render('Tic_Tac_Toe_game.ejs');
})


app.listen(PORT, ()=>{console.log("server started on port " + PORT)})
