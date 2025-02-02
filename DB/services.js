const services = [
  {
    id: 1,
    name: "Cambio de llantas",
    description: "Cambio de llantas de un vehiculo",
    img: "wheel",
    options: [
      {
        label: "Tipo de llanta",
        items: ["205.55R15"],
      },
      {
        label: "Marca de llanta",
        items: ["Michelin"],
      },
      {
        label: "Cantidad de llantas",
        items: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 2,
    name: "Cambio de rines",
    description: "Cambio de rines de un vehiculo",
    img: "rim",
    options: [
      {
        label: "Tipo de rin",
        items: ["205.55R15"],
      },
      {
        label: "Material de rin",
        items: ["Aluminio", "Hierro"],
      },
      {
        label: "Marca de rin",
        items: ["Michelin"],
      },
      {
        label: "Cantidad de rines",
        items: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 3,
    name: "Llenado de combustible",
    description: "Reabastecimiento de combustiible de un vehiculo",
    img: "fuel",
    options: [
      {
        label: "Tipo de combustible",
        items: ["Gasolina", "Diesel"],
      },
      {
        label: "Variación de combustible",
        items: ["Magna", "Premium"],
      },
      {
        label: "Cantidad de combustible (L)",
        items: ["5", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
      },
    ],
  },
  {
    id: 4,
    name: "Servicio de grúa",
    description: "Servicio de grúa para un vehiculo",
    img: "crane",
    options: [],
  },
  {
    id: 5,
    name: "Lavado de vehiculo",
    description: "Lavado de vehiculo",
    img: "carwash",
    options: [
      {
        label: "Tipo de lavado",
        items: ["Exterior", "Interior", "Completo (interior y exterior)"],
      },
    ],
  },
  {
    id: 6,
    name: "Diagnostico de problemas",
    description: "Diagnostico de problemas de un vehiculo",
    img: "diagnose",
    options: [
      {
        label: "Tipo de diagnostico",
        items: ["General", "Mecanico", "Electrico", "Mecanico y electrico"],
      },
    ],
  },
]

export default services
