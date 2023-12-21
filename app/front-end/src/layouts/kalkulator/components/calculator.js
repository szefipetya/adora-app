const minQualifiedWage = 269400;
const minUnqualifiedWage = 232000;

const calculateVSZJA = (income, costs, entrepreneurialPay) => {
    const entrepreneurialIncome = (income - costs - entrepreneurialPay);
    const entrepreneurialTax = entrepreneurialIncome * 0.09;
    const entrepreneurialDividentFund = entrepreneurialIncome - entrepreneurialTax;
    const dividentTax = entrepreneurialDividentFund * 0.15;
    const socialTax = entrepreneurialDividentFund * 0.13;
    const totalTax = entrepreneurialTax + dividentTax + socialTax;

    return {
        entrepreneurialTax: entrepreneurialTax,
        dividentTax: dividentTax,
        socialTax: socialTax,
        totalTax: totalTax
    }
}


const calculateAtalany = (workType, hasQualification, costRatio, income, below25TaxCut, below30MotherTaxCut, personalTaxCut, firstMarriageTaxCut, NETAK, disabledTaxCut) => {
    let costFlatRate = income * costRatio;
    let minSocialContributionTax;
    let minSocialSecurityTax;

    if(hasQualification = true){
        minSocialSecurityTax = 12 * minQualifiedWage * 0.185;
        minSocialContributionTax = 12 * minQualifiedWage * 1.125 * 0.13;
    } else {
        minSocialSecurityTax = 12 * minUnqualifiedWage * 0.185;
        minSocialContributionTax = 12 * minUnqualifiedWage * 1.125 * 0.13;
    }

    let socialSecurityTax;
    let socialContributionTax;

    if(workType === "fulltime"){
        socialSecurityTax = Math.max(minSocialSecurityTax, costFlatRate * 0.185);
        socialContributionTax = Math.max(minSocialContributionTax, costFlatRate * 0.13);
    } else if(workType === "parttime") {
        socialSecurityTax = costFlatRate * 0.185;
        socialContributionTax = costFlatRate * 0.13;
    } else if(workType === "retired") {
        socialSecurityTax = 0;
        socialContributionTax = 0;
    }

    if(NETAK){
        costFlatRate = 0;
    }

    if(below25TaxCut || below30MotherTaxCut) {
        costFlatRate = costFlatRate - 6000000 < 0 ? 0 : costFlatRate - 6000000;
    }

    if(personalTaxCut) {
        costFlatRate = costFlatRate - 927600 < 0 ? 0 : costFlatRate - 927600;
    }

    if(firstMarriageTaxCut) {
        costFlatRate = costFlatRate - 400000 < 0 ? 0 : costFlatRate - 400000;
    }

    const personalIncomeTax = costFlatRate * 0.15;

    let localBusinessTax;

    if(income <= 12000000) {
        localBusinessTax = 50000;
    } else if (income <= 18000000){
        localBusinessTax = 120000;
    } else {
        localBusinessTax = 170000;
    }

    return {
        socialSecurityTax: socialSecurityTax,
        socialContributionTax: socialContributionTax,
        personalIncomeTax: personalIncomeTax,
        localBusinessTax: localBusinessTax,
        totalTax: (socialSecurityTax + socialContributionTax + personalIncomeTax + localBusinessTax)
    }
}

const calculateKATA = (KATAMonths, pausedMonths, higherPayOption, partTime) => {
    const totalMonths = KATAMonths - pausedMonths;
    let amountPerMonth;
    if(higherPayOption){
        amountPerMonth = 75000;
    } else if(partTime) {
        amountPerMonth = 25000;
    } else {
        amountPerMonth = 50000;
    }
    const totalTax = totalMonths * amountPerMonth;

    return totalTax;
}

export {
    calculateVSZJA,
    calculateAtalany,
    calculateKATA
}