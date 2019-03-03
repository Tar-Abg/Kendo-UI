$(document).ready(function() {
    $("#navBar").kendoMenu();
    var Car = [{model:"Bmw", price:"5000$",country:"Armenia", picture:"img/bmw.png"},
                {model:"Mercedes-Benz", price:"8000$",country:"Georgia", picture:"img/m.png"},
                {model:"Audi", price:"3500$",country:"Albania", picture:"img/audi.png"},
                {model:"Opel", price:"1500$",country:"Francia", picture:"img/opel.png"},
                {model:"Ferrari", price:"15000$",country:"Francia", picture:"img/ferari.png"},
                {model:"Bmw M6", price:"7500$",country:"USA", picture:"img/m6.png"},
                {model:"Tesla", price:"150500$",country:"Francia", picture:"img/tesla.png"},
                {model:"mercedes_Benz-Cl", price:"15500$",country:"Germania", picture:"img/cl.png"},
                ]
    $("#grid").kendoGrid({
        columns:[{title:"Model", field:"model"},
                {title:"Price", field:"price"},
                {title:"Country", field:"country"},
                {title:"img", field:"picture", template: "<img class='img' src='#= picture #'/>"}],
                dataSource: {
                    data:Car,
                    pageSize:5
                },
                pageable:true,
                sortable:{mode:"multiple"},
                groupable:true,
                selectable: true,            
                selectable: "multiple row",
    });
});
           

        

   