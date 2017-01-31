
$(function() {

  $(".item").on("click", function(event) {
    event.preventDefault()
    this.parent().remove()
    var elementThatWasClicked = $(this)

  })

})
