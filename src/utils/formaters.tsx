const Money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default class Formaters {
  public static moneyFormat(money: number) {
    return Money.format(money);
  }
}
