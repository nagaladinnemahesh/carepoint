const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const user = req.user
        if (!user || !allowedRoles.includes(user.role)) {
            return res.status(403).json({ message: 'Access forbidden: insufficient rights' })
        }
        next()
    }
}

module.exports = roleMiddleware
