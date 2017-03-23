let defaultInfo = {
    version: '1.0.7',
    releasedate: new Date(2017,2,23,8,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
