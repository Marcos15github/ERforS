//requerimientos
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const { controller } = require('./Controller');

// PRUEBA PARA PRACTICAR 
//------------------------------------------
app.get("/", (req, res) => {
    res.send("Hola mundo");
});
//agregar un people 
app.post("/peoples", function(req, res){
    let { people } = req.body;
    controller.setPeople(people, res);
});

//Autenticación 

app.post("/auth", function(req, res){
    people  = req.body;
   controller.getAuth(people, res);
});
//----------------------------------------
//traer roles Roles
app.get("/roles", (req, res) => {
    controller.getRole(res);
});
// agregar roles Roles
app.post("/roles", function(req,res){
    const role = req.body;
    controller.setRole(role, res);
});
//eliminar rol por id
app.delete("/roles/:id", function(req, res){
    let {id} = req.params;
    controller.deleteRole(id, res);
});

//traer a los people
app.get("/peoples", (req, res) => {
    controller.getPeople(res);
});

//---------------------------------------------------

// PERSONAS 

//--------------------------------------------------
//traer a personas
app.get("/Personas", (req, res) => {
    controller.getPersona(res);
});
//traer a persona por id
app.get("/Persona/:id", function(req, res){
    let { id } = req.params;
    controller.getPersonaId(id, res);
});

//agregar personas
app.post("/Personas", function(req,res){
    let { persona } = req.body;
    controller.setPersona(persona, res);
});
//Actualizar una persona por id
app.put("/Persona/:id", function(req, res){
    let persona = req.body.persona;
    persona.id = req.params.id;
    controller.updatePersona(persona, res);
});
//eliminar una persona por id
app.delete("/Persona/:id", function(req, res){
    let {id} = req.params;
    controller.deletePersona(id, res);
});
//----------------------------------------------------



// ADMINS
//-------------------------------------------------------
//agregar Admins
app.post("/Admins", function(req, res){
    let { admin } = req.body;
    controller.setAdmin(admin, res);
});
//traer Admins 
app.get("/Admins", (req, res) =>{
    controller.getAdmins(res);
});

//traer Admins con personas
app.get("/Admins_persona", (req , res) => {
    controller.getAdmins_persona(res);
});
//traer a Admin por id
app.get("/Admin/:id", function(req, res){
    let { id } = req.params;
    controller.getAdminId(id, res);
});
//Actualizar una Admin por id
app.put("/Admin/:id", function(req, res){
    let admin = req.body.admin;
    admin.id = req.params.id;
    controller.updateAdmin(admin, res);
});
//eliminar una admin por id
app.delete("/Admin/:id", function(req, res){
    let {id} = req.params;
    controller.deleteAdmin(id, res);
});
//----------------------------------------------------
// DOCENTES 
//----------------------------------------------------
//agregar Docentes
app.post("/Docente", function(req,res){
    let { docente } = req.body;
    controller.setDocente(docente, res);
});

//traer Docentes 
app.get("/Docentes", (req, res) =>{
    controller.getDocentes(res);
});
//traer a docente por id
app.get("/Docente/:id", function(req, res){
    let { id } = req.params;
    controller.getDocenteId(id, res);
});
//Actualizar una docente por id
app.put("/Docente/:id", function(req, res){
    let docente = req.body.docente;
    docente.id = req.params.id;
    controller.updateDocente(docente, res);
});
//eliminar una docente por id
app.delete("/Docente/:id", function(req, res){
    let {id} = req.params;
    controller.deleteDocente(id, res);
});
//----------------------------------------------------
// ASIGNATURAS
//----------------------------------------------------
//agregar Asignatura
app.post("/Asignatura", function(req,res){
    let { asignatura } = req.body;
    controller.setAsignatura(asignatura, res);
});

