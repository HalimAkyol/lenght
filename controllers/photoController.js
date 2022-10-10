import photoModel from "../models/photoModel.js";

var createPhoto= async (req,res)=>{

    
// 2.yol
// try {
//     var photo = await new photoModel(req.body);
//     photo.save((err,res)=>{
//         if (!err) console.log(res);
//         else{
//                 console.log(err);
//             }
//     });
//     res.status(201).json({
//         succeded:true,
//         photo:req.body
//     });
//     } catch (error) {
//         res.status(500).json({
//             succeded:false,
//             photoCreateError:error.message
//         });
//     }

// 1.yol
    try {
        var photo = await photoModel.create(req.body);
        res.status(201).json({
            succeded: true,
            photo: photo
        });
    } catch (error) {

        console.log(error.message);
        res.status(401).json({
            succeded: false,
            error: error.name
        });
    }


}

var getAllPhotos= async (req,res)=>{

    var getPhotos= await photoModel.find({});
    res.render('photos',{
        photos:getPhotos,
        link:'photos'
    });
}

export {createPhoto,getAllPhotos}