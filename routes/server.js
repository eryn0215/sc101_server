var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require("path");
var url = "mongodb://localhost:27017/test";

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
/* GET users listing. */



router.route('/sc101/:id')
    .get(function (req, res) {
      console.log("GET" + req.params.id);
    });

router.route('/sc101')
    .post(function (req, res) {
      var data = req.body;
      console.log("POST");
      console.log(data);

    //  console.log(data['postdata']['postData_1']);
    });

router.route('/test/:id').delete(function (req, res) {
  console.log("delete " + req.params.id);
});


router.route('/test/:id')
    .put(function (req, res) {
      var data = req.body;
      console.log("PUT");
      console.log(req.params.id);
      console.log(data);


    });


module.exports = router;