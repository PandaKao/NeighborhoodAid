const setReportType = (req, res, next) => {
    const isAuthorityRoute = req.path.includes('authorities');
    const isCommunityRoute = req.path.includes('community');

    if (isAuthorityRoute) {
        req.body.type = "Authorities";
    } else if (isCommunityRoute) {
        req.body.type = "Community"
    }

    next();
};

export default setReportType;