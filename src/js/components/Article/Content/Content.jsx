import React from 'react';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.refs['content-div'].innerHTML = this.props.reducer.articleContent;
  }

  render() {
    return (
      <div className="article-content-body">
        <div
          ref="content-div"
          className="article-content"
        />
      </div>
    );
  }
}
