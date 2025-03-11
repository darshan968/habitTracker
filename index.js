import express from "express";
import ejs from "ejs";
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "public");
app.get("/", (req, res) => {
    res.render("index.ejs", { title: "Habit Tracker App" });
});
app.get("/add-habit",(req,res)=>{
    res.render("add.ejs",{title:"Add Habit"});
})

export default app;