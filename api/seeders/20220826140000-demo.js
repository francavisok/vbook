'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      //Add seed commands here.
      await queryInterface.bulkInsert('users', [{
        id:1,
        name:"franca",
        lastname: "visokolskis",
        email: "franca@gmail.com",
        password: 1234,
        userName:"franca",
        role: "admin",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",

       },
       {
        id:2,
        name:"santi",
        lastname: "Posse",
        email: "santi@gmail.com",
        password: 1234,
        userName:"santi",
        role: "admin",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
       },
       {
        id:3,
        name:"Marcos",
        lastname: "Rueda",
        email: "marcos@gmail.com",
        password: 1234,
        userName:"marquitos",
        role: "user",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
       },
       {
        id:4,
        name:"Lucas",
        lastname: "De Lellis",
        email: "lucas@gmail.com",
        password: 1234,
        userName:"luquitas",
        role: "user",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
       }
       
     ], {});

      await queryInterface.bulkInsert('genres', [{
        id:1,
        genreName: "fantasy",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
       },
       {
        id:2,
        genreName: "terror",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
       }
       
     ], {});
     
      
      await queryInterface.bulkInsert('books', [{
       title: "Harry Potter",
       description: "the boy who lived",
       author: "J.K Rowling",
       price: 100,
       posterURL: "",
       releaseDate: new Date(),
       publisher: "somePublisher",
       rating: 8,
       idGenre: 1,
       updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },
      {
        title: "Lord of the rings",
        description: "Live the adventure",
        author: "J.R.R Tolkien",
        price: 150,
        posterURL: "",
        releaseDate: new Date(),
        publisher: "otherPublisher",
        rating: 9,
        idGenre: 1,
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
       },
       {
        title: "It",
        description: "the evil clown",
        author: "Stephen King",
        price: 50,
        posterURL: "",
        releaseDate: new Date(),
        publisher: "publisherUnkown",
        rating: 8,
        idGenre: 2,
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
       }
    ], {});

    
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
