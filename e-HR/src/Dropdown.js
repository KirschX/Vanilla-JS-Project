import Pagination from "/web/src/Pagination.js"

export default function Dropdown (options,data) {

    this.render = () => {
        document.getElementById("dropdown").innerHTML = ""
        const select = document.createElement("select")
        select.setAttribute("id", "cntPerPage")
        for(let i =0; i<options.length; i++){
            const option = document.createElement("option")
            option.setAttribute("value", options[i])
            option.innerHTML = `${options[i]}개씩`
            select.appendChild(option)
        }

        select.addEventListener("change", (e) => {
            let totalItemsCount = data.length || 25;
            let itemsPerPage = +e.target.value;
           
            let pagesCount = Math.ceil(totalItemsCount/itemsPerPage);
            let currentPage = 1;

            new Pagination(data).setPagination(totalItemsCount, itemsPerPage, pagesCount, currentPage);
        })

        document.getElementById("dropdown").appendChild(select);
    }

    this.render()
}