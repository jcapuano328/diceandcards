let defaultInfo = {
    version: '1.0.9',
    releasedate: new Date(2017,4,19,7,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
