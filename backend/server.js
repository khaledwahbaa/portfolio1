import express from "express";
import cors from "cors";

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend is okay");
});
app.post("/contact",(req,res)=>{
    const{firstName, lastName , email,phone, message}=req.body;
    console.log("New Contact Message:");
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);
        console.log("Email:",email);
     console.log("Phone:",phone);
     console.log("Message:",message);
     res.json({success:true, message:"Message receieved successfully!"});

});
app.get("/projects",(req,res)=>{
    const projects=[
{
    id: 1,
    title:"Designer Website",
    category: "Website",
    tags: ["React", "Tailwind"],
},
{

    id: 1,
    title:"Designer Website",
    category: "Website",
    tags: ["React", "Tailwind"],

},
{
    id: 1,
    title:"Designer Website",
    category: "Website",
    tags: ["React", "Tailwind"],
},
{
    id: 2,
    title:"Designer Website",
    category: "Website",
    tags: ["React", "Tailwind"],
},
{
    id: 3,
    title:" Landing Page UI Website",
    category: "Website",
    tags: ["UI", "Tailwind"],
},
{
    id: 4,
    title:"Charity Website",
    category: "Website",
    tags: ["Node.js", "Tailwind"],
},
{
    id: 5,
    title:"Game Store",
    category: "Website",
    tags: ["MongoDB", "Tailwind"],
},
    ];
    res.json(projects);
});
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
