const   express     = require('express');
        app         = express(),
        mongoose    = require('mongoose'),
        port        = process.env.PORT || 3000,
        consts      = require('./connect/consts'),
        mission     = require("./server/crud"),
        bodyParser  = require('body-parser');


        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended:true }));
        app.use('/assets', express.static(`${__dirname}/public`));
        mongoose.Promise = global.Promise;
        mongoose.connect(consts.MLAB_KEY);


        app.use((req,res,next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
       
        app.post('/add',mission.mission_create);
        app.put('/:id/update',mission.mission_update);
        app.delete('/:id/delete',mission.mission_delete);
        app.get('/takeMission/:userName/:missionName',mission.take_mission);
        app.get('/', mission.home_page)
        app.get('/getAllUsers',mission.get_all_users)
        app.get('/getAllTasks',mission.get_all_tasks)
        app.get('/getMissionByID/:id',mission.get_mission_by_id)
        app.post('/getMissionByID/:id',mission.get_mission_by_id)
        app.get('/search/:id/:Mission',mission.search_by_id_and_mission)
        app.get('/searchByPointsRange/:point1/:point2',mission.search_by_points_range)
        app.get('/disconnectFromMlab',mission.disconnect_from_mlab)
        
        app.all('*', (req, res) => {
            res.status(200).json({"Error": "Request route did not match any option!"});
        });

        app.listen(port);
            console.log(`listening on port ${port}`);
        
  