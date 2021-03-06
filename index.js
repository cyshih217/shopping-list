function shoppingList() {
    $('#js-shopping-list-form button').on('click', function(event){
        event.preventDefault();

        const newItem = $('#shopping-list-entry').val();

        if( $('#shopping-list-entry').val() === '' ) {
            alert('Please enter an item.');
        } else {
            $('.shopping-list').append(`
            <li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
            </li>
            `);
        }

        $('#shopping-list-entry').val('');
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}

$(shoppingList);