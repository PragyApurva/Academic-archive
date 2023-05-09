exports.test = (req,res,next)=>{

    console.log(req.body)

    res.status(200).json({
        status: 'success',
        req: req.body,
    });

}