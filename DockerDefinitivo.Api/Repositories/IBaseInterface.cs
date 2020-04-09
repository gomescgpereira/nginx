using DockerDefinitivo.Api.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DockerDefinitivo.Api.Repositories
{
    public interface IBaseInterface
    {
        IEnumerable<Tarefa> ListAll();
        Tarefa GetId(int id);
        IEnumerable<Tarefa> ListTipo(string tipo);
        IEnumerable<Tarefa> ListServico(string servico);

    }
}
