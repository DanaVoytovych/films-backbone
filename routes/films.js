var express = require('express');

module.exports = function (router) {
    router.get('/api/films', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        var films = require('../data/films.json');
        var data = films.map(function (film) {
            return {
                id: film.id,
                title: film.title,
                thumbnail: film.thumbnail,
                fullphoto: film.fullphoto,
                photos: film.photos,
                year: film.year,
                duration: film.duration,
                rating: film.rating,
                directors: film.directors,
                genre: film.genre
            }
        });
        res.end(JSON.stringify(data));
    });

    router.get('/api/films/:id', function (req, res) {
        var id = req.param('id');
        res.setHeader('Content-Type', 'application/json');
        var films = require('../data/films.json');
        var data = films.filter(function (film) {
            return film.id == id;
        })[0];
        if (data)
            res.end(JSON.stringify(data));
        res.status(404).end(JSON.stringify({
            message: "Film not found."
        }));
    });
};