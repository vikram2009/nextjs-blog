

export default function handler(req, res) {
 
  const fs = require('fs');

  fs.readFile(`blogdata/${req.query.slug}.json` , 'utf-8',  (err , data) => {
   
    if(err){

      res.status(500).json({error : " error "})

    }else {

      res.status(200).json(JSON.parse(data))   
    }
  
  

  })
  
  
  }
  