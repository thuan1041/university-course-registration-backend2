import studentController from '../controllers/student.controller';

const IntRoutesStudent = (router) => {
    router.route('/register')
        .post(studentController.register)
        .put(studentController.updateStudent);
    router.route('/login')  
        .post(studentController.login);
    router.route('/changePassword')
        .put(studentController.changePassword);
    router.route('/resetPassword')
        .put(studentController.resetPassword);
    router.route('/getStudentStatus')
        .post(studentController.getStudentStatus);
    router.route('/getStatus')
        .get(studentController.getStatus);
    router.route('/getStudyResult')
        .post(studentController.getStudyResult);
    router.route('/sendOTP')
        .post(studentController.sendOTP);
    router.route('/verifyOTP')
        .post(studentController.verifyOTP);
    return router;
}

module.exports = IntRoutesStudent;