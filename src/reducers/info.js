let defaultInfo = {
    version: '1.0.20',
    releasedate: new Date(2017,10,7,6,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
