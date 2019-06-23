var AuthorService = require('../services/authorService')

var service = new AuthorService();

module.exports = function () {
    return {
        index: (req, res) => {
            service.getAll((records) => {
                res.render('author/index', {
                    'records': records
                });
            });
        },
        edit: (req, res) => {
            service.getById((record) => {
                res.render('author/edit', {
                    'record': record
                });
            }, req.params.id);
        },
        add: (req, res) => {
            res.render('author/add');
        },
        save: (req, res) => {
            if (req.body.id == undefined) {
                service.insert((result) => {
                }, [req.body.first_name, req.body.last_name, req.body.email, req.body.contact_no]);
            } else {
                service.update((result) => {
                }, [req.body.first_name, req.body.last_name, req.body.email, req.body.contact_no, req.body.id]);
            }
            res.redirect("/authors");
        },
        delete: (req, res) => {
            service.delete((result) => {
                res.redirect("/authors");
            }, req.params.id)
        }
    };
}