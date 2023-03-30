import Table from "/web/src/Table.js"

export default function Pagination (data) {
    const $target = document.getElementById("pagination")


    
    this.setPagination = function (totalItemsCount, itemsPerPage, pagesCount, currentPage) {
        // $target.innerHTML = Array.from({length: pagesCount}).reduce((acc, item, index) => {
        //     const isCurrentPage = currentPage == index+1;
        //     // return(acc + (isCurrentPage ? `<button style="color:red;">${index+1}</button>`: `<button>${index+1}</button>` ))
        //     const $button = document.createElement("button");
        //     $button.addEventListener("click", (e) => {
        //         console.log(e.target.innerHTML())
        //     })
        //     return(acc + $button)
        // }, ``)
        $target.innerHTML =""

        let end = currentPage*itemsPerPage
        let start = end - itemsPerPage
        new Table(data.slice(start, end))

        setPrevAndNext("prev", totalItemsCount, itemsPerPage, pagesCount, currentPage)

        for(let i=0; i<pagesCount; i++){
            const $button = document.createElement("button")
            $button.addEventListener("click", (e) => {
                let currentPage = +e.target.innerHTML
                this.setPagination(totalItemsCount, itemsPerPage, pagesCount, currentPage)
                let end = currentPage*itemsPerPage
                let start = end - itemsPerPage
                new Table(data.slice(start, end))
            })
            $button.innerHTML = i+1
            if(i+1 === currentPage) $button.style.color="red"
            $target.appendChild($button)
        }

        setPrevAndNext("next", totalItemsCount, itemsPerPage, pagesCount, currentPage)
    }

    function setPrevAndNext (direction, totalItemsCount, itemsPerPage, pagesCount, currentPage) {
        const $button = document.createElement("button")
        $button.innerHTML = direction === "prev" ? "<<" : ">>"
        $button.addEventListener("click", () => {
            currentPage = (direction === "prev") ? 1 : pagesCount 
            this.setPagination(totalItemsCount, itemsPerPage, pagesCount, currentPage)
            direction === "prev" ? new Table(data.slice(0, itemsPerPage)) : new Table(data.slice(totalItemsCount - itemsPerPage, totalItemsCount)) 
        })
        $target.appendChild($button)
    }

  


    this.render = () => {
        let totalItemsCount = data.length || 25;
        let itemsPerPage = 5;
        let pagesCount = Math.ceil(totalItemsCount/itemsPerPage);
        let currentPage = 1;

        this.setPagination(totalItemsCount, itemsPerPage, pagesCount, currentPage);
    }

    this.render()
}