import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { imageUrl, title, description, url } = this.props;
    return (
      <div className="container-fluid">
        <div className="mx-2">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                !imageUrl
                  ? "https://image.stern.de/34506466/t/zv/v1/w1440/r1.7778/-/01--urnnewsmldpacom2009010124030199177379v3w800h600l640t425r1920b1275jpeg---6b3e390b91a9a04c.jpg"
                  : imageUrl
              }
              className=" "
              alt="Image"
              height="210rem"
            />
            <div className="card-body">
              <h5 className="card-title">
                {title ? title.slice(0, 35) : ""}..
              </h5>
              <p className="card-text">
                {description ? description.slice(0, 88) : ""}...
              </p>
              <a href={url} className="btn btn-warning ">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
