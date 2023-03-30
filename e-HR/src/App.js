import Table from "/web/src/Table.js";
import Pagination from "/web/src/Pagination.js";
import Dropdown from "/web/src/Dropdown.js";

export default function App({ $target }) {
  // this.state = {

  // }

  // this.setState = {

  // }

  this.render = async () => {
    const res = await fetch("/web/src/data.json");
    if (res.ok) {
      let json = await res.json();
      new Table(json.slice(0,5));
      new Pagination(json);
      let options = [5,15]
      new Dropdown(options,json)
    } else {
      throw new Error("요청 실패");
    }
  };

  this.render();
}
