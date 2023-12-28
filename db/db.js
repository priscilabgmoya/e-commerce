const mueblesOficina = [
    {
      id: 1,
      nombre: "Silla Ergonómica",
      descripcion: "Silla de oficina ergonómica con respaldo ajustable, diseñada para proporcionar comodidad durante largas horas de trabajo. Tapizada en cuero sintético de alta calidad. Disponible en colores negro y gris.",
      precio: 150,
      descuento: 30,
      porcentaje_descuento: 20,
      url_imagen: "https://ejemplo.com/silla.jpg"
    },
    {
      id: 2,
      nombre: "Escritorio Ejecutivo",
      descripcion: "Escritorio de oficina con diseño ejecutivo, equipado con cajones para un almacenamiento conveniente. Construido con materiales de alta calidad para mayor durabilidad y estilo contemporáneo.",
      precio: 300,
      descuento: 50,
      porcentaje_descuento: 16.67,
      url_imagen: "https://ejemplo.com/escritorio.jpg"
    },
    {
      id: 3,
      nombre: "Lámpara LED",
      descripcion: "Lámpara de escritorio LED moderna y eficiente energéticamente. Equipada con control táctil para ajustar la intensidad de la luz. Ideal para proporcionar iluminación focal durante tareas detalladas.",
      precio: 50,
      descuento: 10,
      porcentaje_descuento: 20,
      url_imagen: "https://ejemplo.com/lampara.jpg"
    },
    {
      id: 4,
      nombre: "Estantería Modular",
      descripcion: "Estantería modular diseñada para adaptarse a diversas necesidades de almacenamiento en la oficina. Estantes ajustables para acomodar diferentes tamaños de objetos. Construcción resistente y acabado contemporáneo.",
      precio: 200,
      descuento: 25,
      porcentaje_descuento: 12.5,
      url_imagen: "https://ejemplo.com/estanteria.jpg"
    },
    {
      id: 5,
      nombre: "Archivador Metálico",
      descripcion: "Archivador metálico duradero con tres cajones y sistema de bloqueo para mayor seguridad. Ideal para organizar documentos y suministros de oficina. Construcción resistente y diseño funcional.",
      precio: 180,
      descuento: 20,
      porcentaje_descuento: 11.11,
      url_imagen: "https://ejemplo.com/archivador.jpg"
    },
    {
      id: 6,
      nombre: "Mesa de Reuniones",
      descripcion: "Mesa de reuniones espaciosa diseñada para acomodar hasta 6 personas. Superficie resistente y duradera para reuniones productivas. Elegante y funcional, perfecta para espacios de colaboración.",
      precio: 500,
      descuento: 75,
      porcentaje_descuento: 15,
      url_imagen: "https://ejemplo.com/mesa_reuniones.jpg"
    },
    {
      id: 7,
      nombre: "Sillón Ejecutivo",
      descripcion: "Sillón ejecutivo de oficina con diseño elegante y respaldo alto para un soporte óptimo. Tapizado en cuero genuino para un aspecto lujoso. Base resistente y ruedas giratorias para mayor movilidad.",
      precio: 250,
      descuento: 40,
      porcentaje_descuento: 16,
      url_imagen: "https://ejemplo.com/sillon_ejecutivo.jpg"
    },
    {
      id: 8,
      nombre: "Armario con Puertas Correderas",
      descripcion: "Armario de oficina con puertas correderas para un acceso fácil y ahorro de espacio. Interior configurable para adaptarse a diferentes necesidades de almacenamiento. Construcción robusta y diseño moderno.",
      precio: 400,
      descuento: 60,
      porcentaje_descuento: 15,
      url_imagen: "https://ejemplo.com/armario.jpg"
    },
    {
      id: 9,
      nombre: "Pizarra Magnética",
      descripcion: "Pizarra magnética diseñada para presentaciones creativas y organización visual. Superficie magnética para la fijación de notas y documentos. Marco de aluminio resistente y accesorios de montaje incluidos.",
      precio: 80,
      descuento: 15,
      porcentaje_descuento: 18.75,
      url_imagen: "https://ejemplo.com/pizarra.jpg"
    },
    {
      id: 10,
      nombre: "Mesa Auxiliar con Ruedas",
      descripcion: "Mesa auxiliar con ruedas para facilitar la movilidad en entornos de oficina flexibles. Superficie resistente y diseño moderno. Ideal para colaboración y áreas de descanso.",
      precio: 120,
      descuento: 18,
      porcentaje_descuento: 15,
      url_imagen: "https://ejemplo.com/mesa_auxiliar.jpg"
    },
    {
      id: 11,
      nombre: "Reposapiés Ajustable",
      descripcion: "Reposapiés ajustable diseñado para proporcionar comodidad ergonómica durante largas horas de trabajo. Superficie acolchada y ajuste personalizable. Mejora la postura y reduce la fatiga.",
      precio: 30,
      descuento: 5,
      porcentaje_descuento: 16.67,
      url_imagen: "https://ejemplo.com/reposapies.jpg"
    },
    {
      id: 12,
      nombre: "Cajonera Móvil con Llave",
      descripcion: "Cajonera móvil con tres cajones y cerradura para mantener documentos y objetos seguros. Ruedas para facilitar la movilidad. Construcción duradera y diseño funcional.",
      precio: 90,
      descuento: 15,
      porcentaje_descuento: 16.67,
      url_imagen: "https://ejemplo.com/cajonera.jpg"
    },
    {
      id: 13,
      nombre: "Biblioteca de Pared",
      descripcion: "Biblioteca de pared diseñada para exhibir libros y elementos decorativos. Estantes ajustables para adaptarse a diferentes alturas. Construcción resistente y acabado contemporáneo.",
      precio: 150,
      descuento: 25,
      porcentaje_descuento: 16.67,
      url_imagen: "https://ejemplo.com/biblioteca.jpg"
    },
    {
      id: 14,
      nombre: "Taburete Alto",
      descripcion: "Taburete alto con diseño moderno, ideal para zonas de trabajo o barras de cocina. Asiento cómodo y base resistente. Disponible en varios colores para combinar con la decoración.",
      precio: 60,
      descuento: 10,
      porcentaje_descuento: 16.67,
      url_imagen: "https://ejemplo.com/taburete.jpg"
    },
    {
      id: 15,
      nombre: "Candelabro Moderno",
      descripcion: "Candelabro de diseño elegante para iluminación ambiental en espacios de oficina. Fabricado con materiales de alta calidad y acabado moderno. Añade un toque de sofisticación al entorno.",
      precio: 40,
      descuento: 8,
      porcentaje_descuento: 20,
      url_imagen: "https://ejemplo.com/candelabro.jpg"
    },
    {
      id: 16,
      nombre: "Biombos Separadores",
      descripcion: "Biombos separadores diseñados para crear áreas privadas en oficinas abiertas. Estructura resistente y paneles de tela para mayor privacidad. Configuración modular para adaptarse a diferentes espacios.",
      precio: 180,
      descuento: 30,
      porcentaje_descuento: 16.67,
      url_imagen: "https://ejemplo.com/biombos.jpg"
    },
    {
      id: 17,
      nombre: "Organizador de Escritorio",
      descripcion: "Organizador de escritorio con compartimentos para mantener ordenados bolígrafos, clips y otros suministros. Diseño compacto y duradero. Aumenta la eficiencia en el espacio de trabajo.",
      precio: 25,
      descuento: 5,
      porcentaje_descuento: 20,
      url_imagen: "https://ejemplo.com/organizador.jpg"
    },
    {
      id: 18,
      nombre: "Papelera de Acero Inoxidable",
      descripcion: "Papelera de oficina fabricada en acero inoxidable con diseño moderno y elegante. Tamaño compacto para espacios de trabajo reducidos. Duradera y fácil de limpiar.",
      precio: 20,
      descuento: 3,
      porcentaje_descuento: 15,
      url_imagen: "https://ejemplo.com/papelera.jpg"
    },
    {
      id: 19,
      nombre: "Reloj de Pared Moderno",
      descripcion: "Reloj de pared moderno diseñado para agregar un toque contemporáneo a oficinas y salas de espera. Fabricado con materiales de alta calidad y mecanismo preciso. Fácil de instalar.",
      precio: 35,
      descuento: 7,
      porcentaje_descuento: 20,
      url_imagen: "https://ejemplo.com/reloj.jpg"
    },
    {
      id: 20,
      nombre: "Sofá Modular",
      descripcion: "Sofá modular diseñado para áreas de descanso y colaboración en entornos de oficina. Asientos cómodos y configuración versátil. Tapizado en tela de alta calidad y disponible en varios colores.",
      precio: 700,
      descuento: 100,
      porcentaje_descuento: 14.29,
      url_imagen: "https://ejemplo.com/sofa.jpg"
    }
  ];

  export{
    mueblesOficina
  }
  