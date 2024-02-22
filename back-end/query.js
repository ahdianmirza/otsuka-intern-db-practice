const database = require('./no-need-to-edit/db.config');


const query = {
  getCountByRating: async () => {
    return await database.raw(`
            SELECT rating, COUNT(film_id) as movie_count FROM film GROUP BY rating;
        `);
  },

  getCountBySpecialFeatures: async () => {
    return await database.raw(`
            SELECT tag_name as feature, COUNT(film_id) AS movie_count
            FROM (
            SELECT film_id, SUBSTRING_INDEX(SUBSTRING_INDEX(special_features, ',', t.n), ',', -1) AS tag_name
            FROM film
            CROSS JOIN (
                SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3
            ) AS t
            WHERE CHAR_LENGTH(special_features) - CHAR_LENGTH(REPLACE(special_features, ',', '')) >= t.n - 1
            ) AS subquery
            GROUP BY tag_name;
        `);
  },

    // silakan tambahkan item query seperti diatas untuk menambahkan query lainnya
    getTopTenCustomerRental: async () => {
        return await database.raw(`select * from top_ten_most_rental_customers;`);
    },
    getCountByCategory: async () => {
        return await database.raw(`select * from movie_count_by_categories;`);
    },
    getMovieCountByActor: async () => {
        return await database.raw(`select * from top_movie_count_by_actor;`);
    },
    getCustomerByAmount: async () => {
        return await database.raw(`select * from top_ten_customer_by_amount;`);
    },
    getMovieCountByLanguage: async () => {
        return await database.raw(`select * from movie_count_by_language;`);
    },
};






module.exports = query;