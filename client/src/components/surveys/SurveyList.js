import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    //reverse() makes the newest survey shown first.
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className='card mt-5 rounded-0' key={survey._id}>
          <div className='card-header'>{survey.title}</div>
          <div className='card-body'>
            <h5 className='card-title'>{survey.body}</h5>
            <a href='#' className='card-link'>
              Yes: {survey.yes}
            </a>
            <a href='#' className='card-link'>
              No: {survey.no}
            </a>
          </div>
          <div class='card-footer text-muted'>
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = state => {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
