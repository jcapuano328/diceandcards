let defaultInfo = {
    version: '1.0.25',
    releasedate: new Date(2018,2,17,8,30,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
