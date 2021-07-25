

        var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
        });

        function toggleMenu(){
            const menuToggle = document.querySelector('.toggle');
            const navigation = document.querySelector('.navigation')
            menuToggle.classList.toggle('active')
            navigation.classList.toggle('active')
        }

        function miembro(n){
          var foto = '';
          var fundador = "";
          var apodo = '';
          var nombre = '';
          var cargo = '';
          var ruta = '';
          switch(n) {
            case 1:
              foto = '../img/ft1.png';
              fundador ="<img src='../img/logo_fundador.svg' class='logo_fundador'>";
              nombre = 'Pablo Fuente';
              cargo = 'Presidente';
              ruta = 'miembros/juan_pablo.html';
              break;
            case 2:
              foto = '../img/ft2.png';
              fundador ="<img src='../img/logo_fundador.svg' class='logo_fundador'>";
              nombre = 'Raul Salas';
              cargo = 'Vice Presidente';
              ruta = 'miembros/raul_salas.html';
              break;
            case 3:
              foto = '../img/ft3.png';
              fundador ="<img src='../img/logo_fundador.svg' class='logo_fundador'>";
              nombre = 'Juan Jose';
              cargo = 'Miembro';
              ruta = 'miembros/juan_jose.html';
              break;
            case 4:
              foto = '../img/ft4.png';
              nombre = 'Alex Vejar';
              cargo = 'Sargento de Armas';
              ruta = 'miembros/alex_vejar.html';
              break;
            case 5:
              foto = '../img/fot_t1.png';
              nombre = 'Nicollette Grace';
              cargo = 'Secretaria';
              ruta = 'miembros/nicollette_grace.html';
              break;
            default:
              break;
          }
          var eti = "";
            eti += "<div class='card'>";
            eti += "  <div class='circle_t'>";
            eti += "    <div class='img_t'>";
            eti += "      <img src='"+foto+"'>";
            eti += "    </div>";
            eti += "  </div>";
            eti += "  <div class='content_t'>";
            eti += "    <a href='#'>";
            eti += "      <i class='fa fa-whatsapp' aria-hidden='true'></i>";
            eti += "    </a>";
            eti += fundador;
            eti += "    <h3>"+nombre+"</h3>";
            eti += "    <div class='textIcon_t'>";
            eti += "      <h4>"+cargo+"</h4>";
            eti += "      <a href='"+ruta+"'>";
            eti += "        <i class='fa fa-arrow-right' aria-hidden='true'></i>";
            eti += "      </a>";
            eti += "    </div>";
            eti += "  </div>";
            eti += "</div>";
            // eti += "<a href='miembros/miembro"+n+".html'>Ver más</a>";
            document.getElementById('casilla_miembros').innerHTML = eti;
        }

        window.addEventListener("load", aleatorio, false);
        
        var textos = new Array()
        textos[0] = '" Aveces hay que pasar por caminos difíciles para llegar a lugares maravillosos. "';
        textos[1] = '" Vive feliz, tan feliz que no sepas si vives, sueñas o estás en tu moto. "';
        textos[2] = '" Cuatro ruedas mueven el cuerpo, dos ruedas mueven el alma. "';
        textos[3] = '" La felicidad no es cuestión de posesiones, es cuestión de hechos y vivencias. "';
        textos[4] = '" No puedes volver atrás y cambiar el principio, pero puedes comenzar de donde estás y cambiar el final. "';
        textos[5] = '" Perder un mapa es el inicio de una gran aventura. "';
        textos[6] = '" Cómo voy a huir de mi locura, si con ella me siento LIBRE. "';
        textos[7] = '" Motívame, apóyame o apartate de mí camino. "';
        textos[8] = '" Muy pocos saben el desorden de emociones que provoca una moto. "';
        textos[9] = '" No importa si avanzas lentamente, lo que importa es que jamás te detengas. "';
        textos[10] = '" Aprende a vencer tus miedos y sale a recorrer TÚ CAMINO. "';
        textos[11] = '" Nacimos para cometer errores y aprender de ellos, no para fingir que somos perfectos. "';
        textos[12] = '" No importa la moto que tengas, lo que importa es la DISFRUTES. "';
        textos[13] = '" La imaginación te puede llevar a muchos lados, pero una moto te los puede hacer REALIDAD. "';
        textos[14] = '" Concentrate en escuchar lo hermoso que suena tú moto y no en escuchar tus problemas. "';
        textos[15] = '" Los LÍDERES no crean seguidores, crean más LÍDERES. "';
        textos[16] = '" Para llevarse bien no se necesitan las mismas ideas, se necesita el mismo respeto. "';
        textos[17] = '" Cualquier cosa que acelere tú corazón vale la pena...!!! "';
        textos[18] = '" Seguir cuando no crees que puedes más, es lo que te hace diferente a los demás. "';
        textos[19] = '" El día que comprendí que lo único que me voy a llevar es lo que vivo, empecé a vivir lo que me quiero llevar. "';
        textos[20] = '" Toma riesgos, si ganas serás más feliz, si pierdes serás más sabio. "';

        function aleatorio() {
            document.getElementById("resultado").innerHTML = "";//Limpia el mensaje anterior
            nro = Math.floor(Math.random() * (textos.length - 0) + 0);//obtienes el valor aleatorio siempre acorde al tamaño de tu array
            document.getElementById("resultado").innerHTML = textos[nro];//imprime resultado
        }      
