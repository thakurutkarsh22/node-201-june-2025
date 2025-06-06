// gets the request 
// send back the response

function homeResponse (req, res) {
res.write("hello hello hello ");
    res.write("utkarsh ");
    res.end(" end!!")
}

function getContact (req, res)  {
    res.status(200).send("88s8s83384 thakurutkarsh2@gmail.com")
}

module.exports = {homeResponse, getContact}