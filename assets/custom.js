$( document ).ready(function() {
    var Portfolio = {};

    Portfolio.FullPreview = function () {

        $( '.portfolio-item .pi-inner a' ).on( 'click', function (e) {
            e.preventDefault();
            var selected = $( this );
            var content = selected.parents( '.portfolio-item' ).find( '.pi-desc' ).detach();
            selected.parents( '.portfolio' ).children().find( '.single-preview' ).find( '.psp-text' ).prepend(content);
            selected.parents( '.portfolio' ).children().find( '.single-preview' ).find( '.pi-desc' ).css( 'display', 'block' );
            selected.parents( '.portfolio-wrap' ).slideUp( 'slow', function() {
                    selected.parents( '.portfolio' ).find( '.single-preview' ).slideDown();
            });
        });



    };

    Portfolio.FullPreview();
});