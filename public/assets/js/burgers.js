$(document).ready(function(){
    $(".burgerForm").on("submit",function(event){
        event.preventDefault();
        var newBurger = {
          name: $("#burgerForm").val(),
          eaten: 0
        };
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger,
        }).then(function(){
        location.reload();
        })
    });

    $(".eatBurger").on("click", function(event) {
        var id = this.dataset.id;
        $.ajax("/api/burgers/" + id, {
          type: "PUT"
        }).then(function(){
          location.reload();
          });
    });
});