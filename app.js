const items = [
    {
        date: "5th Sept 2016",
        description: "Thai Yellow Curry Noodles with Shiitake Mushrooms",
        nationality: "THAI",
        itemImage: "recipe1.png"
    }
]

function init() {
    items.map((item) => {
        const { date, nationality, description, itemImage } = item;
        document.getElementById("cards").innerHTML += `<div class="card">
            <div class="card-body">
                <div class="heading-card">
                    <p class="text-date">${date}</p>
                    <p class="text-date">${nationality}</p>
                </div>
                <p class="text">${description}</p>
            </div>
            <img src=images/${itemImage} alt="">
        </div>`
    })
}

var ct = 1;
function add_friend()
{
	ct++;
	var div1 = document.createElement('div');
	div1.id = ct;
	// link to delete extended form elements
	var delLink = `<button onclick="javascript:delIt(${ct})">Remove</button>`;
	div1.innerHTML = document.getElementById('newformtpl').innerHTML;
	document.getElementById('newform').appendChild(div1);
    document.getElementById(ct).getElementsByClassName('form')[0].innerHTML = document.getElementById(ct).getElementsByClassName('form')[0].innerHTML + delLink;
}
// function to delete the newly added set of elements
function delIt(eleId)
{
	var ele = document.getElementById(eleId);
	var parentEle = document.getElementById('newform');
	parentEle.removeChild(ele);
}

function showFilter() {

}

init();