//traer Asignatura
app.get("/Asignaturas", (req, res) => {
    controller.getAsignaturas(res);
});
//traer a Asignatura por id
app.get("/Asignatura/:id", function(req, res){
    let { id } = req.params;
    controller.getAsignaturaId(id, res);
});
//Actualizar una Asignatura por id
app.put("/Asignatura/:id", function(req, res){
    let asignatura = req.body.asignatura;
    asignatura.id = req.params.id;
    controller.updateAsignatura(asignatura, res);
});
//eliminar una asignatura por id
app.delete("/Asignatura/:id", function(req, res){
    let {id} = req.params;
    controller.deleteAsignatura(id, res);
});
//----------------------------------------------------
// GRADOS
//------------------------------------------------------
//agregar Grado
app.post("/Grado", function(req,res){
    let { grado } = req.body;
    controller.setGrado(grado, res);
});
//traer Grados
app.get("/Grados", (req, res) => {
    controller.getGrados(res);
});  
//traer a grado por id
app.get("/Grado/:id", function(req, res){
    let { id } = req.params;
    controller.getGradoId(id, res);
});
//Actualizar una grado por id
app.put("/Grado/:id", function(req, res){
    let grado = req.body.grado;
    grado.id = req.params.id;
    controller.updateGrado(grado, res);
});
//eliminar una grado por id
app.delete("/Grado/:id", function(req, res){
    let {id} = req.params;
    controller.deleteGrado(id, res);
});
//-----------------------------------------------------
// PERIODOS 
//----------------------------------------------------
//agregar Periodo
app.post("/Periodo", function(req,res){
    let { periodo } = req.body;
    controller.setPeriodo(periodo, res);
});
//traer Periodo
app.get("/Periodos", (req, res) => {
    controller.getPeriodos(res);
}); 
//traer a Periodo por id
app.get("/Periodo/:id", function(req, res){
    let { id } = req.params;
    controller.getPeriodoId(id, res);
});
//Actualizar una Periodo por id
app.put("/Periodo/:id", function(req, res){
    let periodo = req.body.periodo;
    periodo.id = req.params.id;
    controller.updatePeriodo(periodo, res);
});
//eliminar una Periodo por id
app.delete("/Periodo/:id", function(req, res){
    let {id} = req.params;
    controller.deletePeriodo(id, res);
});
//----------------------------------------------------
// LOGIN
//----------------------------------------------------
//agregar Login
app.post("/Login", function(req,res){
    let { login } = req.body;
    controller.setLogin(login, res);
});
//traer Login
app.get("/Login", (req, res) => {
    controller.getLogin(res);
}); 
//traer a Login por id
app.get("/Login/:id", function(req, res){
    let { id } = req.params;
    controller.getLoginId(id, res);
});
//Actualizar una Login por id
app.put("/Login/:id", function(req, res){
    let login = req.body.login;
    login.id = req.params.id;
    controller.updateLogin(login, res);
});
//eliminar una Login por id
app.delete("/Login/:id", function(req, res){
    let {id} = req.params;
    controller.deleteLogin(id, res);
});
//----------------------------------------------------
// ESTUDIANTES
//-----------------------------------------------------
//agregar Estudiante
app.post("/Estudiante", function(req,res){
    let { estudiante } = req.body;
    controller.setEstudiante(estudiante, res);
});
//traer Estudiantes
app.get("/Estudiantes", (req, res) => {
    controller.getEstudiante(res);
}); 
//traer a Estudiante por id
app.get("/Estudiante/:id", function(req, res){
    let { id } = req.params;
    controller.getEstudianteId(id, res);
});
//Actualizar una Estudiante por id
app.put("/Estudiante/:id", function(req, res){
    let estudiante = req.body.estudiante;
    estudiante.id = req.params.id;
    controller.updateEstudiante(estudiante, res);
});
//eliminar una Estudiante por id
app.delete("/Estudiante/:id", function(req, res){
    let {id} = req.params;
    controller.deleteEstudiante(id, res);
});
//----------------------------------------------------
// RECURSOS 
//---------------------------------------------------
//agregar Recurso
app.post("/Recurso", function(req,res){
    let { recurso } = req.body;
    controller.setRecurso(recurso, res);
});
//traer Recursos
app.get("/Recursos", (req, res) => {
    controller.getRecurso(res);
}); 
//traer Recurso por id
app.get("/Recurso/:id", function(req, res){
    let { id } = req.params;
    controller.getRecursoId(id, res);
});
//Actualizar una Recurso por id
app.put("/Recurso/:id", function(req, res){
    let recurso = req.body.recurso;
    recurso.id = req.params.id;
    controller.updateRecurso(recurso, res);
});
//eliminar una Recurso por id
app.delete("/Recurso/:id", function(req, res){
    let {id} = req.params;
    controller.deleteRecurso(id, res);
});
//----------------------------------------------------
//COLEGIO
//----------------------------------------------------
//agregar Colegio
app.post("/Colegio", function(req,res){
    let { colegio} = req.body;
    controller.setColegio(colegio, res);
});
//traer Colegio
app.get("/Colegio", (req, res) => {
    controller.getColegio(res);
}); 
//traer Colegio por id
app.get("/Colegio/:id", function(req, res){
    let { id } = req.params;
    controller.getColegioId(id, res);
});
//Actualizar una Colegio por id
app.put("/Colegio/:id", function(req, res){
    let colegio = req.body.colegio;
    colegio.id = req.params.id;
    controller.updateColegio(colegio, res);
});
//eliminar una Colegio por id
app.delete("/Colegio/:id", function(req, res){
    let {id} = req.params;
    controller.deleteColegio(id, res);
});



exports.app = app;