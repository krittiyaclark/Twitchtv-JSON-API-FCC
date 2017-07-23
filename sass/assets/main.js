// Client ID=jo5yejqiz1q6lkhyf08iixvd6lcdkh
// var follower = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];


$(document).ready(function() {

  var follower = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];

  $.ajax({
    type: "GET",
    url: 'https://api.twitch.tv/kraken/streams/freecodecamp',
    headers: {
      'client-ID': 'jo5yejqiz1q6lkhyf08iixvd6lcdkh'
    },
    success: function(data1) {
      console.log(data1);
      if(data1.stream===null) {
        $('#fccStatus').html('Free Code Camp is OFFLINE!');
      }else {
        $('#fccStatus').html('Free Code Camp is ONLINE!')
      }
    },
    error: function(err) {
      alert('Error');
    }

  }); // end ajax

  $.ajax({
   type: "GET",
   url: 'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/',
   headers:{
     'client-ID': 'jo5yejqiz1q6lkhyf08iixvd6lcdkh'
   },
   success: function(data2) {

     for(var i = 0; i < data2.follows.length; i++) {
        console.log(data2.follows[0]);

     }
   }
 });


   //if(data2)

}); // end document
