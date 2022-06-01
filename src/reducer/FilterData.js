const FilterData = (arr, type) => {
    switch (type) {
        case 'SHOES':
            return [...arr].filter((val) => val.categoryName === 'shoe')
        case 'CLOTHING':
            return [...arr].filter((val) => val.categoryName === 'men' || val.categoryName === 'women')
        case 'ALL':
            return [...arr]
        case 'MEN':
            return [...arr].filter((val) => val.categoryName === 'men')
        case 'WOMEN':
            return [...arr].filter((val) => val.categoryName === 'women')
        case 'L':
            return [...arr].filter((val) => val.size === 'L')
        case 'M':
            return [...arr].filter((val) => val.size === 'M')
        case 'S':
            return [...arr].filter((val) => val.size === 'S')
        case 'US10':
            return [...arr].filter((val) => val.size === 'US10')
        case 'US9':
            return [...arr].filter((val) => val.size === 'US9')
        case 'US8':
            return [...arr].filter((val) => val.size === 'US8')
        case 'US7':
            return [...arr].filter((val) => val.size === 'US7')
        case 'US6':
            return [...arr].filter((val) => val.size === 'US6')
        case 'HIGH_TO_LOW':
            return [...arr].sort((a, b) => b.price - a.price)
        case 'LOW_TO_HIGH':
            return [...arr].sort((a, b) => a.price - b.price)
        case 'size_1':
            return [...arr].filter((val) => val.rating === 1)
        case 'size_2':
            return [...arr].filter((val) => val.rating === 2)
        case 'size_3':
            return [...arr].filter((val) => val.rating === 3)
        case 'size_4':
            return [...arr].filter((val) => val.rating === 4)
        case 'size_5':
            return [...arr].filter((val) => val.rating === 5)
        default:
            return arr
    }
}

export {FilterData}