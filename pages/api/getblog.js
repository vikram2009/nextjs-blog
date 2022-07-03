import * as fs from 'fs'

export default function handler(req, res) {

  fs.readFile(`blogdata/${req.query.slug}.json` , 'utf-8',  (err , data) => {
   
  if(err){
    
    res.status(200).json({error : "error"}) 
  }
  
  res.status(200).json(JSON.parse(data))   

  })
  res.status(200).json({name : "Vikram Srinivas"}) 
  
  }
  