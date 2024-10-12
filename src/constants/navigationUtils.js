const handleNavigation = {
    handleAssessment: () => navigation.navigate('AssessmentForm', {applicationType:"new"}),
    handleCertificate: () => navigation.navigate('Certificate'),
    handleDocuments: () => navigation.navigate('Documents'),
    handleFee: () => navigation.navigate('Fee'),
    handleAppointment: () => navigation.navigate('ForgotPassword'),
};

export default handleNavigation;