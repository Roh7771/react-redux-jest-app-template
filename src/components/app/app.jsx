import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DataActionCreators } from '../../reducer/data/data';
import getTitle from '../../reducer/data/selectors';

export const PureApp = ({ title, onTitleChange, onTitleReset }) => (
  <div>
    <h1 className="title">{title}</h1>
    <button type="button" onClick={() => onTitleChange('Another Title')}>
      Change title text to Another Title
    </button>
    <button type="button" onClick={() => onTitleReset()}>
      Reset title
    </button>
  </div>
);

PureApp.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onTitleReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  title: getTitle(state),
});

const mapDispatchToProps = dispatch => ({
  onTitleChange: title => {
    dispatch(DataActionCreators.setTitle(title));
  },
  onTitleReset: () => {
    dispatch(DataActionCreators.resetTitle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PureApp);
