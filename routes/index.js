//const supervisorRouter = require('./supervisorRoutes');
const employeeRouter = require('./employeeRoutes');
const indexRouter = require('./indexRoutes');
const hrRouter = require('./hrRoutes');
const supervisor_budget = require('. /supervisor_budget');
const supervisor_goals = require('./supervisor_goals');
const supervisor_revenue = require('./supervisor_revenue');
const supervisor_schedule = require('./supervisor_schedule');
const hrPayroll = require('./hrPayrollRoutes');
const hrEmployeeInformation = require('./hrEmployeeInformationRoutes');
const hrComments = require('./hrCommentsRoutes');

module.exports = {
    supervisorRouter,
    employeeRouter,
    indexRouter,
    hrRouter,
    hrEmployeeInformation,
    hrComments,
    supervisor_budget,
    supervisor_revenue,
    supervisor_goals,
    supervisor_schedule,

};