module.exports = async (_promise) => {
    return new Promise((resolve, reject) => {
        _promise
            .then(data => {
                resolve([null, data]);
            })
            .catch(err => {
                reject([err, null]);
            })
    })
}