using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DockerDefinitivo.Api.Model;
using DockerDefinitivo.Api.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DockerDefinitivo.Api.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class TarefaController : ControllerBase
    {
        private readonly IBaseInterface _db;
        public TarefaController(IBaseInterface db)
        {
            _db = db;
        }
        // GET: api/Tarefa
        [HttpGet]
        [Route("v1/")]
        public IEnumerable<Tarefa> Get()
        {
            return _db.ListAll();
        }

        [HttpGet]
        [Route("v1/servico/{servico}")]
        public IEnumerable<Tarefa> Get(string servico)
        {
            return _db.ListServico(servico);
        }

        
        [HttpGet]
        [Route("v1/tipo/{tipo}")]
        public IEnumerable<Tarefa> GetTipo(string tipo)
        {
            return _db.ListTipo(tipo);
        }

        // GET: api/Tarefa/5
        
        [HttpGet]
        public Tarefa Get(int id)
        {
            return _db.GetId(id);
        }

        // POST: api/Tarefa
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Tarefa/5
        [HttpPut]
        [Route("v1/{id}")]

        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("v1/{id}")]

        public void Delete(int id)
        {
        }
    }
}
