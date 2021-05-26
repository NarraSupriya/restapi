const express = require('express')
const restaurantsController = require('../controllers/restaurantsController')

const router = express.Router();

router.route("/")
    .get(restaurantsController.getAllRestaurant)
    .post(restaurantsController.createRestaurant)

router.route("/:id")
    .get(restaurantsController.getOnerestaurants)
    .patch(restaurantsController.updateRestaurant)
    .delete(restaurantsController.deleteRestaurant)
module.exports = router