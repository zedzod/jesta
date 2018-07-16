var   Task    = require('./tasks_schema'),
      user    = require('./users_schema');

//crud
exports.mission_create = function(req,res) {
    var task = new Task(
        {
                id: req.body.id,
                userName: req.body.userName,
                Mission:req.body.Mission,
                Description: req.body.Description,
                Date: req.body.Date,
                Time:req.body.Time,
                Points: req.body.Points,
                Invited: req.body.Invited
        }
    );
    task.save(function(err) {
        if(err){
            return next(err);
           console.log('error');
        }
        res.send('task created successfully')

    })

    var usr=req.body.userName  
    user.find({name:usr},
    (err,userFound) => {
        if(err) {
            console.log('dont find userName');
        }
 
        user.findByIdAndUpdate(userFound[0]._id,
            {$push: {createdTasks: req.body.Mission},
       },
            {safe: true, upsert: true},
            function(err, doc) {
                if(err){
                console.log(err);
                }else{
                console.log('successfully added mission')
                }
            }
        );
      }
    )   
};


exports.take_mission = function (req,res)  {
    Task.find({Mission:req.params.missionName},(err,jesta) => {

        if(err)
        {
              console.log(`query error: ${err}`);
        }
        else if(jesta[0].isTaked == "true"){
            console.error('this mission is alredy taked');
            process.exit()
        }
        Task.findByIdAndUpdate(jesta[0]._id, {$set:{isTaked:true}}, function (err, task) {
            if (err){ 
            return next(err);
            console.log('error');
            }
            console.log('mission taked successfully!')
        });

    var usr=req.params.userName  
    user.find({name:usr},
    (err,userFound) => {
        if(err) {
            console.log('dont find userName');
        }
 
        user.findByIdAndUpdate(userFound[0]._id,
            {$push: {performTasks: req.params.missionName},
             $inc: {points: jesta[0].Points} 
        },
            {safe: true, upsert: true},
            function(err, doc) {
                if(err){
                console.log(err);
                }
                else{
                    
                 if(userFound[0].points > 100)
                     {
                        user.findByIdAndUpdate(userFound[0]._id,{$set:{rank:'B'}}, function (err, task) {
                            if (err){ 
                            return next(err);
                            console.log('error');
                            }
                            else{
                                console.log('good job your rank changed:')
                            }
                         } )
                     } 
                res.send(userFound);

                }
            }
            
        );
      }
    )
})
   
};


exports.home_page = function (req,res) {
    console.log('Trace: API Page');
    res.sendFile('api/index.html', { root: '.' })
}

exports.get_all_users = function (req,res){
    user.find({},(err,usr) =>{
        res.setHeader('Debug', 'getAllUsers func was reached');
        if(err) console.log(`query error: ${err}`);
        res.json(usr);
    });
}

exports.get_all_tasks = function (req,res){
    Task.find({},(err,jesta) =>{
        res.setHeader('Debug', 'getAllTasks func was reached');
        if(err) console.log(`query error: ${err}`);
        res.json(jesta);
    });
}

exports.get_mission_by_id = function (req,res){
    res.setHeader('Debug', 'getMissionByID func was reached');
            Task.find({id:req.params.id},(err,jesta) => {
                if(err) console.log(`query error: ${err}`);
                 res.json(jesta);
             });
}

exports.search_by_id_and_mission = function (req,res){
    res.setHeader('Debug', 'search with id and mission name');
    Task.find({id:req.params.id,Mission:req.params.Mission},(err,jesta) => {
        if(err) console.log(`query error: ${err}`);
        res.json(jesta);
    });
}

exports.search_by_points_range = function (req,res){
    res.setHeader('Debug', 'search by points range');
    Task.find({Points:{$gt:req.params.point1, $lt:req.params.point2}},(err,jesta) => {
        if(err) console.log(`query error: ${err}`);
        res.json(jesta);
    });
}

exports.disconnect_from_mlab = function (req, res) {
    mongoose.disconnect();
    console.log('you disconnect from database');
     res.status(200).json({"success": "you success disconnect from mlab!"});
}

exports.mission_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, task) {
        if (err){ 
        return next(err);
        console.log('error');
        }
        res.send('mission updated');
        console.log('mission updated successfully!')
    });
};

exports.mission_delete = function (req, res) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Mission Deleted successfully!');
        console.log('Mission Deleted successfully!')
    })
};


