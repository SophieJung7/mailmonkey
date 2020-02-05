import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

    const renderFields = _.map(formFields, ({ valueName, label }) => {
        return (
            <div key={ valueName }>
                <label>{ label }</label>
                <p>{ formValues[ valueName ] }</p>
            </div>
        );
    });


    return (
        <div>
            <div>Please check your entries.</div>
            { renderFields }
            <button onClick={ onCancel }>Cancel</button>
            <button type="submit" onClick={ () => submitSurvey(formValues) }>Submit</button>
        </div>
    );
};

const mapStateToProps = state => {
    return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(SurveyFormReview);
