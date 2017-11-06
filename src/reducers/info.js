let defaultInfo = {
    version: '1.0.19',
    releasedate: new Date(2017,10,5,12,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
