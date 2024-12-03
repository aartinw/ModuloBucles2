type Especialidad = "Medico de familia" | "Pediatria" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatria",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatria",
    edad: 11,
  },
];

//Apartado 1 - a) //
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes): Boolean => paciente.especialidad === "Pediatria"
  );
};

const pacientesDePediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesDePediatria);

//Apartado 1 - b) //
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes): boolean =>
      paciente.especialidad === "Pediatria" && paciente.edad < 10
  );
};

const pacientesDePediatriayMenorde10anios =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesDePediatriayMenorde10anios);

//Apartado 2) //
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente: Pacientes): boolean =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};

const protocoloOn = activarProtocoloUrgencia(pacientes);
console.log(protocoloOn);

//(Apartado 3)//
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((pacientes) => {
    if (pacientes.especialidad === "Pediatria") {
      return {
        ...pacientes,
        especialidad: "Medico de familia",
      };
    }
    return pacientes;
  });
};
const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log(pacientesReasignados);

//Apartado 4//

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente: Pacientes): boolean => paciente.especialidad === "Pediatria"
  );
};

const pediatraACasa = HayPacientesDePediatria(pacientes);
console.log(pediatraACasa);

//Apartado 5//
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (acc, pacientes) => {
      if (pacientes.especialidad === "Medico de familia") {
        acc.medicoDeFamilia += 1;
      } else if (pacientes.especialidad === "Cardiólogo") {
        acc.cardiologia += 1;
      } else if (pacientes.especialidad === "Pediatria") {
        acc.pediatria += 1;
      }
      return acc;
    },
    {
      medicoDeFamilia: 0,
      cardiologia: 0,
      pediatria: 0,
    }
  );
};

const sumaDePacientes = cuentaPacientesPorEspecialidad(pacientes);
console.log(sumaDePacientes);
