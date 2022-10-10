var getIndex=(req,res)=>{
    res.render('index',
    {
        link:'index'
    });
}
var getProject=(req,res)=>{
    res.render('projects',
    {
        link:'projects'
    });
}

var getContact=(req,res)=>{
    res.render('contact',
    {
        link:'contact'
    });
}

var getBlog=(req,res)=>{
    res.render('blog',
    {
        link:'blog'
    });
}

var getAbout=(req,res)=>{
    res.render('about',{
        link:'about'
    });
}
var getServices = (req,res)=>{
    res.render('services',
    {
        link:'services'
    });
}
var getRegister = (req,res)=>{

    res.render('register',{
        link:'register'
    });

}

var getLogin = (req,res)=>{

    res.render('login',
    {
        link:'login'
    });

}

var getLogout=(req,res)=>{
    res.cookie('jwt', '', {
        maxAge:'1'
    });
    res.redirect('/');
}

export {
    getIndex,
    // getGallery,
    getProject,
    getAbout,
    getContact,
    getBlog,
    getServices,
    getRegister,
    getLogin,
    getLogout
};
