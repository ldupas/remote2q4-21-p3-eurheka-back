const router = require('express').Router();
const usersRouter = require('./users.routes');
const authRouter = require('./auth.routes');
const cvRouter = require('./cvs.routes');
const enterpriseRouter = require('./enterprises.routes');
const eventRouter = require('./events.routes');
const jobOfferRouter = require('./joboffers.routes');
const opinionRouter = require('./opinions.routes');
const reportRouter = require('./reports.routes');
const resourceRouter = require('./resources.routes');
const themeRouter = require('./themes.routes');

router.use('/users', usersRouter);
router.use('/', authRouter);
router.use('/cv', cvRouter);
router.use('/enterprise', enterpriseRouter);
router.use('/event', eventRouter);
router.use('/job', jobOfferRouter);
router.use('/opinion', opinionRouter);
router.use('/report', reportRouter);
router.use('/resource', resourceRouter);
router.use('/theme', themeRouter);

module.exports = router;