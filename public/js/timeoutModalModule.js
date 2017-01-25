/**
 *
 * Created by jeffersonwu on 1/25/17.
 * v0.0.1
 *
 * Accompanying CSS: timeoutModalModule.css
 */

// ========================================
// TIMEOUT MODAL MODULE ===================

var Modal = {

    create: function(timeout){
        var container = document.createElement('div');
        container.id = 'timeoutModalContainer';
        var veil = document.createElement('div');
        var box = document.createElement('div');
        var spinner = document.createElement('div');

        container.classList.add('timeoutModalContainer');
        veil.classList.add('timeoutModalVeil');
        box.classList.add('timeoutModalBox');
        spinner.classList.add('timeoutModalSpinner');

        box.appendChild(spinner);
        container.appendChild(veil);
        container.appendChild(box);
        document.body.appendChild(container);

        spinner.addEventListener('click', function(e){
            Modal.destroy();
        });
    },
    destroy: function() {
        var modalContainer = document.getElementById('timeoutModalContainer');
        modalContainer.parentNode.removeChild(modalContainer);
    }
};
// TIMEOUT MODAL MODULE ===================
// ========================================


//TODO: Pseudo-code

// create