// 1.Circle- Movie

class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  
  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
  class movie1 {
      constructor(title, studio, rating){
          this.title = title;
          this.studio = studio;
          this.rating = "PG13";
      }
  }
  
  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
  // the studio “Eon Productions”, and the rating “PG­13”
  
  const CasinoRoyale = new movie1( "Casino Royal", "Eon Productions", "PG13");
  console.log(CasinoRoyale);


   //-----------------------------------------------------------------------------------------




// 2. Circle- Class


//   public class Circle {           // save as "Circle.java"
//     // private instance variable, not accessible from outside this class
//     private double radius;
//     private String color;
    
//     // 1st constructor, which sets both radius and color to default
//     public Circle() {
//        radius = 1.0;
//        color = "red";
//     }
    
//     // 2nd constructor with given radius, but color default
//     public Circle(double r) {
//        radius = r;
//        color = "red";
//     }
    
//     // A public method for retrieving the radius
//     public double getRadius() {
//       return radius; 
//     }
    
//     // A public method for computing the area of circle
//     public double getArea() {
//        return radius*radius*Math.PI;
//     }
//  }

 //-----------------------------------------------------------------------------------------

// 3 .Write a “person” class to hold all the details.


function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
        
alert(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";
        
alert(person2.firstName + " " + person2.lastName );

 //-----------------------------------------------------------------------------------------


// 4. write a class to calculate the uber price.


 // Create variables to store latitude and longitude
var userLatitude
, userLongitude
, partyLatitude = 19.3256725
, partyLongitude = -43.1579731;



navigator.geolocation.watchPosition(function(position) {
// Update latitude and longitude
userLatitude = position.coords.latitude;
userLongitude = position.coords.longitude;

// Query Uber API if needed
getEstimatesForUserLocation(userLatitude, userLongitude);
});

function getEstimatesForUserLocation(latitude,longitude) {
$.ajax({
url: "https://api.uber.com/v1/estimates/price",
headers: {
    Authorization: "KA.ey*************************" + uberServerToken
},
data: { 
  start_latitude: latitude,
  start_longitude: longitude,
  end_latitude: partyLatitude,
  end_longitude: partyLongitude
},
success: function(result) {
  console.log(result);
}
});
}

 //-----------------------------------------------------------------------------------------