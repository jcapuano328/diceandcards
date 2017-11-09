let defaultInfo = {
    version: '1.0.21',
    releasedate: new Date(2017,10,8,5,30,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
