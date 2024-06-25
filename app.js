
const response = await fetch(url);
const catData = await response.json();
firstAttributes = catData.data[2]
for(let i=0; i<=10; i++){
const imageUrl = imageUrls[i % imageUrls.length];

newItem += `
<div class="cardmy-4" >
<div class="title">
<h2 class="card-title">${catData.data[i].attributes.name}</h2>
</div>
    <img class="card-img-top" src="${imageUrl}" alt="Dog ${i + 1}>
    <div class="card-body">
     <p class="dog-text">${catData.data[i].attributes.description} </p>

    <div class="details-container">
     <div class="detail-section style="margin-left:5px;">
                <h4>Life:</h4>
                <p>Max - ${catData.data[i].attributes.life.max}</p>
                <p>Min - ${catData.data[i].attributes.life.min}</p>
            </div>

            <div class="detail-section">
                <h4>Male Weight:</h4>
                <p>Max - ${catData.data[i].attributes.male_weight.max}</p>
                <p>Min - ${catData.data[i].attributes.male_weight.min}</p>
            </div>

            <div class="detail-section" style="margin-right: 3px;">
                <h4>Female Weight:</h4>
                <p>Max - ${catData.data[i].attributes.female_weight.max}</p>
                <p>Min - ${catData.data[i].attributes.female_weight.min}</p>
            </div>
        </div>
        </div>
</div>
<br/>
`
console.log( catData.data[i].attributes)
ctn.innerHTML = newItem;
}



} catch (error) {
    console.log(error)
}

}
logSomething()