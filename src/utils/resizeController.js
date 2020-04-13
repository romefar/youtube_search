class ResizeController  { 

    static handleResize = (initialLoad = true) => { 
        const bodyWidth = document.body.offsetWidth
        const bodyHeight = window.innerHeight - 
                           document.querySelector('.search-bar').offsetHeight -
                           document.querySelector('.header').offsetHeight
        let cardHeight = 0
        let cardWitdth = 0
        let initialRowsCount = 0
        let eachLoadRowsCount = 0

        if(bodyWidth <= 1920) {
            cardHeight = 325
            cardWitdth = 360
            eachLoadRowsCount = 5
        }   
        const elememtsInRow = Math.floor(bodyWidth / cardWitdth)
        
        let rowsCount = 0
        let rowsHeight = 0
        while(rowsHeight < bodyHeight) { 
            rowsHeight += cardHeight
            rowsCount++
        }

        initialRowsCount = elememtsInRow * rowsCount
        
       return initialLoad ? eachLoadRowsCount : initialRowsCount
    }
}

export default ResizeController;