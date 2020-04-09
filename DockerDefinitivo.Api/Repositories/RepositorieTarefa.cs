using DockerDefinitivo.Api.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;


namespace DockerDefinitivo.Api.Repositories
{
    
    public class RepositorieTarefa : IBaseInterface
    {
        private IConfiguration _config;
        public RepositorieTarefa(IConfiguration configuration)
        {
            _config = configuration;
        }
        public Tarefa GetId(int id)
        {
            using (MySqlConnection conexao = new MySqlConnection(
                _config.GetConnectionString("ConnectionDapper")))
            {
                return conexao.QueryFirst<Tarefa>(
                "SELECT * FROM TAREFA Where Id = @Id",
                new { Id = id });
            }
        }

        public IEnumerable<Tarefa> ListAll()
        {
            using (MySqlConnection conexao = new MySqlConnection(
                _config.GetConnectionString("ConnectionDapper")))
            {
                return conexao.Query<Tarefa>(
                "SELECT * FROM tarefa");
            }
            //throw new NotImplementedException();
        }

        public IEnumerable<Tarefa> ListServico(string servico)
        {
            using (MySqlConnection conexao = new MySqlConnection(
                _config.GetConnectionString("ConnectionDapper")))
            {
                return conexao.Query<Tarefa>(
                "SELECT * FROM tarefa WHERE Servico = @Servico",
                 new { Servico = servico });
                
            }
        }

        public IEnumerable<Tarefa> ListTipo(string tipo)
        {
            using (MySqlConnection conexao = new MySqlConnection(
                _config.GetConnectionString("ConnectionDapper")))
            {
                return conexao.Query<Tarefa>(
                "SELECT * FROM tarefa WHERE Tipo = @Tipo",
                 new { Tipo = tipo });;
            }
        }
    }
}
