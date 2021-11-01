const notFound = (req, res) => {
    res.status(404).send("Sorry, we cannot find the webpage you are looking for")
}

module.exports = notFound