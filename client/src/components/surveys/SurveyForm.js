import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';

// export default [
//     { valueName: 'surveyTitle', label: 'Survey Title', errorMessage: 'You need to put a survey title.' },
//     { valueName: 'subject', label: 'Subject', errorMessage: 'You need to put an email subject.' },
//     { valueName: 'body', label: 'Body', errorMessage: 'You need to put an email body.' },
//     { valueName: 'emails', label: 'Emails of Recipients(CSV)', errorMessage: 'You need to put the emails of recipients.' }
// ]

class SurveyForm extends Component {
    renderFields = () => {
        return _.map(formFields, ({ valueName, label, errorMessage }) => {
            return <Field key={ valueName } type="text" name={ valueName } label={ label } errorMessage={ errorMessage } component={ SurveyField } />;
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.props.handleSubmit(() => this.props.onSurveyReview()) }>
                    { this.renderFields() }
                    <Link to="/" className="btn btn-primary">Cancel</Link>
                    <button type="submit">Next</button>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(formFields, ({ valueName, errorMessage }) => {
        if (!values[ valueName ]) {
            errors[ valueName ] = errorMessage;
        }
    });

    return errors;
};

export default reduxForm({
    form: 'surveyForm',
    validate: validate,
    destroyOnUnmount: false
})(SurveyForm);

