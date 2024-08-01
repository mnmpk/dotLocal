// This function is the endpoint's request handler.
exports = function(request, response) {
    return context.services.get("mongodb-atlas").db("dotLocal2024").collection("sumBattery").find();
};
