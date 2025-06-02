const http = require("http");
const PORT = 8089;


const server = http.createServer((req, res) => {

    const url = req.url
    const method = req.method;

    console.log("method + url", method + " ::: " + url)

    if(url === "/") {
        if(method === "GET") {
            res.write("hello hello hello ");
            res.write("utkarsh ");
            res.end(" end!!")
        } else {
            res.writeHead(405); // method not allowed
            res.end("METHOD NOT ALLOWED !!!")
        }
        
    } else if (url === "/contacts") {
        res.end("88s8s83384 thakurutkarsh2@gmail.com ")
    } else if (url === "/fitness") {
        const fitness = {
            name: "utkarsh",
            height: 173,
            weight: 70,
            diet: ["eggs", "chapati"],
            address: {
                street: "101 street",
                houseNumber: 123
            },
            shouldSleep8Hours: true,
            createdDate: new Date().toISOString(),
        }
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(fitness));
    }
});



server.listen(PORT, () => {
    console.log("THUMBS UP server has started and listning at port ", PORT)
})
