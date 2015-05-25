/**
 * Generic require login routing middleware
 */

exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        req.flash("message", "Session expired.Please login");
        res.redirect('/login');
    } else {
        next();
    }
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.url === '/other') {
            req.flash("message", "You are not autherized to view this link/page");
            res.redirect('/login');
        } else {
            next();
        }
    }
};

/**
 *  filter  the response before sending to user
 */
exports.filterResponse = function(req, res) {
    next();
};
