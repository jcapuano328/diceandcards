let defaultInfo = {
    version: '1.0.24',
    releasedate: new Date(2017,11,28,11,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
