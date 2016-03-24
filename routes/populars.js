var express = require('express');

module.exports = function (router) {
    router.get('/api/populars', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        var films = require('../data/films.json');
        var data = films.map(function (film) {
            return {
                id: film.id,
                title: film.title,
                photo: film.fullphoto
            }
        });
        res.end(JSON.stringify(data));
    });
};