const newTitle = document.getElementById('title')
const newRating = document.getElementById('rating')

$("button").on("click", function(evt){
    evt.preventDefault();
    
    const titleValue = $("<td>").text(newTitle.value);
    const ratingValue = $("<td>").text(newRating.value);

    const newRow = $("<tr>");

    const deleteButton = $("<button>").text("Delete");

    deleteButton.on("click", function(){
        newRow.remove();
    })

    newRow.append(titleValue, ratingValue, deleteButton);
    $("#table").append(newRow);
})