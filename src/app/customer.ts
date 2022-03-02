

export interface launchDimensions {
    id: number,
    name: string,
    cat: string,
    group: string,
    metricType:string,
}

export interface launchMaturity {
    launchMaturityId: number,
    projectNo: string,
    lmVersion: null,
    ldId: number,
    maturityOrderNo: number,
    category: string,
    metricResponsible: string,
    buildEvent: string,
    goal: number,
    firstValue: number,
    secondValue: number,
    actualValue: number,
    isReleased: boolean,
    dateOfRelease: string,
    amount: number,
    launchDimensionName: string,
}
export interface Product{
    id:number,
    name:string,
    category:string,
    price:number,
    stock:number,
}

