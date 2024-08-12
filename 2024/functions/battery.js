// This function is the endpoint's request handler.
exports = function(request, response) {
  if(!request.date)
    request.date= new Date();
    return context.services.get("mongodb-atlas").db("dotLocal2024").collection("batteries").insertOne(request);
};
