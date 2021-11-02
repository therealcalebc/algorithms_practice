public class Solution {
    public double MyPow(double x, int n) {
        if(x == 0) return 0;
        if(n == 0) return 1;
        if(n < 0) {
            n = -1 * n;
            x = 1 / x;
        }
        return MyPow(x, n, x);
    }
    public double MyPow(double x, int n, double acc) {
        if(acc == 0) return 0;
        if(n == 1) return acc;
        if(n < 4) return MyPow(x, n - 1, acc * x);
        int y = FactorOf(n);
        if(y == n) return MyPow(x, n - 1, acc * x);
        double z = MyPow(x, y, x);
        if(z == 0) return 0;
        return MyPow(z, n / y, z) * (acc / x);
    }
    public int FactorOf(int n) {
        double s = Math.Sqrt(n);
        int q = (int) Math.Floor(s);
        int r = (int) Math.Ceiling(s);
        if(q.Equals(r)) return q;
        while(q >= 2 && r <= n / 2) {
            if(n % q == 0) return q;
            if(n % r == 0) return r;
            q--;
            r++;
        }
        return n;
    }
}