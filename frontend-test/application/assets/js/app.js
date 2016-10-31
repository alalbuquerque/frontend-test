$(document).ready(function() {
    var $name = document.getElementById('#name');
    var $tel = document.getElementById('#tel');
    var $email = document.getElementById('#email');

    $('#tel').keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });

    $('input[value="enviar"]').on('click', function(event) {
        event.preventDefault();
            if ($name == '' || $email == '' || $tel == '') {
                console.log('preencha os campos');
            } else {
                var formData = $('#contact-form').serializeArray();
                var data = {};
                $(formData).each(function(index, obj){
                    data[obj.name] = obj.value;
                });
                var list = document.createElement('li');
                list.innerHTML = '<div class="item"><p class="name">' + data.name + '</p><p class="details">' + data.tel + ' - <a href="to:'+ data.email +'" target="_blank">' + data.email + '</a></p></div>';
                document.getElementById('list').appendChild(list);
            }
    });

    $('input[value="cancelar"]').on('click', function(event) {
        event.preventDefault();
        document.getElementById('#name').reset();
        document.getElementById('#tel').reset();
        document.getElementById('#email').reset();
    });
});
