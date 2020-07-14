const request = async (url, method, body) => {
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(body)
        })
    
        const res = await response.json();
        return res;
      } catch (error) {
        console.log('Error:', error);
        return Promise.reject(error);
      }
    }
    
    const baseUrl = 'https://api-front.herokuapp.com';
    
    // 1. Создать функцию которая будет создавать фильм
    // get films
    const getFilms = async () => {
      const films = await request(`${baseUrl}/films`);
      return films;
    }
    
    const film = {
      title: 'Матрица',
      director: 'Лана Вачовски'
    };
    
    const createFilm = async (film) => {
      if (film) {
        let films = await getFilms();
        let filterFilm = films.some(item => item.title === film.title);
    
        if (!filterFilm) {
          let addedFilm = await request(`${baseUrl}/films`, 'POST', film);
          return addedFilm;
        }
      }
    }
    
    // createFilm(film);
    
    
    // 2. Создать функцию которая будет добавлять id фильма для пользователя
    const addIdFilmForUser = async (userId, filmId) => {
      if (userId && filmId) {
        await request(`${baseUrl}/users/addFilm`, 'POST', { userId: userId, filmId: filmId });
      }
    }
    
    // addIdFilmForUser('5f06d94a086f8d0017c45dad', '5f0785f24b6b09001793255d');
    
    
    // 3. Создать функцию которая выведет всех пользователей с фильмами в виде объектов
    const getUsers = async () => {
      const users = await request(`${baseUrl}/users`);
      return users;
    }
    
    const getUsersWithFilms = async () => {
      const users = await getUsers();
      const usersWithFilms = users.filter(
        user => 'filmsId' in user && user.filmsId.length
      )
    
      return usersWithFilms;
    }
    
    getUsersWithFilms().then(res => console.log(res));
    
    
    // 4. Создать функцию которая будет принимать в себя 2 аргумента в виде id пользователя и объекта с новым фильмом, после чего будет создаваться фильм на основе второго агрумента и добавляться этот фильм пользователю с id переданным в первом аргументе. Старайтесь переиспользовать функции.
    const newFilm = {
      title: 'Матрица: Перезагрузка',
      director: 'Ларри и Эндрю Вачовски'
    };
    
    const setFilmForUser = async (userId, filmObject) => {
      if (userId && filmObject) {
        let film = await createFilm(filmObject);
        await addIdFilmForUser(userId, film._id);
      }
    }
    
    // setFilmForUser('5f06d94a086f8d0017c45dad', newFilm);
    
    
    // 5. Создать функцию которая возмет всех юзеров http://jsonplaceholder.typicode.com/users, потом запросит массив альбомов и добавит каждому юзеру в массив albums все эти альбомы http://jsonplaceholder.typicode.com/albums смторим на userId. После запрашиваем photos http://jsonplaceholder.typicode.com/photos и добавлем все фотки в альбомы по albumId каждому юзеру.
    const baseUrlTypicode = 'http://jsonplaceholder.typicode.com';
    
    const getUsersTypicode = async () => {
      let users = await request(`${baseUrlTypicode}/users`);
      return users;
    }
    
    const getAlbumsTypicode = async () => {
      let albums = await request(`${baseUrlTypicode}/albums`);
      return albums;
    }
    
    const getPhotosTypicode = async () => {
      let photos = await request(`${baseUrlTypicode}/photos`);
      return photos;
    }
    
    const getUserFull = async () => {
      let users = await getUsersTypicode();
      let albums = await getAlbumsTypicode();
      let photos = await getPhotosTypicode();
    
      for (const user of users) {
        user.albums = [];
    
        for (const album of albums) {
    
          if (user.id === album.userId) {
            album.photos = [];
            user.albums.push(album);
    
            for (const photo of photos) {
    
              if (album.id === photo.albumId) {
                album.photos.push(photo);
              }
    
            }
          }
    
        }
      }
      console.log(users)
    }
    
    getUserFull();