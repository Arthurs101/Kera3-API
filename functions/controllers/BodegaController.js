const supabase = require('../database/supabase');

const getManager = async (req , res) => {
  if(!!req.query){
    const parameters = Object.entries(req.query)
    res.json(parameters)
  }else{
  let { data, error } = await supabase
  .from('producto')
  .select('*')
  if(error){  
    res.json({message: "a conection error occurred" , messa_error: error})
  }else{
    console.log(JSON.stringify(data))
    res.json(data)
  }
  }
}
module.exports ={
  getManager
}