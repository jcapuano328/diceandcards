let defaultInfo = {
    version: '1.0.29',
    releasedate: new Date(2021,9,9,8,47,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
