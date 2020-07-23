const { generateFileList } = require("./src/crawler");
const { join } = require("path");
const fs = require("fs");
const parseMD = require("parse-md").default;

const frontpageData = generateFileList(join(__dirname, "content")).nodes;

module.exports = () => {
  const pages = [
    { url: "/services/" },
    {
      url: "/",
      seo: {
        cover: "/assets/profile.jpg",
      },
      data: frontpageData,
    },
  ];

  return pages;
};
