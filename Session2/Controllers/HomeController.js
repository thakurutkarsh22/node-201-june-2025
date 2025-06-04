// gets the request 
// send back the response

function homeResponse (req, res) {
    res.write("hello hello hello ");
    res.write("utkarsh ");
    res.end(" end!!")
}

module.exports = {homeResponse}