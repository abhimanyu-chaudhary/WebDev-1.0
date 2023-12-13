const users = [
    {
      name: 'Aarav Sharma',
      age: 28,
      gender: 'Male',
      location: 'Delhi, India'
    },
    {
      name: 'Ishika Patel',
      age: 35,
      gender: 'Female',
      location: 'Mumbai, India'
    },
    {
      name: 'Rohan Kapoor',
      age: 22,
      gender: 'Male',
      location: 'Bangalore, India'
    },
    {
      name: 'Ananya Singh',
      age: 30,
      gender: 'Female',
      location: 'Kolkata, India'
    },
    {
      name: 'Aryan Deshmukh',
      age: 25,
      gender: 'Male',
      location: 'Pune, India'
    },
    {
      name: 'Neha Reddy',
      age: 32,
      gender: 'Female',
      location: 'Hyderabad, India'
    },
    {
      name: 'Rajat Verma',
      age: 27,
      gender: 'Male',
      location: 'Chennai, India'
    },
    {
      name: 'Kavita Tiwari',
      age: 29,
      gender: 'Female',
      location: 'Ahmedabad, India'
    },
    {
      name: 'Arjun Yadav',
      age: 26,
      gender: 'Male',
      location: 'Jaipur, India'
    },
    {
      name: 'Shreya Gupta',
      age: 31,
      gender: 'Female',
      location: 'Lucknow, India'
    },
    {
      name: 'Vikram Singh',
      age: 23,
      gender: 'Male',
      location: 'Chandigarh, India'
    },
    {
      name: 'Pooja Sharma',
      age: 33,
      gender: 'Female',
      location: 'Bhopal, India'
    },
    {
      name: 'Rahul Kumar',
      age: 28,
      gender: 'Male',
      location: 'Indore, India'
    },
    {
      name: 'Mitali Rajput',
      age: 34,
      gender: 'Female',
      location: 'Nagpur, India'
    },
    {
      name: 'Vivek Pandey',
      age: 30,
      gender: 'Male',
      location: 'Surat, India'
    }
  ];
  
  
  

  let isAdult = users.map((user)=>{
        if(user.age>25){
            return {
                name: user.name,
                age: user.age,
                gender: user.gender,
                location: user.location,
                adult: 'true',
            }
        }
        else{
            return{
                name: user.name,
                age: user.age,
                gender: user.gender,
                location: user.location,
                adult: 'false',
            } 
        } 
  })

//   console.log(isAdult);

  let adultUsers = isAdult.filter((user)=>{
        return user.adult == 'true';
  })

//   console.log(adultUsers);


  let getFullName = users.map((user)=>{
        return user.name + " " + user.location;
  })

//   console.log(getFullName);

  let userNames = getFullName.map((user)=>{
        return user;
  })

//   console.log(userNames);


  let filterByGender = users.map((user)=>{
    if(user.gender == 'Male'){
        return {
            name: user.name,
            age: user.age,
            gender: user.gender,
            location: user.location,
            adult: 'true',
        }
    }
    else{
        return{
            name: user.name,
            age: user.age,
            gender: user.gender,
            location: user.location,
            adult: 'false',
        } 
    } 
    }).filter((user)=>{
        return user.adult == 'false';
    }).map((user)=>{
        return user.name + " " + user.location;
    })


// console.log(filterByGender);




const movies = [
    {
      title: 'Dangal',
      genre: 'Drama',
      year: 2016,
      rating: 8.4
    },
    {
      title: 'Baahubali: The Beginning',
      genre: 'Action',
      year: 2015,
      rating: 8.1
    },
    {
      title: 'PK',
      genre: 'Comedy-Drama',
      year: 2014,
      rating: 8.1
    },
    {
      title: 'Lagaan',
      genre: 'Drama',
      year: 2001,
      rating: 8.1
    },
    {
      title: '3 Idiots',
      genre: 'Comedy-Drama',
      year: 2009,
      rating: 8.4
    },
    {
      title: 'Queen',
      genre: 'Drama',
      year: 2013,
      rating: 8.1
    },
    {
      title: 'Padmaavat',
      genre: 'Drama',
      year: 2018,
      rating: 7.0
    },
    {
      title: 'Gully Boy',
      genre: 'Drama',
      year: 2019,
      rating: 8.1
    },
    {
      title: 'Andhadhun',
      genre: 'Crime-Thriller',
      year: 2018,
      rating: 8.3
    },
    {
      title: 'Article 15',
      genre: 'Crime-Drama',
      year: 2019,
      rating: 8.2
    }
  ];
  
//   console.log(movies);
  

let filterByGenre = movies.map((movie)=>{
        if(movie.genre == 'Drama'){
            return {
                title: movie.title,
                genre: movie.genre,
                year: movie.year,
                rating: movie.rating,
                match: true,
            } 
        }
        else{
            return {
                 title: movie.title,
                 genre: movie.genre,
                 year: movie.year,
                 rating: movie.rating,
                 match: false,
            }
        }
})

//   console.log(filterByGenre);


  let dramaMovies = filterByGenre.filter((movie)=>{
        return movie.match == true
  })

    // console.log(dramaMovies);


  let moviesTitle = dramaMovies.map((movie)=>{
        return movie.title
  })

    // console.log(moviesTitle);


  // let combinedResults = movies.users.map((user)=>{
          
  //         return adultUsers + " " + userNames + " " + filterByGender + " " + moviesTitle

  // })

    // console.log(combinedResults);

  

  let combinedResults = adultUsers.concat(userNames).concat(filterByGender).concat(moviesTitle);

    console.log(combinedResults);


    //I have solved all the question but was unable to do the last part 5 thing. Combining the all above things.
  


    

