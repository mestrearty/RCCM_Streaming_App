module.exports = (application)=>{

    application.get('/video',(req, res)=>{
        application.app.controllers.video.videoStream(application,req,res);
    });

};
