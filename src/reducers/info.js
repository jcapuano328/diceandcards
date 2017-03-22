let defaultInfo = {
    version: '1.0.6',
    releasedate: new Date(2017,2,21,16,30,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
