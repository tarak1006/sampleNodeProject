var Ticket=require('./../models/tickets.js')

  var express=require('express');
  var router=express.Router();
  var bodyParser=require('body-parser');
  router.use(bodyParser.urlencoded({extended:false}));
  router.use(bodyParser.json());

console.log(" we are in ticket routes");

  router.get('/cancelled',(req,res)=>{
    req.query.cancelled=true;
    Ticket.find(req.query,(err,result)=>{
      if(err)
      res.send(err);

       res.send(result);
    });
  });


router.get('/:id',function(req,res,next){

  Ticket.find({_id:req.params.id},(err,result)=>{
    if(err)
    res.send(err);
    res.send(result);
  });
});
console.log('control at before get /request');
router.get('/',(req,res)=>{
  console.log("Inside get request");

 Ticket.find(req.query,(err,result)=>{
   if(err)
   res.send(res);

   res.send(result);

 });

  });

router.put('/:id',(req,res)=>{
  Ticket.findByIdAndUpdate(req.params.id,req.body,(err)=>{
    if(err)
    res.send("Not found",err);
    res.send("Updated sucessfully");
  });
});
router.delete('/:id',(req,res)=>{
  Ticket.findByIdAndRemove(req.params.id,(err)=>{
    if(err)
    res.send("In deletion error occured");

    res.send("Deleted sucessfully");
  });
});


router.get(function(req, res, next) {
    res.statusCode=404;
    res.end("");
});
router.post('/',function(req,res,next){
  console.log(req.body);
  var newTicket=new Ticket(req.body);
  newTicket.save((err)=>{
    if(err)
    res.send(err);
    res.send("new ticket sucessfully created");
  })
});


router.put('/', function(req, res, next) {
    res.statusCode=404;
    res.send("Invalid response");

});

router.delete('/:id', function(req, res, next) {
  Ticket.deleteOne({_id:req.params.id},(err)=>{
    if(err)
    res.send(err);
    res.send("Ticket deleted sucessfully");
  });
});


router.delete('/',function(req,res,next){
    res.statusCode=404;
    res.end("");
});



module.exports=router//it is complsury(error made here)