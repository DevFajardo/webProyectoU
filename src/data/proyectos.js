export const proyectos = [
  {
    id: 1,
    nombre: "Sistema de Riego Automático",
    descripcion: "Diseño de un sistema para el riego automático de cultivos.",
    fecha: "2023-11-07",
    hora: "18:07:45",
    estado: "ACTIVO",
  },
  {
    id: 2,
    nombre: "Energías Renovables",
    descripcion: "Investigación en fuentes de energía sostenible y renovable.",
    fecha: "2023-11-07",
    hora: "18:07:45",
    estado: "ACTIVO",
  },
  {
    id: 3,
    nombre: "Videojuego Educativo",
    descripcion:
      "Desarrollo de un videojuego interactivo para aprender matemáticas.",
    fecha: "2023-11-07",
    hora: "18:07:45",
    estado: "ACTIVO",
  },
  {
    id: 4,
    nombre: "Plataforma de Aprendizaje",
    descripcion:
      "Creación de una plataforma web para la educación a distancia.",
    fecha: "2023-11-07",
    hora: "18:07:45",
    estado: "ACTIVO",
  },
  {
    id: 5,
    nombre: "Investigación en IA",
    descripcion:
      "Investigación en el campo de la Inteligencia Artificial para desarrollar algoritmos avanzados.",
    fecha: "2023-11-07",
    hora: "18:07:45",
    estado: "ACTIVO",
  },
  {
    id: 6,
    nombre: "Proyecto de Aplicaciones Móviles",
    descripcion:
      "Desarrollo de una aplicación móvil para la gestión de proyectos.",
    fecha: "2023-11-07",
    hora: "18:07:45",
    estado: "ACTIVO"
  },
];
export const buscarProyecto = (id) => {
  return proyectos.find((pr) => pr.id === id);
};
