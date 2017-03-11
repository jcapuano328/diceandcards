let defaultInfo = {
    version: '1.0.3',
    releasedate: new Date(2017,2,11,11,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
