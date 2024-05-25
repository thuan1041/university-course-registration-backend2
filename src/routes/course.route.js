import courseController from '../controllers/course.controller';

const InitRoutesCourse = (router) => {
    router.route('/addCourse')
        .post(courseController.addCourse);
    router.route('/getAllCourses')
        .post(courseController.getAllCourses);
    router.route('/addMajor')
        .post(courseController.addMajor);
    router.route('/addClass')
        .post(courseController.addClass);
    router.route('/getCourceByMajor')
        .post(courseController.getCourceByMajor);
    router.route('/getClassByCourse')
        .post(courseController.getClassByCourse);
    router.route('/registerClass')
        .post(courseController.registerClass);
    router.route('/acceptStudentToClass')
        .put(courseController.acceptStudentToClass);
    router.route('/finishCourse')
        .put(courseController.finishCourse);
    router.route('/getSchedules')
        .post(courseController.getSchedules);
    router.route('/getRegisteredCourse')
        .post(courseController.getRegisteredCourse);
    router.route('/getAllClasses')
        .post(courseController.getAllClasses);
    router.route('/getWaitingList')
        .get(courseController.getWaitingList);
    router.route('/getStudentInClass')
        .post(courseController.getStudentInClass);
    router.route('/getFailedCource')
        .post(courseController.getFailedCource);
    router.route('/getCurrenCourse')
        .post(courseController.getCurrenCourse);
    return router;
}

module.exports = InitRoutesCourse;