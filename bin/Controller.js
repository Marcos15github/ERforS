const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const Docente = require('./models/Docente');
const People = require("./models/People");
const Persona = require("./models/Persona");
const Asignatura = require("./models/Asignatura");
const Grado = require('./models/Grado');
const Periodo = require('./models/Periodo');
const Login = require('./models/Login');
const Estudiante = require('./models/Estudiante');
const Recurso = require('./models/Recurso');
const Colegio = require('./models/Colegio');



//hacer el crud de las tablas de mongodb
class Controller{
    constructor(){
        this.connect();
    }
    async connect(){
        try{
            await mongoose.connect("mongodb+srv://Marcos:marcos123@cluster0.m58pp4y.mongodb.net/ERforS?retryWrites=true&w=majority",
            {useNewUrlParser: true}
            );
            console.log("datos guardados correctamente bro")
        }catch(e){
            console.error(e);
        }
    }

// PRUEBA PEOPLE PARA PRACTICAR 
//----------------------------------------------------------------
    //controlador de agregar people
    setPeople(people, res){
        People.create(people, function(err, newPeople){
            if(err) throw err;
            res.send({status: 200, nU: newPeople});
        });
    }
    //controllador de traer people
    getPeople(res){
        People.find({},(err, peoples)=>{
            if(err) throw err;
 
            res.send( peoples );
        })
    };
     //auth 
     getAuth(people, res){
        let {nickname,password} = people;

        People.findOne({nickname},(err, people)=>{
            if(err) {
                res.status(200).send("Error al autenticar Usuario")
            }
            else if (people.nickname == "e"){
                res.status(200).send("No ingreso Usuario")
            }
               else if(!people){
                res.status(200).send("No existe el usuario")
            }
            else
              {
                if (password==people.password)
                res.status(200).send("Loguin exitoso...")
                else 
                res.status(200).send("Usuario invalido")
         
              }
           })
           
    };

//----------------------------------------------------------

// PERSONAS

//---------------------------------------------------------
    //controlador de traer persona
    getPersona(res){
        Persona.find({},(err, personas)=>{
            if(err) throw err;

            res.send( personas );
        })
    };
    //traer persona por id
    getPersonaId(id, res){
        Persona.find({_id: id}, (err, personaId) =>{
            if(err) throw err;
            res.send({ Persona: personaId})
        })
    };
    //agregar persona
    setPersona(persona, res){
        Persona.create(persona, function(err, newPersona){
            if(err) throw err;
            res.send({status: 200, pU: newPersona});
        })
    };
    //actualizar persona por id
    updatePersona(persona, res){
        let {id, nombre, telefono, correo, fecha_de_nacimiento, foto } = persona;
        Persona.updateOne(
            {_id: id},
            { $set: {nombre: nombre, telefono: telefono, correo: correo, fecha_de_nacimiento: fecha_de_nacimiento, foto: foto}}
        )
        .then(rawResponse => {
            res.send({message: "Persona updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        });
    };
    //eliminar una persona por id
    deletePersona(id, res){
        Persona.deleteOne({_id: id }, function(err){
            if (err) throw err;
            res.send({message: "Persona eliminada"});
        });
    };
//--------------------------------------------------------------

//    ADMIN

//-------------------------------------------------------------
    //controlador de agregar Admin
    setAdmin(admin, res){
        Admin.create(admin, function(err, newAdmin){
            if(err) throw err;
            res.send({status: 200, aU: newAdmin})
        })
    }
    //traer admins
    getAdmins(res){
        Admin.find({},(err, admins)=>{
            if(err) throw err;

            res.send( admins );
        })
    };
    //traer admins con persona
    getAdmins_persona(res){
    Admin.find({})
    .populate("persona")
    .exec((err, admin)=>{
        if(err) throw err;
        res.send(admin);
        })
    };
    //traer Admin por id
    getAdminId(id, res){
        Admin.find({_id: id}, (err, AdminId) =>{
            if(err) throw err;
            res.send({ Admin: AdminId})
        })
    };
     //actualizar Admin por id
     updateAdmin(admin, res){
        let {id, nombre, persona } = admin;
        Admin.updateOne(
            {_id: id},
            { $set: {nombre: nombre, persona: persona}}
        )
        .then(rawResponse => {
            res.send({message: "Admin updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        });
    };
    //eliminar una Admin por id
    deleteAdmin(id, res){
        Admin.deleteOne({_id: id }, function(err){
            if (err) throw err;
            res.send({message: "Admin eliminado"});
        });
    };
//--------------------------------------------------------------


// DOCENTES


//----------------------------------------------------------------
// agregar Docente 
    setDocente(docente, res){
        Docente.create(docente, function(err, newDocente){
            if(err) throw err;
            res.send({status: 200, nU: newDocente});
        });
    };

// traer Docente
getDocentes(res){
    Docente.find({},(err, docentes)=>{
        if(err) throw err;

        res.send( docentes );
    })
};
 //traer docente por id
 getDocenteId(id, res){
    Docente.find({_id: id}, (err, DocenteId) =>{
        if(err) throw err;
        res.send({ Docente: DocenteId})
    })
};
 //actualizar docente por id
 updateDocente(docente, res){
    let {id, nombre, persona, foto, asignatura} = docente;
    Docente.updateOne(
        {_id: id},
        { $set: {nombre: nombre, persona: persona, foto: foto, asignatura: asignatura}}
    )
    .then(rawResponse => {
        res.send({message: "Docente updated", raw: rawResponse})
    })
    .catch(err => {
        if (err) throw err;
    });
};
//eliminar una docente por id
deleteDocente(id, res){
    Docente.deleteOne({_id: id }, function(err){
        if (err) throw err;
        res.send({message: "Docente eliminado"});
    });
};
//--------------------------------------------------------------

// ASIGNATURA 

//-------------------------------------------------------------------
// agregar Asignatura
    setAsignatura(asignatura, res){
        Asignatura.create(asignatura, function(err, newAsignatura){
            if(err) throw err;
            res.send({status: 200, nU: newAsignatura});
    });
};

// traer Asignatura
    getAsignaturas(res){
        Asignatura.find({}, (err, asignatura) => {
            if(err) throw err;
            res.send( asignatura);
        });
    };
     //traer asignatura por id
 getAsignaturaId(id, res){
    Asignatura.find({_id: id}, (err, AsignaturaId) =>{
        if(err) throw err;
        res.send({ asignatura: AsignaturaId})
    })
};
 //actualizar asignatura por id
 updateAsignatura(asignatura, res){
    let {id, nombre, icono} = asignatura;
    Asignatura.updateOne(
        {_id: id},
        { $set: {nombre: nombre, icono: icono}}
    )
    .then(rawResponse => {
        res.send({message: "Asignatura updated", raw: rawResponse})
    })
    .catch(err => {
        if (err) throw err;
    });
};
//eliminar una asignatura por id
deleteAsignatura(id, res){
    Asignatura.deleteOne({_id: id }, function(err){
        if (err) throw err;
        res.send({message: "Asignatura eliminada"});
    });
};
//--------------------------------------------------------------


// GRADOS


//--------------------------------------------------------------

// agregar Grado
    setGrado(grado, res){
        Grado.create(grado, function(err, newGrado){
            if(err) throw err;
            res.send({status: 200, nU: newGrado});
        })
    };
// traer Grados
    getGrados(res){
         Grado.find({}, (err, grado) => {
            if(err) throw err;
            res.send( grado);
            
    });
};
     //traer grado por id
     getGradoId(id, res){
        Grado.find({_id: id}, (err, GradoId) =>{
            if(err) throw err;
            res.send({ grado: GradoId})
        })
    };
     //actualizar grado por id
     updateGrado(grado, res){
        let {id, nombre, periodo, asignatura} = grado;
        Grado.updateOne(
            {_id: id},
            { $set: {nombre: nombre, periodo: periodo, asignatura: asignatura}}
        )
        .then(rawResponse => {
            res.send({message: "Grado updated", raw: rawResponse})
        })
        .catch(err => {
            if (err) throw err;
        });
    };
    //eliminar una Grado por id
    deleteGrado(id, res){
        Grado.deleteOne({_id: id }, function(err){
            if (err) throw err;
            res.send({message: "Grado eliminado"});
        });
    };
//--------------------------------------------------------------

//   PERIODOS

//---------------------------------------------------------------
// agregar Periodo
setPeriodo(periodo, res){
    Periodo.create(periodo, function(err, newPeriodo){
        if(err) throw err;
        res.send({status: 200, nU: newPeriodo});
    })
};
// traer Periodos
    getPeriodos(res){
     Periodo.find({}, (err, periodo) => {
       if(err) throw err;
       res.send( periodo);
       
    });
};
 //traer Periodo por id
 getPeriodoId(id, res){
    Periodo.find({_id: id}, (err, PeriodoId) =>{
        if(err) throw err;
        res.send({ periodo: PeriodoId})
    })
};
 //actualizar Periodo por id
 updatePeriodo(periodo, res){
    let {id, nombre, recurso, grado} = periodo;
    Periodo.updateOne(
        {_id: id},
        { $set: {nombre: nombre, recurso: recurso, grado: grado}}
    )
    .then(rawResponse => {
        res.send({message: "Periodo updated", raw: rawResponse})
    })
    .catch(err => {
        if (err) throw err;
    });
};
//eliminar Periodo por id
deletePeriodo(id, res){
    Periodo.deleteOne({_id: id }, function(err){
        if (err) throw err;
        res.send({message: "Periodo eliminado"});
    });
};
//--------------------------------------------------------------

// LOGIN

//-----------------------------------------------------------------
// agregar Login
    setLogin(login, res){
        Login.create(login, function(err, newLogin){
        if(err) throw err;
        res.send({status: 200, nU: newLogin});
    })
};
// traer Login
    getLogin(res){
        Login.find({}, (err, login) => {
         if(err) throw err;
        res.send( login);
      
   });
};
 //traer Login por id
 getLoginId(id, res){
    Login.find({_id: id}, (err, LoginId) =>{
        if(err) throw err;
        res.send({ login: LoginId})
    })
};
 //actualizar Login por id
 updateLogin(login, res){
    let {id, usuario, contraseña, persona} = login;
    Login.updateOne(
        {_id: id},
        { $set: {usuario: usuario, contraseña: contraseña, persona: persona}}
    )
    .then(rawResponse => {
        res.send({message: "Login updated", raw: rawResponse})
    })
    .catch(err => {
        if (err) throw err;
    });
};
//eliminar Login por id
deleteLogin(id, res){
    Login.deleteOne({_id: id }, function(err){
        if (err) throw err;
        res.send({message: "Login eliminado"});
    });
};
//----------------------------------------------------------------

// ESTUDIANTES!!

//--------------------------------------------------------------

    // agregar Estudiante
    setEstudiante(estudiante, res){
        Estudiante.create(estudiante, function(err, newEstudiante){
        if(err) throw err;
        res.send({status: 200, nU: newEstudiante});
    })
};
    // traer Estudinates
    getEstudiante(res){
        Estudiante.find({}, (err, estudiante) => {
         if(err) throw err;
        res.send( estudiante);
      
   });
};
 //traer Estudiante por id
 getEstudianteId(id, res){
    Estudiante.find({_id: id}, (err, EstudianteId) =>{
        if(err) throw err;
        res.send({ estudiante: EstudianteId})
    })
};
 //actualizar Estudiante por id
 updateEstudiante(estudiante, res){
    let {id, nombre, fecha_de_nacimiento, grado, persona, asignatura} = estudiante;
    Estudiante.updateOne(
        {_id: id},
        { $set: {nombre: nombre, fecha_de_nacimiento: fecha_de_nacimiento, grado: grado, persona: persona, asignatura: asignatura}}
    )
    .then(rawResponse => {
        res.send({message: "Estudiante updated", raw: rawResponse})
    })
    .catch(err => {
        if (err) throw err;
    });
};
//eliminar Estudiante por id
deleteEstudiante(id, res){
    Estudiante.deleteOne({_id: id }, function(err){
        if (err) throw err;
        res.send({message: "Estudiante eliminado"});
    });
};
//--------------------------------------------------------------

// RECURSOS

//-----------------------------------------------------------------
    // agregar Recurso
    setRecurso(recurso, res){
        Recurso.create(recurso, function(err, newRecurso){
        if(err) throw err;
        res.send({status: 200, nU: newRecurso});
    })
};
    // traer Recursos
    getRecurso(res){
        Recurso.find({}, (err, recurso) => {
         if(err) throw err;
        res.send( recurso );
      
   });
};
 //traer Recurso por id
 getRecursoId(id, res){
    Recurso.find({_id: id}, (err, RecursoId) =>{
        if(err) throw err;
        res.send({ recurso: RecursoId})
    })
};
 //actualizar Recurso por id
 updateRecurso(recurso, res){
    let {id, nombre_recurso, asignatura, icono, tipo_recurso, descripcion_recurso, video, documento, enlace} = recurso;
    Recurso.updateOne(
        {_id: id},
        { $set: {nombre_recurso: nombre_recurso, asignatura: asignatura, icono: icono, tipo_recurso: tipo_recurso, descripcion_recurso: descripcion_recurso, video: video, documento: documento, enlace: enlace}}
    )
    .then(rawResponse => {
        res.send({message: "Recurso updated", raw: rawResponse})
    })
    .catch(err => {
        if (err) throw err;
    });
};
//eliminar Recurso por id
deleteRecurso(id, res){
    Recurso.deleteOne({_id: id }, function(err){
        if (err) throw err;
        res.send({message: "Recurso eliminado"});
    });
};


//--------------------------------------------------------------

//COLEGIO

//--------------------------------------------------------------

//agregar Colegio 
setColegio(colegio, res){
    Colegio.create(colegio, function(err, newColegio){
    if(err) throw err;
    res.send({status: 200, nU: newColegio});
})
};
// traer Colegio
getColegio(res){
    Colegio.find({}, (err, colegio) => {
     if(err) throw err;
    res.send( colegio );
  
});
};
//traer Colegio por id
getColegioId(id, res){
    Colegio.find({_id: id}, (err, ColegioId) =>{
        if(err) throw err;
        res.send({ colegio: ColegioId})
    })
};

//actualizar Colegio por id
updateColegio(colegio, res){
    let {id, nombre, año, telefono, direccion, descripcion, ubicacion} = colegio;
    Colegio.updateOne(
        {_id: id},
        { $set: {nombre: nombre, año: año, telefono: telefono, direccion: direccion, descripcion: descripcion, ubicacion: ubicacion}}
    )
    .then(rawResponse => {
        res.send({message: "Colegio updated", raw: rawResponse})
    })
    .catch(err => {
        if (err) throw err;
    });
};
//eliminar Colegio por id
deleteColegio(id, res){
    Colegio.deleteOne({_id: id }, function(err){
        if (err) throw err;
        res.send({message: "Colegio eliminado"});
    });
};


}
exports.controller = new Controller();