$(document).ready(function() {
    var dataSource = new kendo.data.DataSource()
    $("#navBar").kendoMenu();
    var Car = [{model:"Bmw", price:"5000$",country:"Armenia", picture:"img/bmw.png", id:1},
                {model:"Mercedes-Benz", price:"8000$",country:"Georgia", picture:"img/m.png", id:1},
                {model:"Audi", price:"3500$",country:"Albania", picture:"img/audi.png", id:3},
                {model:"Opel", price:"1500$",country:"Francia", picture:"img/opel.png", id:4},
                {model:"Ferrari", price:"15000$",country:"Francia", picture:"img/ferari.png", id:5},
                {model:"Bmw M6", price:"7500$",country:"USA", picture:"img/m6.png", id:6},
                {model:"Tesla", price:"150500$",country:"Francia", picture:"img/tesla.png", id:7},
                {model:"mercedes_Benz-Cl", price:"15500$",country:"Germania", picture:"img/cl.png", id:8},
                ]
    $("#grid").kendoGrid({
        columns:[{title:"id", field:"id"},
            {title:"Model", field:"model"},
                {title:"Price", field:"price"},
                {title:"Country", field:"country"},
                {title:"img", field:"picture", 
                template:  '<img src="#= picture #" alt="image"  class="img"/>'},
                { command: "edit" }],
                dataSource: {
                    data:Car,
                    pageSize:5,
                    schema: {
                        model: {
                          id: "id",
                          fields: {
                            "id": { type: "number" }
                          }
                        }
                      }
                },
                pageable:true,
                sortable:{mode:"multiple"},
                groupable:true,
                selectable: true,            
                editable: "popup",
    edit: function(e) {
      if (!e.model.isNew()) {
        var numeric = e.container.find("input[name=id]").data("kendoNumericTextBox");
        numeric.enable(false);
      }
    }
    });
});
           

        

   