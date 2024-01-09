// Tasks: mobile product mapping
// create an array of elements with the brandId and brandName (Eg: Samsung, IPhone)
// create an array of elements with the productId, productName, modelNumber, productPrice,  brandId which should be in the brand array
// create an array of elements with the spareName, sparePrice, productId which should be in the product list
// create a function with a single argument. The argument is an object which can hold productName or spareName
// Condition 1:
// call function with productName in the argument object, then return productName, modelNumber, brandName, productPrice as object
// if the product name doesn't match then return as Not found
// Condition 2:
// call function with spareName in the argument object, then return array of matching objects with spareName, productName, modelNumber, brandName, sparePrice
// if the spareName doesn't match then return as Not found
// Condition 3: 
// Call the function with productName & spareName in the argument object, then return productName, spareName, modelNumber, brandName, sparePrice as object
// if the productName & spareName combination doesn't match, then return not found


const brandArray = [
    { brandId: 1, brandName: "Samsung" },
    { brandId: 2, brandName: "Iphone" }
];
const productArray = [
    { productId: 101, productName: "Galaxy24", modelNumber: "G3459", productPrice: 26785, brandId: 1 },
    { productId: 102, productName: "IphoneY12", modelNumber: "I3562", productPrice: 28905, brandId: 2 }
];
const spareArray = [
    { spareName: "Battery", sparePrice: 500, productId: 101 },
    // { spareName: "Temper Glass", sparePrice: 150, productId: 101 },
    // { spareName: "Battery", sparePrice: 450, productId: 102 },
    { spareName: "Temper Glass", sparePrice: 100, productId: 102 },
];

function productDetails(values) {
    if (values.productName) {
        const result = productArray.find(product => product.productName === values.productName);
        if (result) {
            const brandInfo = brandArray.find(brand => brand.brandId === result.brandId);
            if (brandInfo) {
                return {
                    productName: result.productName,
                    modelNumber: result.modelNumber,
                    brandName: brandInfo.brandName,
                    productPrice: result.productPrice
                };
            }
        } else {
            return "Not found";
        }
    } else if (values.spareName) {
        const output = spareArray.find(spare => values.spareName === spare.spareName);

        if (output) {
            const productInfo = productArray.find(product => product.productId === output.productId);

            if (productInfo) {
                const brandInfo = brandArray.find(brand => brand.brandId === productInfo.brandId);
                if (brandInfo) {
                    return {
                        spareName: output.spareName,
                        productName: productInfo.productName,
                        modelNumber: productInfo.modelNumber,
                        brandName: brandInfo.brandName,
                        sparePrice: output.sparePrice
                    };
                }
            } 
        }
        else {
            return "Not found";
        }
    } else if (values.productName && values.spareName) {
        const productInfo = productArray.find(product => product.productName === values.productName);

        if (productInfo) {
            const matchingSpare = spareArray.find(spare => spare.spareName === values.spareName && spare.productId === productInfo.productId);

            if (matchingSpare) {
                const brandInfo = brandArray.find(brand => brand.brandId === productInfo.brandId);
                if (brandInfo) {
                    return {
                        productName: productInfo.productName,
                        spareName: matchingSpare.spareName,
                        modelNumber: productInfo.modelNumber,
                        brandName: brandInfo.brandName,
                        sparePrice: matchingSpare.sparePrice,
                    };
                }
            }
        }
        else {
            return "Not found";
        }
    } else {
        return "Not found";
    }
}
const result1 = productDetails({ productName: "Galaxy24" });
console.log(result1);
const result2 = productDetails({ productName: "VivoY29" });
console.log(result2);
const result3 = productDetails({ spareName: "Battery" });
console.log(result3);
const result4 = productDetails({ spareName: "Camera" });
console.log(result4);
const result5 = productDetails({ productName: "IphoneY12", spareName: "Temper Glass" });
console.log(result5);
const result6 = productDetails({ productName: "OppoA23"});
console.log(result6);
