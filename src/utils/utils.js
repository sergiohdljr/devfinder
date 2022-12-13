// formatar mês 
export const formatarMes = (mes) => {
  if (mes === "01") return "Jan";
  if (mes === "02") return "Fev";
  if (mes === "03") return "Mar";
  if (mes === "04") return "Abr";
  if (mes === "05") return "Mai";
  if (mes === "06") return "Jun";
  if (mes === "07") return "Jul";
  if (mes === "08") return "Ago";
  if (mes === "09") return "Set";
  if (mes === "10") return "Out";
  if (mes === "11") return "Nov";
  if (mes === "12") return "Dez";
};
// formatar Data
export const criacaoConta = (dataCriacao) => {
  const diaCriacao = dataCriacao.slice(8, 10);
  const mesCriacao = formatarMes(dataCriacao.slice(5, 7));
  const anoCriacao = dataCriacao.slice(0, 4);
  return `Criada em ${diaCriacao} ${mesCriacao} ${anoCriacao}`;
};

// checar se prop é null
export const disponivel = (string) =>{
  return string ??= "Indisponível"
}
