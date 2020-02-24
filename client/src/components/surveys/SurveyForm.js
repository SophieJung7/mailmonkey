// SurveyForm shows a form for a user to add input.
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import { IoIosArrowForward } from "react-icons/io";

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={ name } label={ label } name={ name } component={ SurveyField } type="text" />;
        });
    }

    render() {
        return (
            <div className="mt-5">
                <form onSubmit={ this.props.handleSubmit(() => this.props.onSurveySubmit()) }>
                    { this.renderFields() }
                    <div className="d-flex justify-content-between mt-5">
                        <Link to="/surveys" className="btn btn-dark rounded-0 px-5">
                            Cancel
                        </Link>
                        <button type="submit" className="btn btn-primary rounded-0 px-5" id="mc-embedded-subscribe">Next  <IoIosArrowForward /></button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(formFields, ({ name, noValueError }) => {
        if (!values[ name ]) {
            errors[ name ] = noValueError;
        }
    });

    errors.recipients = validateEmails(values.recipients || '');

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);;