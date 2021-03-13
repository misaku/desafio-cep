/** @class Cep
 * @description Classe responsavel para tratar CEP
 * */
class Cep {
  public static isValid(cep: string) {
    /**
     * Regex para validação de cep
     * esse regex garante
     * que comece e termine com numero `^`inicio `$`fim
     * que seja no formato em 00?000?000 no qual as `?` representa um separador que pode ou não existir,
     * no primeiro separador somente pode `.` ja no segundo separador alem do ponto pde `-` e espaço
     * com isso consigo garantir a validação dos seguintes formatos
     * `00.000.000`, `00.000-000`, `00.000 000`, `00000.000`, `00000-000`, `00000 000`, `00000000`
     */
    const format = /^[0-9]{2}?(\.?)[0-9]{3}?((-|.|\s)?)[0-9]{3}$/g;

    return format.test(cep.trim());
  }

  public static clearedValue(cep: string) {
    /** Metodo que retorna somente os numeros */
    return (cep.trim().match(/\d+/g) || []).join('');
  }
}
