const formidable = require('formidable').default;
const { createProduct } = require('../services/product.service');

module.exports.createProduct = async (req, res,next) => {
   try {
    const form = formidable({keepExtensions:true});

   form.parse(req,async(err,fields,files)=>{
    if(err){
        return res.status(400).json({
            error:"Image could not be uploaded formidable error"
        })
    } 
    const product = await createProduct({files,fields});


    return res.status(201).json({
        success: true,
        message: "Product created successfully",
        product,
        
      });

   })
    
   } catch (error) {
         console.log(error);
         next(error);
    
   }
}

module.exports.getAllProducts = async (req, res) => {

    

}