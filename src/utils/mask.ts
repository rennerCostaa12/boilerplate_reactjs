export class Mask {
  static setMaskPhoneValue(value: string): string {
    let phone = String(value);
    phone = phone.replace(/\D/g, "");
    phone = phone.substring(0, 11);
    phone = phone.replace(/(\d{2})(\d{4,5})(\d{4})/g, "($1) $2-$3");
    return phone;
  }

  static setMaskCpf(value: string): string {
    let cpf = value;
    cpf = cpf.replace(/[^0-9]+/, "");
    cpf = cpf.replace(/(\d{3})/g, "$1");
    cpf = cpf.replace(/(\d{3})(\d{3})/g, "$1$2");
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/g, "$1$2$3");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  static setRemoveMaskCpf(value: string): string {
    let remove = value;
    remove = value.replace(/\./g, "").replace(/-/g, "");
    return remove;
  }

  static setMaskMoney(money: string): string {
    if (!money) return "0,00";
    if (Number.isNaN(money)) return "0,00";

    let value = money.replace(/\D/g, "");
    value = String((Number(value) / 100).toFixed(2));

    if (isNaN(parseFloat(value))) {
      return "0,00";
    }

    value = value.replace(".", ",");
    value = value.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    value = value.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return value;
  }

  static setMaskOnlyLetters(value: string): string {
    let letter = String(value);
    letter = letter.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");

    return letter;
  }
}
