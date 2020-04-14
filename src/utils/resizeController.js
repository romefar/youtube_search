class ResizeController  { 

    static handleResize = (initialLoad = true) => { 
        const bodyWidth = document.body.offsetWidth
        const bodyHeight = window.innerHeight - 
                           document.querySelector('.search-bar').offsetHeight -
                           document.querySelector('.header').offsetHeight
        let cardHeight = 325
        let cardWitdth = 360
        let initialRowsCount = 0
        let elememtsInRow = 0

        if(bodyWidth < 430) { 
            cardHeight = 285
            cardWitdth = 290
        }
        
        if(bodyWidth > 1900) {
            cardHeight = 325
            cardWitdth = 360
            elememtsInRow = 5
        }   
        elememtsInRow = Math.floor(bodyWidth / cardWitdth)
        
        let rowsCount = 0
        let rowsHeight = 0
        while(rowsHeight < bodyHeight) { 
            rowsHeight += cardHeight
            rowsCount++
        }

        initialRowsCount = elememtsInRow * rowsCount
        console.log(`Initial rows count: ${initialRowsCount}, elements in row ${elememtsInRow}`)
       return initialLoad ? elememtsInRow : initialRowsCount
    }
}

export default ResizeController;