// SurveyField contains logic to render a single label and text input.
import React from 'react'

const SurveyField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div className="form-group">
            <label>{ label }</label>
            <input { ...input } className="form-control rounded-0" />
            <small className="form-text text-muted">{ touched && error }</small>
        </div>
    )
}

export default SurveyField;
