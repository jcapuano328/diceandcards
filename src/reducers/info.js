let defaultInfo = {
    version: '1.0.10',
    releasedate: new Date(2017,4,20,9,0,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
