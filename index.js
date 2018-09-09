$(document).ready(function(){
 
});

$("form").submit(function(e) {
  e.preventDefault();

let option = $('#searchBy :selected').text();


if(option=="Search by")
{
   $("#info").hide();   
alert("Please select an option")
}
else
{
  dofunction(option);
}
});


 dofunction = option => {
  let movieName = $("#searchId").val();
 //let year = $("#date").val();

 let movieByName=movieName;
 if (option != 'Name') 
{   $("#info").hide();
}else 
{  find(movieByName);
}
let movieId=movieName;
 if (option != 'ID') 
{   $("#info").hide();
}
 else 
{  dosearch(movieId);
}
 let year=movieName;
if (option != 'Year') 
{   $("#info").hide();
}
else {
  findmovie(year);
}
};


find = movieByName => {
$.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?i=tt3896198&apikey=7d2adea7",
    data: "{'s': '" + movieByName + "'}",
    dataType: 'json',
     async: true,
      success: (data) => {
if(data.Title != movieByName )
{
    $("#info").hide();
  alert("Try again...")
 }
         else
          {
                     display(data);
          }
      },
        error: (data) => { // in case of error response
            alert("some error occured")
        },
        beforeSend: () => { // while request is processing.
            // you can use loader here.
            alert("request is being made. please wait")
        },
         timeout: 2500
});
};

dosearch = movieId => {

$.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?i=tt3896198&apikey=7d2adea7",
    data: "{'i': '" + movieId + "'}",
    dataType: 'json',
     async: true,
      success: (data) => {
if(data.imdbID != movieId )
{   $("#info").hide();
  alert("Try again...")
}
         else
          {
          display(data);
          }
      },
        error: (data) => { // in case of error response
            alert("some error occured")
        },
        beforeSend: () => { // while request is processing.
            // you can use loader here.
            alert("request is being made. please wait")
        },
         timeout: 2500
});
};

findmovie = year => {
$.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?i=tt3896198&apikey=7d2adea7",
    data: "{'y': '" + year + "'}",
    dataType: 'json',
     async: true,
      success: (data) => {
if(data.Year != year )
{    $("#info").hide();
 alert("Try again...") 
}         else
          {
          display(data);
          }
      },
        error: (data) => { // in case of error response
            alert("some error occured")
        },
        beforeSend: () => { // while request is processing.
            // you can use loader here.
            alert("request is being made. please wait")
        },    
     timeout: 2500
});
};
  
  display = data => {

 if (data == null || data== undefined) {
    alert(data.Error);
  } else {

           $("#info").show();
          
            let actors=data.Actors;
            let Awards = data.Awards;
            let BoxOffice = data.BoxOffice;
            let Country=data.Country;
            let DVD = data.DVD;
            let Director = data.Director;
            let Genre=data.Genre;
            let Language = data.Language;
            let Metascore = data.Metascore;
            let Plot=data.Plot;
            let Poster = data.Poster;
            let Production = data.Production;
            let Rated=data.Rated;
            let Ratings = data.Ratings;
            let Released=data.Released;
            let Response = data.Response;
            let Runtime = data.Runtime;
            let Type=data.Type;
            let Website = data.Website;
            let Writer=data.Writer;
            let Year = data.Year;
            let imdbID = data.imdbID;
            let imdbRating=data.imdbRating;
           let imdbVotes=data.imdbVotes;
         
            $("#actor").replaceWith(actors);
            $("#Awards").replaceWith(Awards);
            $("#BoxOffice").replaceWith(BoxOffice);
            $("#Country").replaceWith(Country);
            $("#DVD").replaceWith(DVD);
            $("#Director").replaceWith(Director);
            $("#Genre").replaceWith(Genre);
            $("#Language").replaceWith(Language);
            $("#Metascore").replaceWith(Metascore);
            $("#Plot").replaceWith(Plot);
            $("#Poster").replaceWith(Poster);
            $("#Production").replaceWith(Production);
            $("#Rated").replaceWith(Rated);
            $("#Ratings").replaceWith(Ratings);
            $("#Released").replaceWith(Released);
            $("#Response").replaceWith(Response);
            $("#Runtime").replaceWith(Runtime);
            $("#Website").replaceWith(Website);
            $("#Writer").replaceWith(Writer);
            $("#Year").replaceWith(Year);
            $("#imdbID").replaceWith(imdbID);
            $("#imdbRating").replaceWith(imdbRating);
            $("#imdbVotes").replaceWith(imdbVotes);


}

};


