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

    console.log(moviesTitle);


    

