// change image src and desc
function setImageSrc(src, desc, price) {
    document.getElementById('art').src = 'images/' + src;
    document.getElementById('desc').innerText = desc;
    document.getElementById('price').innerText = price;
    document.getElementById('total').innerText = price;
}

// calculate total price includes shiping cost
function calCulateTotal(shippingCost) {
    const totalPriceField = document.getElementById('total');
    const shipingChargedField = document.getElementById('shipping');
    const prevTotalPrice = parseInt(document.getElementById('price').innerText);
    shipingChargedField.innerText = shippingCost;
    totalPriceField.innerText = prevTotalPrice + shippingCost;
}
// global variable for change description
document.getElementById('first').addEventListener('click', function () {
    const desc1 = `Vaunted fellow festal in calm was to.His none riot
        adieu lineage dote girls. To sick goodl deemed land he.
        Lorem et diam nonumy ipsum eos at
        magna duo accusam`;   
    setImageSrc('1.jpg', desc1, 750);
});
document.getElementById('second').addEventListener('click', function () {
    const desc2 = `Drängt glück naht lebens noch nach den,
                neu unbekannten gedränge erste mich vor ernsten mein.
                Folgenden sich bang sich lied. Aliquyam lorem sadipscing
                diam justo gubergren amet ipsum. Nonumy clita`;  
    setImageSrc('2.jpg', desc2, 450);
});
document.getElementById('third').addEventListener('click', function () {
    const desc3 = `Sidéraux quille que travers songer a tout
                qu un azurs anciens. Plus plus n auraient moi
                tordus ma. Cotons repeché revé de.Et ipsum labore
                consetetur ipsum kasd sea et duo dolor`;

    setImageSrc('3.jpg', desc3, 679);
});

// free and express shiping handling
document.getElementById('free').addEventListener('click', function () {
    calCulateTotal(5);
});
document.getElementById('express').addEventListener('click', function () {
    calCulateTotal(30);
});

