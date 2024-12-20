export class NumberFormatHelper {
  public toRupiah(num: number): string {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num);
  }
}
