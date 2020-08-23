let url = "https://davids-restaurant.herokuapp.com/menu_items.json";

let data = null;
let buyItemList = [];

$("document").ready(function(){
    $.get(url,function(jsonObj,success){
        data = jsonObj.menu_items;
        console.log(data.length);

        for (const item in data) {
                let temp = data[item].name;
                let opt=document.createElement("option");
                opt.textContent=temp;
                opt.value=item;
                document.querySelector('#item').appendChild(opt);
            }
    });


    let updateCard = document.querySelector("#demo1");
    updateCard.addEventListener('click',addItem);


    function addItem() {
        document.querySelector('#disp').innerHTML="";
        let top=document.querySelector('#item').value;
        let item=data[top];
        for (key in item) {
            if (key!="id" && key!="small_portion_name" && key!="large_portion_name" && item[key]!=null) {
                let op1=document.createElement("dt");
                op1.className="col-6";
                op1.textContent=key;
                document.querySelector('#disp').appendChild(op1);
                let op2=document.createElement("dd");
                op2.className="col-6";
                op2.textContent=item[key];
                if(key=='price_small' || key=='price_large'){
                    op2.textContent=item[key]+" $";
                }
                else
                {
                    op2.textContent=item[key];
                }
                
                document.querySelector('#disp').appendChild(op2);
            }
        }
    }

    
});

