let defaultInfo = {
    version: '1.0.22',
    releasedate: new Date(2017,10,25,9,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
