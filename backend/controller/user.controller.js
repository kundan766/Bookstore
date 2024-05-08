const User=require("../model/user.model");
// bcrypt js
const bcryptjs = require('bcryptjs');
exports .signup= async(req,res)=>{
    try{
         const{fullname,email,password}=req.body;
         const user= await User.findOne({email});
         if(user){
            return res.status(400).json({message:"user already exists"})
         }
         //  hashing password
         const hashPassword= await  bcryptjs.hash(password,10)
         const createdUser=new User({
            fullname:fullname,
             email:email,
            
            password:hashPassword,
         })
         await  createdUser.save()
         res.status(201).json({message:"user created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
         },})
    }catch(err){
        console.log("Error in SignUp", err);
        res.status(500).json({message: "Internal Server Error"});

    }
}

// exports .login=async (req,res)=> {
//    try{
//     const {email,password}= req.body;
//     const user= await User.findOne({email});
//     const isMatch=await bcryptjs.compare(password,user.password);
//      if(!user || !isMatch){
//         return res.status(400).json({message: 'Invalid username or password'});
//      }
//      else{
//         res.status(200).json({message:"Login successful",user:{
//             _id:user._id,
//             fullname:user.fullname,
//             email:user.email
//         }})
//      }
//    }
//    catch(err){
//     console.log("error:"+err.message);
//     res.status(500).json({message:"Internal server error"})
//    }
// }
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        
        const isMatch = await bcryptjs.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            });
        }
    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

