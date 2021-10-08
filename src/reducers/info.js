let defaultInfo = {
    version: '1.0.28',
    releasedate: new Date(2020,11,20,12,49,0)
};

module.exports = (state = defaultInfo, action) => {
    switch (action.type) {
    default:
        return {...defaultInfo};
    }
}
