using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DockerDefinitivo.Api.Model
{
    public class Tarefa
    {
        [Key]
        public int Id { get; set; }
        public string Servico { get; set; }
        public string Tipo { get; set; }
        public DateTime dia { get; set; }
        public float Valor { get; set; }
        public bool Status { get; set; }
    }
}
