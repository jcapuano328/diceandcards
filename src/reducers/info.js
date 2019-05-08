let defaultInfo = {
    version: '1.0.27',
    releasedate: new Date(2019,4,8,8,10,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
