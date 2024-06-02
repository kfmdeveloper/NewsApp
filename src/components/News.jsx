import React, { Component, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

class News extends Component {
  static propTypes = {
    PageSize: PropTypes.number,
    category: PropTypes.string,
    textMode: PropTypes.string,
  };
  static defaultProps = {
    PageSize: 20,
    category: "general",
    textMode: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async fetchData() {
    const { category } = this.props;
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2473b90ce7a04a8ebd20fd6977d5d5d9&pageSize=8&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles, loading: false });
  }

  handlePageChange = async (pageNumber) => {
    await this.setState({ page: pageNumber, loading: true }); // Set loading to true before fetching data
    this.fetchData();
  };

  previousHandler = async () => {
    if (this.state.page > 1) {
      await this.setState({ page: this.state.page - 1, loading: true }); // Set loading to true before fetching data
      this.fetchData();
    }
  };

  NextHandler = async () => {
    await this.setState({ page: this.state.page + 1, loading: true }); // Set loading to true before fetching data
    this.fetchData();
  };

  componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      // Fetch new data if category changes
      this.setState({ loading: true }); // Set loading to true before fetching data
      await this.fetchData();
      this.setState({ loading: false }); // Set loading to false after data is fetched
    }
  }

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div>
        <div className="container-fluid pb-md-4 ">
          <nav aria-label="Page navigation example mb-5">
            <ul className="pagination justify-content-center mt-4  ">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button onClick={this.previousHandler} className="page-link">
                  Previous
                </button>
              </li>
              {[1, 2, 3].map((pageNumber) => (
                <li key={pageNumber} className="page-item">
                  <button
                    onClick={() => this.handlePageChange(pageNumber)}
                    className={`page-link ${
                      page === pageNumber ? "active" : ""
                    }`}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li className=" page-item ">
                <button onClick={this.NextHandler} className="page-link">
                  Next
                </button>
              </li>
            </ul>
          </nav>
          <div className="row">
            <h1 className="mb-3 mt-1 text-center">
              World Top {this.props.textMode} Headlines
            </h1>
            {loading ? (
              <div className="text-center mt-5">
                <div className="spinner-border " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              articles.map((element, index) => (
                <div key={index} className="col-md-3 mt-3 ">
                  <div className=" mb-3">
                    <NewsItem
                      imageUrl={element.urlToImage}
                      description={element.description}
                      title={element.title}
                      url={element.url}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <nav aria-label="Page navigation example mb-5">
          <ul className="pagination justify-content-center mt-4  ">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button onClick={this.previousHandler} className="page-link">
                Previous
              </button>
            </li>
            {[1, 2, 3].map((pageNumber) => (
              <li key={pageNumber} className="page-item">
                <button
                  onClick={() => this.handlePageChange(pageNumber)}
                  className={`page-link ${page === pageNumber ? "active" : ""}`}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            <li className=" page-item ">
              <button onClick={this.NextHandler} className="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default News;
