let defaultInfo = {
    version: '1.0.13',
    releasedate: new Date(2017,4,27,11,30,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
