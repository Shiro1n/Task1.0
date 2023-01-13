$( document ).ready(function() {
    const carAttr = {
        "clio": {
            "name": "Renault Clio",
            "price": 350,
        },
        "egea":{
            "name": "Fiat Egea",
            "price": 350,
        },
        "megane":{
            "name": "Renault Megane",
            "price": 400,
        },
        "focus":{
            "name": "Ford Focus",
            "price": 400,
        },
        "corolla":{
            "name": "Toyota Corolla",
            "price": 400,
        },
        "jetta":{
            "name": "VW Jetta",
            "price": 500,
        },
        "passat":{
            "name": "VW Passat",
            "price": 600,
        },
        "qashqai":{
            "name": "Nissan Qashqai",
            "price": 600,
        },
        "vito":{
            "name": "Mercedes Vito",
            "price": 800,
        }
    };

    let selectedCar = "";

    $(".rentButton").on("click", function () {
        selectedCar = $(this).attr("data");
        $("#totalPrice").html(carAttr[selectedCar]["price"]);
        $('#generalModal').modal('show')
    });

    $("#daySelect").on("change", function () {
       const selectedDay = $(this).val();
       const finalPrice = carAttr[selectedCar]["price"] * selectedDay;
       $("#totalPrice").html(finalPrice);
    });
})