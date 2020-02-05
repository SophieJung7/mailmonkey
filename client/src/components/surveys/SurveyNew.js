import React, { Component } from 'react';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = {
        showFormReview: false
    };

    render() {
        if (!this.state.showFormReview) {
            return <SurveyForm onSurveyReview={ () => this.setState({ showFormReview: true }) } />;
        }
        return <SurveyFormReview onCancel={ () => this.setState({ showFormReview: false }) } />;
    }
}

export default SurveyNew;

