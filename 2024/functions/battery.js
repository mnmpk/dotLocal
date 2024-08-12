// This function is the endpoint's request handler.
exports = function(request, response) {
  if(request.body){
    let body = JSON.parse(request.body.text());
    body.date= new Date();
    return context.services.get("mongodb-atlas").db("dotLocal2024").collection("batteries").insertOne(body);
  }
    return context.services.get("mongodb-atlas").db("dotLocal2024").collection("batteries").insertOne(request);
};
