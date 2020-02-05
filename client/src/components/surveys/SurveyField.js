import React from 'react';

const SurveyField = ({ input, meta, label, name, errorMessage }) => {
    const touched = meta.touched;
    const error = meta.error;

    return (
        <div>
            <h1>{ label }</h1>
            <input { ...input } />
            <div>{ touched && error }</div>
        </div>
    );
};

export default SurveyField;

