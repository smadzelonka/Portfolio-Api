const { portfolios } = require("./data.js");
const Portfolio = require("../db/models/portfolio.js");

class FakeDB {
  async clean() {
    await Portfolio.deleteMany({});
  }
  async addData() {
    await Portfolio.create(portfolios);
  }
  async populate() {
    await this.clean();
    await this.addData();
  }
}
module.exports = new FakeDB();
