const realtorca = require('realtorca');

/* 
@Controller_functionality: Registering users and sending email verification
@response: Object of bounded area property data 
@author: sandeepK
@created: 12sept
@lastmodicationDate: 
@modifiedBy: []
*/
exports.longLatOfProperty = function (req, res, next) {
    console.log("USE THI DATA THEN COMMENT ME>>>>>>>>>>>>>", req.body.lat, req.body.lng)
    let opts = {}
    setCordinates();

    /*
    @Function_functionality :Calcualate the geo-coordinate points of four corners around a center point
    @returnType: Object with topRight, bottomRight, topLeft, bottomLeft
    @author: SandeepK
    @createdOn: 15-Sept
    @lastmodicationDate: 
    @modifiedBy: []
    */
    function getRectCoordinates(lati, longi, radius) {
        //theta is the angle hard-coded to 45 degrees to think as the square 
        var theta = Math.PI / 4,
            cos = Math.cos,
            sin = Math.sin;
        return {
            'topRight': {
                'x': lati + radius * cos(theta),
                'y': longi + radius * sin(theta)
            },
            'bottomRight': {
                'x': lati + radius * cos(theta),
                'y': longi - radius * sin(theta)
            },
            'topLeft': {
                'x': lati - radius * cos(theta),
                'y': longi + radius * sin(theta)
            },
            'bottomLeft': {
                'x': lati + radius * cos(theta),
                'y': longi - radius * sin(theta)
            }
        }
    }
    /*
    @Function_functinality: setCortinated to a bound level that we get from -> getRectCoordinates(latitude, longitude, radius)
    @retunType: void
    @author : sandeepK
    @createdOn: 15-Sept
    @lastmodicationDate: 
    @modifiedBy: []
    */
    function setCordinates() {
        let afterCalc = getRectCoordinates(req.body.lat, req.body.lng, 45)
        opts = {
            LongitudeMin: afterCalc.bottomLeft.y,
            LongitudeMax: afterCalc.topLeft.y,
            LatitudeMin: afterCalc.topLeft.x,
            LatitudeMax: afterCalc.bottomLeft.x,
            PriceMin: 5000,  //min price get from user
            PriceMax: 1000000   //max price get from user
        };
        console.log("OPTS",opts,"CLOSED")
    }

    realtorca.post(opts)
        .then((data) => {
            //console.log(data.Results)             //all property with full property
            data.Results.forEach(function(element) {
            });
            res.status(200).json(data.Results)
        })
}