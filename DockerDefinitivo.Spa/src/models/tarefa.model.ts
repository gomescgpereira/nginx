export class Tarefa {

    /**
     *
     */
    constructor( 
        public id: Number,
        public servico: String,
        public tipo: String,
        public valor: Number,
        public dia: Date,
        public Status: Boolean
    ) { }
}
