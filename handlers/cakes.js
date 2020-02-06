const db = require('../models');


exports.create = async (req, res) => {
    try {
        let newCake = await db.Cake.create(req.body);
        console.log(newCake);
        return res.status(200).json('Gâteau créé avec succès')
    } catch (err) {
        return res.status(400).json({
            message : 'Oups ! Erreur lors de la création du gâteau !',
            error : err
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        let cakes;
        if (Object.keys(req.query).length !== 0) {
            if (req.query.baker !== undefined) {
                cakes = await db.Cake.find(req.query).select('name baker expirationDate').sort('expirationDate')
            } else {
                cakes = await db.Cake.find(req.query);
            }
        } else {
            cakes = await db.Cake.find()
        }
        return res.status(200).json(cakes);
    } catch (err) {
        return res.status(400).json({
            message : 'Oups ! Erreur lors de la récupération des gâteaux !',
            error : err
        });
    }
};


exports.readOne = async (req, res) => {
    try {
        let cake = await db.Cake.findById(req.params.id);
        return res.status(200).json(cake);
    } catch (err) {
        return res.status(400).json({
            message : `Oups ! Erreur lors de la récupération du gâteau : ${req.params.id} !`,
            error : err
        });
    }
};

exports.delete = async (req, res) => {
    try {
        await db.Cake.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message : "Gâteau supprimé avec succès",
        });
    } catch (err) {
        return res.status(400).json({
            message : `Oups ! Erreur lors de la suppression du gâteau : ${req.params.id} !`,
            error : err
        });
    }
};

exports.update = async (req, res) => {
    try {
        let newCake = await db.Cake.findByIdAndUpdate(req.params.id, { $set : req.body }, { new : true });
        return res.status(200).json({
            message : "Gâteau modifé avec succès",
            newCake
        });
    } catch (err) {
        return res.status(400).json({
            message : `Oups ! Erreur lors de la modification du gâteau : ${req.params.id} !`,
            error : err
        });
    }
};




