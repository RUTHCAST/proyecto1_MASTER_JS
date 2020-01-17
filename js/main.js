$(document).ready(function(){
    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
          });
    }
    
    if(window.location.href.indexOf('index') > -1){

        var posts=
        [
            {
                title:'Prueba de Titulo 1',
                date:'Publicado el dia'+moment().date()+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY") ,
                content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat. Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta.'
            },
            {
                title:'Prueba de Titulo 2',
                date:'Publicado el dia'+moment().date()+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY") ,
                content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat. Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta.'
            },
            {
                title:'Prueba de Titulo 3',
                date:'Publicado el dia'+moment().date()+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY") ,
                content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat. Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta.'
            },
            {
                title:'Prueba de Titulo 4',
                date:'Publicado el dia'+moment().date()+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY") ,
                content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error maiores quaerat. Porro eaque doloribus quisquam blanditiis pariatur et quae libero a, suscipit repudiandae perferendis quia, commodi nisi sint dicta.'
            }
        ]

        posts.forEach((element,index)=>{
            var post=`
            <article class="post">
                <h2>${element.title}</h2>
                <span class="date">${element.date}</span>
                <p>${element.content}</p>
                <a href="#" class="button-more">Leer Más</a>
            </article>
            `;
            $('#posts').append(post)
        });

    }
    // Cambiar tema
    var theme=$('#themes');
    $('#to-green').click(function(){
        theme.attr('href','css/green.css')
    });

    $('#to-red').click(function(){
        theme.attr('href','css/red.css')
    });

    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css')
    });

    // Scroll arriba
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop:'0'
        }, 500);

        return false;
    });

    // Login Falso
    $('#login, form').submit(function(){
        var form_name=$('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });

        var form_name=localStorage.getItem('form_name');
        var about_parrafo =$('#about p');
       
        if(form_name !=null && form_name!=undefined){
            about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
            about_parrafo.append("<a href='#' id='cerrarSesion'>Cerrar Sesion</a>")
            $('#login').hide();

            $('#cerrarSesion').click(function(){
                localStorage.clear();
                location.reload();
            });
        }

        // Acordeon
        if(window.location.href.indexOf('about') > -1){
            $('#acordeon').accordion();
        }

         // Reloj
        if(window.location.href.indexOf('reloj') > -1){
            setInterval(function(){
                var reloj = moment().format('h:mm:ss a');
                $('#reloj').html(reloj);
            });
           
        }

        // Validation
        if(window.location.href.indexOf('contact') > -1){
            $('form input[name=date]').datepicker({
                dateFormat: 'yy-mm-dd'
            });
            $.validate({
                lang: 'es',
                errorMessagePosition: 'top',
                scrollToTopOnError:true
            });
        };
});