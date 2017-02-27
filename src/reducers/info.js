let defaultInfo = {
    version: '1.0.0',
    releasedate: new Date(2017,1,27,7,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return state;
    }
}
