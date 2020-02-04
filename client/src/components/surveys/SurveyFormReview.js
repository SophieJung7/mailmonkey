import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import * as actions from '../../actions';
import { IoIosMail, IoIosArrowBack } from "react-icons/io";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={ name }>
                <label className="font-weight-bold text-secondary">{ label }</label>
                <p>{ formValues[ name ] }</p>
            </div>
        );
    });
    return (
        <div className="mt-5">
            <h5>Please confirm your entries.</h5>
            { reviewFields }
            <div className="d-flex justify-content-between mt-5">
                <button className="btn btn-dark rounded-0 px-5" onClick={ onCancel }>
                    <IoIosArrowBack />  Back
                </button>
                <button
                    onClick={ () => submitSurvey(formValues) }
                    className="btn btn-primary rounded-0 px-5">
                    Send Survey  <IoIosMail />
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);