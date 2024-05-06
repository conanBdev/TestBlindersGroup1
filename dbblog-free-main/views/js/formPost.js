/**
 * Desabilita por defecto el campo de fecha de publicación.
 * Habilita el campo de fecha de publicación si se selecciona la opción de no publicar (Activo)
 */
$(document).ready(function() {
    $('#publish_date').prop('disabled', true).val('');

    $('input[name="active"]').on('change', function() {
        if (this.id === 'active_on') {
            $('#publish_date').prop('disabled', true).val('');
        } else {
            $('#publish_date').prop('disabled', false);
        }
    });
});